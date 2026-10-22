---
title: ARK organizations on the world map
permalink: /community/organizations/map-list/
published: true
---

Institutions and geographic locations from the ARK organizations map.

<!--more-->

{% include content/section.html do="start" color="cool" %}

This list contains all {{ site.data.organization_map.records | size }} institution
entries in the [ARK organizations map]({{ site.map_ark_orgs }}), including their
NAANs and the geographic locations provided by the map. It is a snapshot from
{{ site.data.organization_map.retrieved }}. Repeated entries are retained as they
appear in the map. Blank placeholder markers are omitted.

Use your browser's Find command to look for an institution, NAAN, city or country.
You can also [download the map's source data]({{ site.data.organization_map.source }}).

<ul class="list-unstyled">
{% for organization in site.data.organization_map.records %}
  <li class="mb-4">
    <h2 class="h5">{{ organization.name | escape }}</h2>
    <dl>
      <dt>NAAN</dt>
      <dd>{{ organization.naan | escape }}</dd>
      <dt>Location supplied by the map</dt>
      <dd>{{ organization.location | escape }}</dd>
      {% if organization.coordinates %}
      <dt>Map coordinates, latitude and longitude</dt>
      <dd>{{ organization.coordinates | escape }}</dd>
      {% endif %}
    </dl>
  </li>
{% endfor %}
</ul>

{% include content/section.html do="end" %}
