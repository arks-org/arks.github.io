---
title: Comparing ARKs, DOIs and other identifier systems
permalink: /about/comparing-arks-and-other-identifiers/
pid: 814
date: 2021-01-23T22:28:11+00:00
published: true
---

This article compares ARKs with other identifier systems like DOIs, Handles,
PURLs, and URNs. It highlights reasons to use ARKs, their differences, and the
advantages they offer in terms of cost, flexibility, metadata, and more.

<!--more-->

## Reasons to use ARKs as compared to DOIs

-   To keep costs down. While some ARK service providers exist, ARKs can be
    implemented locally with open-source tools.
-   To work with exactly the metadata you want.
-   To be able to create identifiers without metadata.
-   To be able to create an identifier even before your object exists.
-   To have an identifier as soon as you create the first draft of your data.
-   To hold that identifier private while the data and metadata evolve, and
    decide (maybe years) later, to publish or discard it.
-   To retain that identifier upon publication, perhaps then assigning an
    additional identifier, such as a DOI.
-   Because ARKs, built for generic application and not specifically for
    published content, fit naturally with physical objects like samples or
    field stations.
-   Because ARK resolvers can deal with identifiers routinely damaged out in
    the world by text formatting processes that introduce hyphens.
-   Because most ARKs carry a Noid check digit that can be used to detect all
    common transcription errors rather than just some of them.
-   To be able to create shorter identifiers, since mixed-case permits
    *denser* strings (a larger number of strings of a given length).
-   To be able to change vendor and/or infrastructure without having to
    coordinate database transfers with a central authority.
-   To be able to deal with the [namespace splitting problem] without losing
    control of your identifiers.
-   To link identifiers to different kinds of nuanced [persistence
    commitments].
-   To be able to add queries (eg, ?lang=en) when resolving your identifiers.
-   To use open infrastructure consistent with your organization’s values.
-   To link directly to the objects you value instead of to landing pages.
-   To create one identifier that enables millions (suffix passthrough).
-   To access convenient, full-function metadata via inflections.
-   To integrate easily with [IIIF] APIs using ARK qualifiers.

## What ARK, DOI, Handle, PURL, and URN have in common

These are the major persistent identifier types (or schemes).

-   All have been in existence since 2001 or before.
-   All are found in places like the Data Citation Index ℠, Wikipedia, and
    [ORCID.org] profiles.
-   All give access to almost any kind of thing, whether digital, physical,
    abstract, person, group, etc.

They also have very similar structure, as seen in the examples below,
consisting of four parts:

     https://n2t.net/ark:/99999/12345
       https://doi.org/10.99999/12345
    https://handle.net/10.99999/12345
         https://purl.org/99999/12345
    https://<various>/urn:99999:12345
{: .bg-secondary-subtle }

1.  the protocol (`https://`) plus a hostname,
2.  just for ARK and URN, there’s also a label (“ark:” or “urn:”),
3.  the name assigning authority (`99999`, `10.99999`, or `99999`), which is
    the organization or group that created a particular identifier,
4.  and finally, the *name*, or local identifier, that it assigned (`12345`).

As noted earlier, to be persistent, all types of identifiers require
persistent maintenance as you change or migrate your systems, and they are all
subject to some of the same risks:

-   They all fail to stop the major causes of broken links: loss of funding,
    natural disaster, social upheaval, war, deliberate removal, human error,
    and provider neglect.
-   They all require you, the end provider, to update forwarding tables as
    URLs change.
-   They all identify content that is subject to change or removal on future
    visits.
-   They all have identifiers that break regularly and in large numbers – many
    thousands and more.
-   They all rely on ordinary redirection built in to web servers since 1994
    and provided for free by hundreds of URL shortening services.

Given how little the schemes do for you, when choosing one you’ll likely want
to consider factors such as cost, risk, and openness.

## How ARKs differ from identifiers like DOIs, Handles, PURLs, and URNs

ARKs are the only mainstream, non-siloed, non-paywalled identifiers that you
can register to use in about 48 hours. DOIs, Handles, and PURLs require that
resolution and other services come from their respective centralized systems
(silos).

That’s not to say that persistence is free. Making any identifier persistent
burdens you, the provider, with the costs of content management, hosting,
monitoring, and forwarding. You can do those things yourself or with help from
a vendor. But with ARKs, just as with URLs, you will not be charged separately
for your identifiers and you will not be locked in to a special-purpose
resolution silo that also locks out other identifiers.

ARKs are unusual in being decentralized. While one *can* get resolution
services from a global ARK resolver called [n2t.net], over 90% of the ARKs in
the world are published without using [n2t.net][1] in the URL hostname. More
than 650 registered ARK organizations across the world have, between them,
created an estimated {{ site.num_arks }} ARKs, and, as with URLs, no one has ever paid
an identifier fee to create them. Of course *maintaining* them isn’t free. It
is never without cost to keep content access persistent in the long term,
regardless of identifier type.

#### More differences between ARKs, DOIs, Handles, PURLs, and URNs

-   Landing pages: Crossref and DataCite DOIs link to publisher landing pages
    constructed around but *not directly to* objects you care about, but ARKs
    can freely link *directly to* objects you care about, which is machine-
    and human-friendly since it does not require an extra human navigation
    step for common tasks such as
    -   opening an article’s PDF file for reading,
    -   referencing an image file meant to be incorporated automatically
        inline into a document, and
    -   citing a spreadsheet to be used for direct data analysis by software.
-   DOIs, Handles, etc. do not support ARK-style inflections.
-   that permit access to metadata regardless of whether an identifier points
    to an object or its landing page.
-   Unlike DOIs and Handles, ARKs don’t have metadata requirements. ARKs that
    haven’t been released into the world are easy to delete.
-   All things eventually pass, including hostnames and the web itself and the
    “https://” protocol. When that first part of the identifier ceases to have
    meaning, only ARKs and URNs will include the label (eg, “ark:”) indicating
    the type of identifier that remains.
-   For DOIs, Handles, and PURLs, you are required to use their respective
    resolvers. ARKs and URNs, permit you to use your own resolver.
-   To create DOIs and Handles, you are required to pay a membership fee and,
    for DOIs, there are per-DOI charges passed on in various ways by
    allocating agencies. There are no fees for ARKs, PURLs, and URNs.
-   To create Handles, you are required to install and maintain a local Handle
    server, which gives you another system to monitor, patch, and
    troubleshoot.
-   Although you can use a local or vendor resolver for your ARKs and URNs,
    ARKs can be resolved via the global [n2t.net] resolver.
-   The envisioned URN resolution infrastructure was never built, so URNs are
    currently resolved as URLs, and there is no designated global URN-as-URL
    resolver. In order to register to create URNs, you must [apply for a URN
    namespace].
-   ARKs have some unique features that support early object development: ARKs
    can be deleted, can be born with no metadata, and can exist with any
    metadata you care to store.

### Using multiple identifier systems

You may choose to use two identifier systems for some resources, although it
can become confusing when it happens often. Many people start by assigning
ARKs to each thing they create in order to have a stable reference right from
the beginning, even before they know whether they want to publish it, let
alone keep it.

The object and its metadata develop together, and for the subset of things
that you end up wanting to publish in places that require DOIs, you can assign
DOIs at publication time. If your ARK is stable and has basic metadata, you’re
already doing everything you need to support a proper DOI. This is a way in
which ARKs support early object development.

To support two identifiers efficiently, it is recommended that you create the
DOI such that it redirects to the original ARK. This not only eliminates the
need ever to update the DOI redirection, but it also keeps the ARK persistent
for anyone who previously recorded or bookmarked it.

### When to use ARKs compared to DOIs, Handles, PURLs, or URNs

Nothing inherent in ARKs, DOIs, Handles, PURLs, or URNs makes them more or
less fit for any particular field, domain, or sector. With an identifier
resolver and administrative management service, they all provide the core
service of resolution.

Generalizations about identifier types sometimes apply when resolution and
management for that type is locked into one particular vendor or provider. For
example, many PURL and Handle features and restrictions are well-defined by
their respective administration silos, as are those of DOIs, which are built
on top of Handles. But DOIs have metadata practices that are diverse and
evolving across different DOI registration agencies.

The concrete differences that we experience, such as *metadata*, landing
pages, and tool integration (eg, publishing tools), are not properties of
identifier schemes per se, but properties of resolution, management, and
citation services that various providers extend to or withhold from different
identifier types. Those services are shaped in turn by communities of practice
and by markets. Basic services are founded on a reliable database storing each
identifier along with metadata elements (creator, title, date, redirection
URL, etc) that describe the identified object. Extra services include link
checking, duplicate detection, report generation, and searching.


[namespace splitting problem]: https://n2t.net/e/n2t_vision.html
[persistence commitments]: https://doi.org/10.5334/dsj-2017-039
[IIIF]: https://iiif.io/technical-details
[ORCID.org]: https://orcid.org/
[n2t.net]: https://n2t.net/
[1]: https://n2t.net
[apply for a URN namespace]: https://tools.ietf.org/html/rfc8141#section-6
