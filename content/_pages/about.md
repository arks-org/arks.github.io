---
title: About ARKs
permalink: /about/
pid: 77
date: 2020-10-16T21:21:22+00:00
published: true
---

Learn about Archival Resource Key (ARK) identifiers, their anatomy, usage, and
implementation. Discover ARK features, namespaces, and comparisons with other
identifier systems. For users and developers seeking comprehensive insights
into ARK Alliance.

<!--more-->

Did you know...

* ... that ARK is a PID (Persistent IDentifier), along with DOI, ORCID, and ROR?
* ... that ARK may be the fastest growing PID scheme you've never heard of?
* ... that an average of 5 new ARK organizations are registered every week?
* ... that the ARK scheme is more than {{ site.ark_age }} old?
* ... that no one has to pay for the right to create ARKs?
* ... that there are over 8.2 billion ARKs in the world?
* ... that [ARK organizations](naan-stats.md) include universities, journals, national libraries, national and regional archives, and fine art and natural history museums?

Archival Resource Key (ARK) identifiers are URLs that support long-term access
to information. Learn below what you need to know about ARKs, whether you’re
planning how your system or collection will use them, or you’re a developer
building ARK tools.

## ARK Anatomy

{% include content/anatomy2.html %}

*A peek at ARK anatomy. You can spot an ARK by its internal* *<span
class="has-inline-color" style="color:#c88c0a">label</span>.*

Please note all ARK documentation has not yet been transferred to this site.
This includes important ARK FAQs (Frequently Asked Questions) in English,
French, and Spanish:

-   [FAQ about ARK identifiers 🇬🇧]
-   [FAQ sur les identifiants ARK 🇫🇷]
-   [FAQ sobre identificadores ARK 🇪🇸]

## Recommended for all users

[ARK overview]

-   What ARKs are and why you would use them
-   Identifiers and persistent identifiers (PIDs)
-   Resolvers
-   ARK structure
-   How people are using ARKs
-   Persistence means persistent management
-   [ARK Community Code of Conduct]

[Why ARKs?]

-   By 2001 there were 4 major PID types – this is why a 5th was needed.

[ARK NAANs and systems]

-   Name Assigning Authority Number (NAAN) registry
-   Nice Opaque Identifier (Noid) systems
-   N2T: a global resolver
-   [N2T feature: suffix passthrough]

[ARK features]

-   Shoulders (local namespaces)
-   Metadata
-   Inflections: metadata and policy statement
-   Deleting ARKS

[Comparing ARKs, DOIs and other identifier systems]

-   Reasons to use ARKs as compared to DOIs
-   What ARK, DOI, Handle, PURL, and URN have in common
-   How ARKs differ from identifiers like DOIs, Handles, PURLs, and URNs
-   Using multiple identifier systems
-   When to use ARKs compared to DOIs, Handles, PURLs, or URNs

[Getting started: what to plan for as you implement ARKs]

-   Get a Name Assigning Authority Number (NAAN)
-   Decide what ARK features you need
-   Choose (or build) an ARK system

## Recommended for developers

The following in-depth information will be useful if you’re extending your own
local repository or system with Noid software to support ARKs, or if you’re
developing an ARK system.

[General identifier concepts and conventions]

-   Terminology
-   NAANs, prefixes, bases, and suffixes
-   Shoulder practices
-   Name Mapping Authority (NMA) services
-   Resolution, N2T, Opacity, Test identifier conventions
-   Base identifier extensions
-   The “NCDA” check character convention

[Running minters and resolvers]

-   Minting ARK name strings
-   Best practices for minting ARK name strings
-   Opaque identifiers
-   Making server content addressable with ARKs
-   ARK citation format
-   ARK inflection vs. content negotiation

[More about the N2T global resolver]

-   How N2T works
-   N2T is not just for ARKs

[ARK namespaces and sub-namespaces]

-   ARK namespace overview
-   ARK shoulder as namespace
-   Shared NAANs
-   The NAAN’s role in N2T ARK resolution
-   How to make changes to a NAAN

[More about ARK shoulders]

-   Shoulder format
-   Implementing shoulders

[Testing ARKs with N2T]

-   Test with your own NAAN
-   Request a shoulder under a shared NAAN

[ARK implementation best practices]

-   ARK creation and object lifecycle
-   Metadata
-   Policy statements

[FAQ about ARK identifiers 🇬🇧]: about-ark-faq-en.md
[FAQ sur les identifiants ARK 🇫🇷]: about-ark-faq-fr.md
[FAQ sobre identificadores ARK 🇪🇸]: about-ark-faq-es.md
[ARK overview]: about-ark-overview.md
[ARK Community Code of Conduct]: about-ark-community-code-of-conduct.md
[Why ARKs?]: about-the-ark-origin-story.md
[ARK NAANs and systems]: about-ark-naans-and-systems.md
[N2T feature: suffix passthrough]: about-ark-naans-and-systems.md#n2t-feature-suffix-passthrough
[ARK features]: about-ark-features.md
[Comparing ARKs, DOIs and other identifier systems]: about-comparing-arks-and-other-identifiers.md
[Getting started: what to plan for as you implement ARKs]: about-getting-started-implementing-arks.md
[General identifier concepts and conventions]: about-identifier-concepts-and-conventions.md
[Running minters and resolvers]: about-running-minters-and-resolvers.md
[More about the N2T global resolver]: about-n2t-global-resolver.md
[ARK namespaces and sub-namespaces]: about-ark-namespaces.md
[More about ARK shoulders]: about-shoulders.md
[Testing ARKs with N2T]: about-testing-arks.md
[ARK implementation best practices]: about-best-practices.md
