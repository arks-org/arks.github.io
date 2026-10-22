---
title: Overview of ARK organizations
permalink: /community/ark-organizations/
redirect_from: /naans/
published: true
---

Dashboard for ARK organizations and the distribution of local resolver
top-level domains. Current data appears when the public registry can be reached.

<!--more-->

{% include content/section.html do="start" color="cool" label="NAAN statistics" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/ark-organizations.css">
<script src="https://d3js.org/d3.v7.min.js" integrity="sha384-CjloA8y00+1SDAUkjs099PVfnY2KmDC2BZnws9kh8D/lX1s46w6EPhpXdqMfjK6i" crossorigin="anonymous"></script>

Every ARK organization has a [Name Assigning Authority Number] (NAAN) listed in
the public [NAAN registry]. Usually the NAAN representing a Name Assigning
Authority (NAA) is a 5-digit number, but sometimes it is
a [shoulder](https://arks.org/about/ark-namespaces/), which is a few characters
longer (e.g., "12345/x5"). <span id="registrySummary">Current registry data has
not been loaded. Use the public NAAN registry link above for current
records.</span>

Each NAAN record includes the local organizational resolver to which the global
[Name-to-Thing](https://n2t.net) (N2T.net) resolver will redirect ARKs that
come in with that NAAN. Most ARKs, however, are published as URLs based at the
local resolver (server) domain name, bypassing the global resolver.

## Distribution of top-level domains (TLDs)

The range of top-level domains (TLDs), the final part of the domain name,
across all local ARK resolvers is shown below. The table gives the count and
percentage for every TLD in the current data. There is also a simple
[NAAN registry search interface]({{ site.list_ark_orgs }}).

<div id="tld-container">
  <section id="tldLegend" class="ark-chart-data" aria-labelledby="tld-data-heading">
    <h3 id="tld-data-heading">All resolver TLDs</h3>
    <p id="tldDataSummary">Registry data has not been loaded. Current records
      are available in the <a href="{{ site.list_ark_orgs }}">public NAAN registry</a>.</p>
    <div class="ark-chart-table">
      <table id="tldDataTable">
        <caption>Resolver registrations by top-level domain</caption>
        <thead>
          <tr>
            <th scope="col">TLD</th>
            <th scope="col">Registrations</th>
            <th scope="col">Percentage</th>
          </tr>
        </thead>
        <tbody id="tldDataBody"></tbody>
      </table>
    </div>
  </section>
  <figure class="ark-chart-figure" aria-labelledby="tld-chart-caption">
    <div id="tldGraph" aria-hidden="true">
      <p>The chart appears when current registry data is available.</p>
    </div>
    <figcaption id="tld-chart-caption">
      Labeled bar chart of the most common TLDs. Smaller TLDs are grouped as
      "Other"; the table lists each TLD separately.
    </figcaption>
  </figure>
</div>

## Organizations registered per year

The next chart and table show the number of newly registered NAANs per year.
Choose a TLD to update both views. The table includes the count and percentage
for every year in the selected data.

<div class="ark-chart-filter">
  <label for="tldFilter">Filter annual registrations by TLD</label>
  <div class="ark-chart-filter__controls">
    <select id="tldFilter" aria-describedby="yearGraphStatus" disabled>
      <option value="">All top-level domains</option>
    </select>
    <button id="resetYearGraph" type="button" disabled>Show all TLDs</button>
  </div>
</div>

<p id="yearGraphStatus" role="status" aria-live="polite">Annual registration
data has not been loaded. Current records are available in the public NAAN
registry linked above.</p>

<figure class="ark-chart-figure" aria-labelledby="year-chart-caption">
  <div id="yearGraph" aria-hidden="true">
    <p>The chart appears when current registry data is available.</p>
  </div>
  <figcaption id="year-chart-caption">
    Visual summary of annual registrations. Exact values are listed in the table.
  </figcaption>
</figure>

<div class="ark-chart-table ark-chart-table--years">
  <table id="yearDataTable">
    <caption id="yearDataCaption">Annual registrations for all top-level domains</caption>
    <thead>
      <tr>
        <th scope="col">Year</th>
        <th scope="col">Registrations</th>
        <th scope="col">Percentage</th>
      </tr>
    </thead>
    <tbody id="yearDataBody"></tbody>
  </table>
</div>

## Latest ARK organizations registered

Any memory organization can start creating ARKs once it obtains a NAAN, which
may be requested at no cost by filling out the [NAAN request form].
<span id="latestSummary">Recent organization data has not been loaded. Use the
public NAAN registry link above for current records.</span>

<ul id="naan_latest"></ul>

<br>
<small class="arka__tagline d-block text-secondary text-uppercase fs-6">
  Page concept and JavaScript credit: Bob Coret, National Library of the Netherlands
</small>

<noscript>
  <p>This dashboard needs JavaScript to request and display registry data.
    <a href="{{ site.list_ark_orgs }}">Open the public NAAN registry</a> to browse
    the current records directly.</p>
</noscript>

<script src="{{ site.baseurl }}/assets/js/ark-organizations.js"></script>
<script>
  if (window.ArkOrganizations) {
    window.ArkOrganizations.init({
      registryUrl: "https://cdluc3.github.io/naan_reg_priv/naan_records.json"
    });
  }
</script>

[Name Assigning Authority Number]: {{ site.baseurl }}/about/ark-naans-and-systems/
[NAAN request form]: {{ site.naan_form_url }}
[NAAN registry]: {{ site.list_ark_orgs }}

{% include content/section.html do="end" %}
