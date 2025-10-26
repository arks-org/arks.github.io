---
title: "Getting started"
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

Become familiar with

- the Archival Resource Key (ARK) summary on the https://arks.org homepage and
- this [video overview of ARKs](https://youtu.be/-RkMGFCGRic) (with slides, 30 minutes).

When you are ready to start using ARKs you will need to

-   request a Name Assigning Authority Number (NAAN) to indicate your organization,
-   decide what ARK features you need, and
-   choose your local ARK resolver system, usually your website modified
    just enough to respond correctly to URLs containing "ark:<your_NAAN>".

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
-   what metadata conventions or standard you will use;
-   whether you want to reveal part/whole relationships by using component
    qualifiers;
-   which services you want to provide to your resources by using variant
    qualifiers;
-   what policy you will follow in fulfilling your persistence commitment, 
    for example, what kinds of change users can expect.

Read more about:

-   [General identifier concepts and conventions] (prefix, base, suffix,
    shoulder, check digit, opacity)
-   [ARK namespaces and sub-namespaces](about-ark-namespaces.md) (NAANs and shoulders)
-   [ARK shoulders Do’s and Don’ts](about-shoulders.md)
-   [ARK features] (including Shoulders & Metadata)
-   [Parts of an ARK] and following questions (including qualifiers)

Consider some of the features that other ARK systems use, such as [suffix
passthrough] feature (implemented by the [Frick Collection tool]).
This can be useful if your resources contain many sub-resources with a large
number of files per resource.

## Choose your local ARK resolver system

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
own local ARK support system. One example tool is the [Noid] system for minting,
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


[NAAN request form]: {{ site.naan_form_url }}
[General identifier concepts and conventions]: about-identifier-concepts-and-conventions.md
[ARK features]: about-ark-features.md
[Frick Collection tool]: https://github.com/squidgetx/arklet-frick/tree/master
[Parts of an ARK]: {{ site.baseurl }}/about/ark-faq-en/#parts
[suffix passthrough]: {{ site.baseurl }}{{ site.spt_explained }}
[Internet Archive]: https://archive.org
[YAMZ.net]: https://yamz.net
[**Resources**]: resources.md
[Noid]: {{ site.baseurl }}/resources/noid
[Running minters and resolvers]: about-running-minters-and-resolvers.md
[ARK Implementation best practices]: about-best-practices.md
[Service providers]: resources.md
