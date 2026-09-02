# arks.org

This site is built with Jekyll.

## Build environment

The project uses:

- Ruby 3.4.10, selected by `.ruby-version`
- Bundler 2.6.9, recorded in `Gemfile.lock`
- Jekyll 4.4.1 or later within the `Gemfile` constraint

## Install Ruby

Install Ruby 3.4.10 using a Ruby version manager, `rbenv` for example.
From the project directory, run:

```sh
rbenv install 3.4.10
rbenv local 3.4.10
ruby --version
```

The last command should report Ruby 3.4.10. 

## Install dependencies

Install the Bundler version recorded in the lockfile, then install the locked gems:

```sh
gem install bundler -v 2.6.9
bundle --version
bundle install
```

Verify the resolved Jekyll version:

```sh
bundle exec jekyll --version
```

The current lockfile resolves Jekyll 4.4.1. To intentionally update dependencies after changing `Gemfile`, run:

```sh
bundle update
```

## Build the site

Generate the static site in `_site/`:

```sh
bundle exec jekyll build --destination _site
```

The `_site/` directory is generated output and should not be edited directly.

## Preview locally

Start a local server with live reload:

```sh
bundle exec jekyll serve --livereload
```

Open <http://localhost:4000/arks.github.io/> in a browser.


addtional lines for testing