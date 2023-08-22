---
title: About ARKs
type: article
permalink: /about/
pid: 77
original_date: 2020-10-16T21:21:22+00:00
published: true
---

Archival Resource Key (ARK) identifiers are URLs that support long-term access
to information. Learn below what you need to know about ARKs, whether you’re
planning how your system or collection will use them, or you’re a developer
building ARK tools.

## ARK Anatomy

      https://example.org/ark:/12345/x54xz321/s3/f8.05v.tiff
      \_________________/ \__/ \___/ \______/\____/\_______/
                  |        |     |      |      |       |
                  |  ARK Label   |      | Sub-parts  Variants
                  |              |      |
    Name Mapping Authority (NMA) |    Assigned Name
                                 |
                  Name Assigning Authority Number (NAAN)
{: .bg-secondary-subtle }

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

[FAQ about ARK identifiers 🇬🇧]: https://wiki.lyrasis.org/display/ARKs/ARK+Identifiers+FAQ
[FAQ sur les identifiants ARK 🇫🇷]: https://wiki.lyrasis.org/pages/viewpage.action?pageId=178880619
[FAQ sobre identificadores ARK 🇪🇸]: https://wiki.lyrasis.org/pages/viewpage.action?pageId=185991610
[ARK overview]: /about/ark-overview
[ARK Community Code of Conduct]: /about/ark-community-code-of-conduct/
[Why ARKs?]: /about/the-ark-origin-story
[ARK NAANs and systems]: /about/ark-naans-and-systems
[N2T feature: suffix passthrough]: /about/ark-naans-and-systems#suffix-passthrough
[ARK features]: /about/ark-features
[Comparing ARKs, DOIs and other identifier systems]: /about/comparing-arks-and-other-identifiers
[Getting started: what to plan for as you implement ARKs]: /about/getting-started-implementing-arks
[General identifier concepts and conventions]: /about/identifier-concepts-and-conventions/
[Running minters and resolvers]: /about/running-minters-and-resolvers
[More about the N2T global resolver]: /about/n2t-global-resolver
[ARK namespaces and sub-namespaces]: /about/ark-namespaces
[More about ARK shoulders]: /about/shoulders
[Testing ARKs with N2T]: /about/testing-arks
[ARK implementation best practices]: /about/best-practices
