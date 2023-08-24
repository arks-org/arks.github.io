---
title: "Getting started: what to plan for as you implement ARKs"
permalink: /about/getting-started-implementing-arks/
pid: 816
date: 2021-01-23T22:29:57+00:00
published: true
---

Guidance on getting started with implementing ARKs, outlining the steps and
considerations necessary for adopting ARKs for your organization's resources,
including obtaining a Name Assigning Authority Number (NAAN), choosing ARK
features, selecting or building an ARK system, and more.

<!--more-->

To start using ARKs you need:

1.  A Name Assigning Authority Number (NAAN) to indicate your organization.
2.  A minter: a means of generating unique strings for resource names,
    tracking which strings have already been assigned to resources, and
    managing metadata for those resources.
3.  A resolver: a means of redirecting a persistent ARK identifier to the
    current access URL where a resource resides.
4.  A plan: you should consider whether you need to use certain ARK features
    such as suffix pass-through or ARK shoulders, either now or in the future.
5.  An access persistence policy: the resources you want to provide persistent
    access to should be securely preserved (e.g., with an external copy in a
    stable repository) in order to avoid accidental loss, deletion, or bitrot.

## Get a Name Assigning Authority Number (NAAN)

Please fill out the [NAAN request form] if you are interested in generating
and using ARKs for your resources. While a NAAN is often associated with a
single organization, if you work in a large or complex organization (e.g., a
university campus), different units within it may have different needs in
assigning ARKs, such as frequency, total number, and varieties of objects to
identify. Independent units might need their own NAANs or “shoulders” (see
[ARK namespaces]).

## Decide what ARK features you need

As you prepare to use ARKs for the first time, consider both the current and
future potential use cases for ARKs in your organization. This may influence,
for example,

-   whether you choose to implement a shoulder for the first set of resources
    you assign ARKs to;
-   what metadata standard you will use;
-   whether you want to reveal part/whole relationships by using component
    qualifiers;
-   which services you want to provide to your resources by using variant
    qualifiers.

Read more about:

-   [General identifier concepts and conventions] (prefix, base, suffix,
    shoulder, check digit, opacity)
-   [ARK namespaces and sub-namespaces][ARK namespaces] (NAANs and shoulders)
-   [ARK shoulders][][: Do’s and Don’ts][ARK shoulders]
-   [ARK features] (including Shoulders & Metadata)
-   [Parts of an ARK] and following questions (including qualifiers)

Also consider implementing some of the features that related ARK systems use,
such as [suffix passthrough], which can be useful if your resources contain
many sub-resources with a large number of files per resource. Also consider
some of the features that related ARK systems use, such as the [suffix
passthrough] feature (currently implemented only for ARKs stored in N2T.net).
This can be useful if your resources contain many sub-resources with a large
number of files per resource.

## Choose (or build) an ARK system

Because ARKs are free, open identifiers, there are many choices for
implementing them. Some free, specialized services offer ARK assignments, such
as for text deposits at the [Internet Archive] and for metadata vocabulary
terms at [YAMZ.net]. At the moment, we don’t know of any general-purpose ARK
service providers available to the public. ARK assignments are offered as a
side-effect of working with many institutional repositories and vendors (e.g.,
in archiving and education).

There are also software plug-ins and microservices you can integrate with your
own repository or system. The [**Resources**] area of this site provides links
to available tools and to technical documentation if you choose to build your
own local ARK support system. One example is the [Noid] system for minting,
managing, and resolving identifiers.

Issues to consider:

-   Is there a service provider that I’m eligible to use? (Note that while
    ARKs are free, service providers will like charge a fee for the service)
-   If selecting a repository system, does that system support ARKs?
-   Does my organization have a commitment to providing developer support and
    access to servers for running a Noid system?
-   Is there a Noid system available in the programming language(s) we work
    with?

Read more about:

-   [Running minters and resolvers]
-   [ARK Implementation best practices] (including Metadata & Policy
    statements)
-   [Service providers]


[NAAN request form]: https://n2t.net/e/naan_request
[ARK namespaces]: about-ark-namespaces.md
[General identifier concepts and conventions]: about-identifier-concepts-and-conventions.md
[ARK shoulders]: about-shoulders.md
[ARK features]: about-ark-features.md
[Parts of an ARK]: https://wiki.lyrasis.org/display/ARKs/ARK+Identifiers+FAQ#ARKIdentifiersFAQ-WhatarethepartsofanARK?
[suffix passthrough]: https://n2t.net/e/suffix_passthrough.html
[Internet Archive]: https://archive.org
[YAMZ.net]: https://yamz.net
[**Resources**]: resources.md
[Noid]: https://n2t.net/e/noid.html
[Running minters and resolvers]: about-running-minters-and-resolvers.md
[ARK Implementation best practices]: about-best-practices.md
[Service providers]: resources.md
