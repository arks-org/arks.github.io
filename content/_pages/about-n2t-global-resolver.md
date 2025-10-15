---
title: More about the N2T global resolver
permalink: /about/n2t-global-resolver/
pid: 821
date: 2021-01-23T23:05:29+00:00
published: true
---

N2T global resolver: Redirects identifiers to forwarding links. Resolves
various types, not just ARKs. Built on open principles.

<!--more-->

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

![][1]{: .img-thumbnail .img-fluid loading="lazy"}

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
[1]: https://lh3.googleusercontent.com/vZvC9P_CZkA7M0sos-lvF6QEt50rbzpZmu__eW3wIYtfw6ldRJu74Ze92zQohHHftmgXBisE4VzKUFCJMgRvKfOrornPKzmrhLzXhaO4ZHCafV4L-30KhjbmbOURLf7zD4rOJSst
[Noid]: {{ site.baseurl }}/resources/noid/
