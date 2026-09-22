#!/usr/bin/env ruby
# Run after building: bundle exec ruby scripts/check_accessibility.rb _site [baseurl]
require "nokogiri"
require "uri"

site = File.expand_path(ARGV.fetch(0, "_site"))
baseurl = ARGV.fetch(1, "").sub(%r{/$}, "")
failures = []
pages = 0
documents = {}
read_document = ->(file) { documents[file] ||= Nokogiri::HTML(File.read(file)) }
Dir.glob(File.join(site, "**", "*.html")).sort.each do |file|
  document = read_document.call(file)
  next unless document.at_css("body.arka")

  pages += 1
  path = file.delete_prefix("#{site}/")
  check = ->(condition, message) { failures << "#{path}: #{message}" unless condition }
  main = document.css("main")
  check.call(main.length == 1, "expected one main landmark")
  check.call(document.css("h1").length == 1, "expected one page h1")
  check.call(main.css("h1").length == 1, "page h1 must be inside main")
  skip = document.at_css("body a")
  check.call(skip && skip["href"] == "#main-content", "first link must skip to main content")
  target = document.at_css("#main-content")
  check.call(target && target["tabindex"] == "-1", "skip target must accept keyboard focus")

  level = 0
  main.css("h1, h2, h3, h4, h5, h6").each do |heading|
    current = heading.name[1].to_i
    check.call(current <= level + 1, "heading level skipped at #{heading.text.strip}")
    level = current
  end
  document.css("nav").each do |nav|
    check.call(nav["aria-label"] || nav["aria-labelledby"], "navigation must have a name")
  end
  document.css("iframe").each do |frame|
    labelled_by = frame["aria-labelledby"].to_s.split.map do |id|
      document.at_xpath("//*[@id=$id]", nil, { "id" => id })&.text
    end.compact.join(" ").strip
    name = [labelled_by, frame["aria-label"], frame["title"]].find { |value| !value.to_s.strip.empty? }
    check.call(name, "iframe needs an accessible name: #{frame['src']}")
  end
  route = "#{baseurl}/#{path.sub(/index\.html$/, '')}"
  document.css("a[href]").each do |link|
    href = link["href"].strip
    next if href.empty? || href.match?(%r{\A(?:[a-z][a-z0-9+.-]*:|//)}i)

    begin
      destination = URI.join("https://local.invalid#{route}", href)
      local_path = URI::DEFAULT_PARSER.unescape(destination.path)
      unless baseurl.empty? || local_path == baseurl || local_path.start_with?("#{baseurl}/")
        check.call(false, "local link leaves baseurl #{baseurl}: #{href}")
        next
      end
      local_path = local_path.delete_prefix(baseurl)
      target_file = File.expand_path(local_path.delete_prefix("/"), site)
      unless target_file == site || target_file.start_with?("#{site}/")
        check.call(false, "local link leaves site: #{href}")
        next
      end
      target_file = File.join(target_file, "index.html") if File.directory?(target_file)
      unless File.file?(target_file)
        check.call(false, "local link destination is missing: #{href}")
        next
      end
      fragment = URI::DEFAULT_PARSER.unescape(destination.fragment.to_s)
      next if fragment.empty? || File.extname(target_file) != ".html"

      target_document = read_document.call(target_file)
      fragment_exists = target_document.at_xpath("//*[@id=$fragment] | //a[@name=$fragment]", nil, { "fragment" => fragment })
      check.call(fragment_exists, "local link fragment is missing: #{href}")
    rescue URI::InvalidURIError => error
      check.call(false, "invalid local link #{href}: #{error.message}")
    end
  end
  main.css("img").each do |image|
    check.call(image.key?("alt"), "image needs alt: #{image['src']}")
    if path.match?(%r{about/(ark-namespaces|n2t-global-resolver)/})
      check.call(!image["alt"].to_s.strip.empty?, "informative diagram needs a nonempty alternative")
    end
  end
  document.css("section[aria-label]").each do |section|
    check.call(false, "section has an invisible heading: #{section['aria-label']}")
  end
  document.css("[id]").group_by { |node| node["id"] }.each do |id, nodes|
    check.call(nodes.length == 1, "duplicate id #{id}")
  end

  if path.match?(%r{about/ark-faq-(en|es|fr)/})
    language = path.match(/ark-faq-(en|es|fr)/)[1]
    check.call(document.at_css("html")["lang"] == language, "wrong FAQ document language")
    document.css(".arka__skip-link, header, .arka__navbar, .arka__social, footer, .arka__callout").each do |region|
      language_source = ([region] + region.ancestors.to_a).find { |node| node["lang"] }
      check.call(language_source && language_source["lang"] == "en", "English interface text needs English language metadata")
    end
    crumb = document.at_css(".arka__breadcrumbs [aria-current='page']")
    check.call(crumb && crumb["lang"] == language, "current breadcrumb needs the FAQ language")
    main.css("table").each do |table|
      check.call(table.at_css("caption") || table["aria-label"] || table["aria-labelledby"], "FAQ table needs a name")
    end
    ids = document.css("[id]").map { |node| node["id"] }
    main.css("a[href^='#']").each do |link|
      fragment = link["href"].delete_prefix("#")
      check.call(fragment.empty? || ids.include?(fragment), "FAQ link target is missing: #{link['href']}")
    end
  end
  if path == "sitemap/index.html"
    check.call(!main.text.match?(%r{</(?:div|section)>}), "stray closing tags visible in sitemap")
    %w[es fr].each do |language|
      link = main.at_css("a[href*='ark-faq-#{language}']")
      check.call(link && link["lang"] == language, "translated FAQ link needs #{language} language metadata")
    end
  end
end

abort "No rendered site pages found in #{site}" if pages.zero?
abort failures.join("\n") unless failures.empty?
puts "Accessibility structure checks passed for #{pages} pages."
