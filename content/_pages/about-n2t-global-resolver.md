---
title: More about the N2T global resolver
permalink: /about/n2t-global-resolver/
pid: 821
date: 2021-01-23T23:05:29+00:00
published: true
---

The N2T global resolver redirects identifiers to forwarding links. Resolves
various types, not just ARKs. Built on open principles.

<!--more-->

{% include content/section.html do="start" color="cool" label="N2T for resolving ARKs and other identifiers" %}

## How N2T Works

When a resolution request comes in from the general public, N2T looks up the
identifier and redirects the original link to a forwarding link. To do this it
uses two different resolution “patterns”. To begin, N2T tries to resolve
according to information found in an individual stored identifier. Failing
that, N2T tries to resolve according to any stored class rules, based on the
identifier type.

N2T has a different kind of stored data for each pattern. First, it stores
individual records for about 50 million object identifiers (eg, ARKs, DOIs)
that it obtains from three sources: [EZID.cdlib.org], [Internet Archive], and
[YAMZ.net]. When such records include a redirection URL (*target*) and
descriptive metadata, N2T can act on inflections as well as
perform [suffix passthrough] and “content negotiation”. To support creation
and maintenance of individual identifier records, there is an [N2T API]
requiring login credentials. The API also allows batch operations and unique
identifier generation (minting).

Second, even if N2T knows nothing about an individual identifier, resolution
may still work because of a stored routing rule record triggered by the type
of the identifier. N2T maintains over 3500 rule records regularly updated from
several sources, including the [NAAN registry], a database of shoulders (see
[namespaces]), and a formal partnership on [compact identifiers] with
[identifiers.org].

{% include content/fig.html
  url="/assets/images/share/n2t_arch_classic.jpg"
  label="Diagram of N2T resolver structure up to 2024"
  alt="Diagram of the N2T resolver showing an original public link entering the resolver and a forwarding link leaving it, with identifier records, rule sources, clients, and identifier generators connected below."
  description="Structure of the N2T resolver up to 2024."
%}

The diagram separates public access from login access. For public access, an
original link enters the Egg resolver and a forwarding link leaves it. The
resolver can also return metadata through inflections, content negotiation,
beacons, and records. Below the login boundary, EZID, YAMZ, and Internet
Archive clients supply identifier records and connect to the Hog string
generators. The Hog component generates unique strings for shoulders such as
`FK2`, `fk4`, `s8`, and `D9`. Three rule sources feed the resolver: the NAAN
registry for organizations that assign ARKs; Identifiers.org and
PrefixCommons for 1,200 identifier schemes; and registered ARK and DOI
shoulders for sub-namespaces. The depicted system runs Eggnog and MongoDB on
AWS Linux.

## N2T is not just for ARKs

When demand for a global ARK resolver arose, basic principles of openness and
generality prevented the designers from creating yet another silo in the
DOI/Handle/PURL mold. Instead, the ARK resolver was built to be a generic,
scheme-agnostic resolver called N2T (Name-to-Thing), which now resolves over
900 types of identifier, including ARKs, DOIs, Handles, PURLs, URNs, ORCIDs,
ISSNs, etc. Resolution is essentially looking in a table for an identifier
string, regardless of type, and redirecting it to the right place.

The same basic principles guided the design of [Noid], which was built for
ARKs but is also regularly used by organizations that mint Handles.

[EZID.cdlib.org]: https://ezid.cdlib.org/
[Internet Archive]: https://archive.org/
[YAMZ.net]: https://yamz.net/
[suffix passthrough]: {{ site.baseurl }}{{ site.spt_explained }}
[N2T API]: https://n2t.net/e/n2t_apidoc.html
[NAAN registry]: {{ site.list_ark_orgs }}
[namespaces]: about-ark-namespaces.md
[compact identifiers]: https://n2t.net/e/compact_ids.html
[identifiers.org]: https://identifiers.org/
[Noid]: {{ site.baseurl }}/resources/noid/

{% include content/section.html do="end" %}
