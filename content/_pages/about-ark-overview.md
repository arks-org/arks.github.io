---
title: ARK overview
permalink: /about/ark-overview/
pid: 778
date: 2021-01-23T00:12:51+00:00
published: true
---

This article explains ARK identifiers, their versatility as persistent URLs
for various objects, and their role in stable linking and access.

<!--more-->

## What ARKs are and why you would use them

Archival Resource Key (ARK) identifiers are persistent URLs designed to
support long-term access to information objects. Introduced in 2001, ARK
identifiers were designed to identify objects of any type:

-   digital objects – documents, databases, images, software, websites, etc.
-   physical objects – books, bones, statues, etc.
-   living beings and groups – people, animals, companies, orchestras, etc.
-   intangible objects – places, chemicals, diseases, vocabulary terms,
    performances, etc.

ARKs are assigned for a variety of reasons:

-   affordability – there are no fees to assign or use ARKs
-   self-sufficiency – you can host ARKs on your own web server, eg, Noid
    (Nice Opaque Identifiers) open source software portability – you can move
    ARKs to other servers without losing their core identities
-   global resolvability – you can host ARKs at a well-known server, eg, at
    the N2T.net (Name-to-Thing) resolver
-   density – ARKs handle mixed case, permitting shorter identifiers (CD, Cd,
    cD, cd are all distinct)

Some advantages of ARKs:

-   simplicity – access relies only on mainstream web “redirects” and ordinary
    “get” requests
-   utility – with “inflections” (different endings), an ARK should access
    data , metadata, promises, and more
-   compatibility – inflections don’t conflict with “linked data content
    negotiation” (a harder and limited way to access metadata)
-   versatility – ARKs support persistence statements to describe different
    kinds of long-term access
-   transparency – no identifier can guarantee stability, and ARK inflections
    help users make informed judgements
-   visibility – syntax rules make ARKs easy to extract from texts and to
    compare for variant and containment relationships
-   openness – unlike other persistent identifiers, ARKs don’t lock you into
    one specific, fee-based management and resolution infrastructure
-   impact – ARKs appear in the Data Citation Index ℠ and in ORCID researcher
    profiles

## ARKs, identifiers and persistent identifiers (PIDs)

The type of a URL-based identifier can often be spotted by how the URL starts,
but that’s not true for ARKs, which are spotted by an internal “ark:” label
that comes after the URL hostname. For example, here is an ARK,

            https://n2t.net/ark:67531/metadc107835/

that gets you to a dissertation. ARKs are high-functioning identifiers that
lead you to things and to descriptions of those things. For example, adding
‘?’ on the end of the above ARK should get you to its description:

            https://n2t.net/ark:67531/metadc107835/?

A common internet **identifier** is a URL, or part of a URL. For example, this
core ARK identifier,

                         ark:12148/btv1b8449691v/f29

appears inside two different URLs (Uniform Resource Locators, also known as
web links or web addresses):

       https://ark.bnf.fr/ark:12148/btv1b8449691v/f29

         https://n2t.net/ark:12148/btv1b8449691v/f29

ARKs are especially good at being **persistent identifiers** (PIDs).

Why do we need persistent identifiers? Websites and databases change. As we
redesign or migrate to new systems, the links to our resources break.
Citations and links to your resources will produce the dreaded “404 Not Found”
error. Irritating as that may be, it’s politically awkward when looking for
publicly funded research, and it’s a cultural disaster for libraries,
archives, museums, and other memory organizations.

Among the many links that can or once could lead you to things, a persistent
identifier is a link that in principle keeps working far into the future.
Services that provide discovery and interlinking (such as between research
articles, authors, supporting data, and related research) prefer persistent
identifiers because of that stability.

Persistent identifiers should keep working even as websites and databases
change. Normally when resources move, everyone who ever recorded the old links
would need to be told what the new links are, which is next to impossible.
ARKs and the systems and tools that support them provide that persistence.

## Resolvers

A resolver is a system that specializes in forwarding incoming identifiers
(the ones originally advertised to users) to whichever websites are currently
best able to deal with them. Overall, forwarding is called resolution; one
step in a resolution process is called redirection.

For a resolver to work, its hostname (the n2t.net or ark.bnf.fr in the
identifiers above) must be carefully chosen so it won’t ever need to be
changed. Memory organizations, some of them centuries old, tend to have
hostnames well-suited to be resolvers. Some well-known, younger resolvers are
n2t.net (the ARK resolver), identifiers.org, doi.org, handle.net, and
purl.org.

## ARK structure

An ARK is represented by a sequence of characters that contains the label,
“ark:”. When embedded in a URL, it is preceded by the protocol (https://) and
name of a service that provides support for that ARK. That service name, or
the “Name Mapping Authority” (NMA), is mutable and replaceable, as neither the
web server itself nor the current web protocols are expected to last longer
than the identified objects. The immutable, globally unique identifier follows
the “ark:” label. This includes a “Name Assigning Authority Number” (NAAN)
identifying the naming organization, followed by the name that it assigns to
the object.

Here is a diagrammed example:

{% include content/anatomy2.html %}

*A peek at ARK anatomy. You can spot an ARK by its internal* *<span
class="has-inline-color" style="color:#c88c0a">label</span>.*

More details about ARK structure and syntax are available later in this guide.

## How people are using ARKs

While many examples in this guide refer to resources in digital repositories,
an ARK can be assigned to anything digital, physical, or abstract. That can
include things that don’t yet exist but to which you need to refer from
objects that you’re in the process of creating or planning, such as a link
from a draft article to a dataset under preparation, or a link from an
archived digital letter to a planned finding aid. One caution is that you
should generally assign ARKs to things that you own, control, or manage.
Assigning ARKs to things you don’t control is discouraged because such
identifiers tend to be fragile.

Examples of things that have ARKs are listed below. Numbers are approximate,
current as of September 2020, and self-reported by the identified ARK
organizations.

-   genealogical records (8 billion FamilySearch)
-   publisher content (100 million Portico)
-   scientific records (22 million INIST)
-   scanned texts (20 million Internet Archive)
-   bibliographic records (15 million BnF main catalog)
-   museum specimens (11 million going on 100 million Smithsonian)
-   public health documents, many from legal discovery (15 million UCSF IDL)
-   digitized documents and objects (5 million BnF Gallica)
-   historical persons, families, and organizations (4 million SNACC)
-   finding aids and special collections (4 million Merritt)
-   resource maps (1.5 million RMap Hub)
-   educational resources (1.1 million University of Utah)
-   artistic and cultural artifacts (482,000 Louvre museum)
-   vocabulary terms (9,000 Periodo, YAMZ)
-   datasets, journals, archeological artifacts, living beings, and anything
    else you can think of!

## Persistence means persistent management

By itself, assigning an ARK to a thing will not do anything to guarantee
persistence. You’ll need to use the tools and services associated with ARKs to
maintain a record of the ARKs you’ve assigned, the things they represent, and
the current live URLs for those things. If the things or URLs change, you’ll
need to update that information so that persistent URLs continue to work.

See [10 persistent myths about persistent identifiers].

All identifier systems are subject to the same weaknesses:

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

[10 persistent myths about persistent identifiers]: ../_posts/2021-01-19-ten-persistent-myths-about-persistent-identifiers.md
