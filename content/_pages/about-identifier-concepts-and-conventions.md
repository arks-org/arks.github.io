---
title: General identifier concepts and conventions
type: article
permalink: /about/identifier-concepts-and-conventions/
pid: 1025
original_date: 2021-02-09T01:03:16+00:00
published: true
---

This document specifies common identifier-related terms, conventions, and
practices as observed at services such as N2T.net, EZID.cdlib.org, and
ARKetype.ch.

Many of the conventions arose in the context of ARK identifiers, but they
apply broadly across mainstream identifiers, including URLs, DOIs, URNs, and
Handles.

## Terminology

The main concepts covered include:

1.  Name Assigning Authority Numbers (NAANs) identifying large institutional
    namespaces.
2.  NAAN “shoulder” extensions identifying sub-namespaces.
3.  Name Mapping Authority (NMA) services that accept names and return
    information about them
4.  Name resolution (“resolver”) services, a special class of NMA services.

The terminology that follows is based on the metaphor of a key (or name or
identifier) in <span class="has-inline-color
has-vivid-green-cyan-color">locksmithing</span> jargon, and the concept of a
branded plastic key-cover.

           _____    slips on    _____
        .-'  ,_,'-..  ---->  .-'     '-.
       /    (o,o)  \\       /           \
      :     {`"'}  ||      :             `____
     /  .-. -"-"-  ||     /  .-.              '--^.   .^--^.        .^.
    {  (   )       ||    {  (   )                  `-'      `-^--^-'   '--^.
     \  `-'   _o   ||     \  '-'         ===================================}
      :     _|<,_  ||      :             __________________________________/
       \   (*)/(*) /        \           /
        `-._____.-'          `-._____.-'
    |....................|...............|....|..........................|..|
              ^                    ^        ^                ^            ^
              :                    :        :                :            :
            Cover=               Bow=    Shoulder  .------ Blade         Tip
             NMA             Scheme+NAAN    :      :  .-------------------'
              :                  :    :     :      :  :
              v                  v    v     v      v  v
    |..........................|....+.....|...|......|.|
     http://OwlBike.example.org/ark:/13030/tqb3kh97gh8w   <----  Example Key
                                 doi:10.30/tqb3kh97gh8w         with parallel
                                 hdl:13030/tqb3kh97gh8w        parts in other
                                 urn:13030:tqb3kh97gh8w          id schemes.
    |..........................|.......................|....
       Name Mapping Authority       Base object name     ...
{: .bg-secondary-subtle }

## NAANs, prefixes, bases, and suffixes

A core concept is that of the NAAN (Name Assigning Authority Number), which is
a number (or string) identifying an organization that creates or assigns
identifiers. This generic concept has various other names: Registration
Authority or Prefix for DOI identifiers, Naming Authority for Handles, and
namespace identifier for URNs.

Strictly speaking, the association originally intended by the “assigner” is
different from (but hopefully close to) the association as evidenced by what
an identifier returns (“maps to”) when accessed by software at any given time,
now or in the future. The evolutionary effects of technology, curation,
budgets, politics, and user expectations will very rarely produce a digital
object today that is bit-wise identical to what it was ten years ago. This is
all the more true when object stewardship passes from one archive to another.
For these reasons, the ARK scheme also defines the concept of a Name Mapping
Authority (NMA), which is described later.

For ARKs and URNs, the NMA can change. For DOIs and Handles, the NMA is fixed
at doi.org and handle.net, respectively. The NMA begins actionable identifiers
of all types, after which the ARK scheme distinguishes a NAAN prefix, then a
base name, then an optional qualifier suffix. In contrast, the DOI scheme
distinguishes only a prefix and a suffix (without a base).

The combination of scheme name and NAAN (together comprising the “bow” of a
physical key) is immutable. The NAAN is usually a number, but in the URN
identifier scheme it is often a string of letters. Numeric NAANs are more
opaque and may therefore be less susceptible than non-opaque names to
“semantic rot” over the long term. The intention behind the NAAN is to assign
it at a fairly general level within one memory organization, such as at the
top- or department-level of a national library, a national archive, or a
university campus.

The NAAN concept begins every identifier assigned by an organization, thus
defining a *namespace*, or the pool of identifiers (sharing that NAAN). It is
common for an organization with a NAAN to delegate name assignment to
semi-autonomous units or workflows.

## Shoulder practices

To prevent accidental creation of non-unique names between them, each unit is
often assigned its own *shoulder*, which is a NAAN extension corresponding to
the “shoulder” of a physical key. The shoulder then begins every identifier
assigned by the given unit, defining its *sub-namespace*. Unique shoulders
guarantee that names unique within the sub-namespace will also be unique
outside of it, and the unit need only focus on creating the rest of the key in
a way that is unique. While the NAAN and shoulder are fixed for a given unit,
the rest of the key, known as the *blade*, is different for every identifier
in the unit’s sub-namespace.

An easy way to extend the NAAN with a shoulder so that one will always have an
unlimited supply of non-conflicting shoulders is to adhere to the
“primordinal” (first digit) convention. In this case each shoulder is a string
of one of more letters ending in a digit (inclusive). For example,
“ark:/13030/b3th89n” would have fixed shoulder prefix “b3”, and the 13030 NAAN
could then enjoy an infinite set of potential future shoulders, including,

       b3, c3, d3, ...
       bb3, bc3, bd3, ..., cb3, cc3, cd3, ...
       bbb3, bbc3, bbd3, ..., bcb3, bcd3, ..., cbb3, cbc3, ...
       ...
{: .bg-secondary-subtle }

While there is in principle an unlimited number of shoulders under the
primordinal convention, each additional shoulder is not without cost,
especially if there is a “minter” (a small identifier generating database)
associated with it. Also, although it may be convenient for assigning
organizations to use different shoulders for different object collections,
this practice risks promoting attachments to thematic or administrative object
groupings that are frequently very transient. Over the long-term, a widening
gap between what a shoulder used to “mean” and what it currently suggests
(unintentionally) creates pressure to abandon older identifiers. Opacity helps
reduce attachment (by making it less apparent) and can stabilize identifiers
by making them easier to maintain.

It is also strongly discouraged to place brand strings in identifier blades
because successor organizations, which tend to be former competitors, will
often be motivated to extinguish your brand rather than honor previous name
assignments. Branding is most appropriately placed in the NMA, described next.

## Name Mapping Authority (NMA) services

The protocol and hostname combination (e.g., https://OwlBike.example.org/) may
be thought of as a key cover (a plastic accessory, sometimes known as a “key
identifier”, that slips over the key and makes it easy to find). This
metaphorical “cover”, which does not alter the key’s core identity, and is
usually disposable and replaceable, serves to make the key actionable when
embedded in a URL. As such it identifies an NMA (Name Mapping Authority)
because it is a service that accepts a name as input and returns (“maps” it
to) such things as object content, object metadata, object policies, etc. Any
given identifier will have exactly one NAAN but may have more than one NMA (at
a time or over time).

Multiple serial and simultaneous “name mapping” (hosting) arrangements are
common, but some NMAs are meant to be long-term stable, including n2t.net,
handle.net, and doi.org.

## Resolution

In general, a Name Mapping Authority (NMA) can be a starting place for
internet resolution, an ending place for it, or both. The main requirement for
being an NMA for an object is being able to take a request associated with its
identifier and do something useful with it (to “map” it to a practical
function), such as providing access to the object or its metadata, or
forwarding the request to another NMA. Often an NMA will provide object access
for some requests and forwarding services for others.

A broadly helpful practice is for NMAs to forward completely unknown
identifier requests to a root resolver such as n2t.net, which can work with
many identifier scheme (described below). With very little burden to the
original NMA, this practice increases the chances that resolution will be
successful no matter where the user starts it.

ARKs, URLs, URNs, and PURLs use manifest, scheme-agnostic redirecting web
servers as NMAs. The DOI and Handle schemes are each designed to use an
implicit, scheme-specific root resolver (NMA) with its own protocol.
Resolution in all these cases relies on a final HTTP access.

## N2T (Name-to-Thing) resolver

The N2T (Name-to-Thing) resolver is rooted at [https://n2t.net] and resolves
ARKs, DOIs, and over 600 other identifier types.

N2T was originally designed for global resolution of ARK identifiers, but it
is general enough to apply to identifiers from any scheme. It’s NAAN mapping
mechanism is functionally equivalent to and much simpler than the DOI, Handle,
and URN resolution mechanisms.

## Opacity

Many of the terms in this document serve semantic opacity, which is useful for
creating identifiers that age and travel well. Opacity is often applied to the
NAAN and base name combination, and relaxed before it (NMA branding in the
hostname) as well as after it (extensions given by familiar strings that
access current service offerings).

Perfect opacity in identifiers is not as important as identifiers’ having
semantics that are *not widely recognizable*, even if those semantics may
support administrative activity by specialists (cf. ISBNs). Semantics will
always be narrowly recognizable by specialists who understand things like
primordinal shoulders or memorize portions of the NAAN registry.

For the purposes of longevity, however, it is critical not to encourage the
general public to attach meaning to authority and sub-authority names (NAANs
and shoulders). A very common cause of avoidable identifier breakage is
political or legal pressure to sacrifice or actively exterminate identifiers
that clearly carry a brand of the previous administration, competitor, or
regime. Short-sighted branding hurts.

## Test identifier conventions

As an important exception to opacity, it is often necessary to use identifiers
in testing workflows, and because it is easy for test identifiers to “escape”
into the wild, we follow certain conventions to prevent them from being
interpreted as real identifiers if users mistakenly try to use them. Any
identifier beginning with the NAAN, “99999” will be considered a test
identifier. Furthermore, by beginning with the shoulder “fk” an identifier
provides another hint that it is to be considered a test identifier.

## Base identifier extensions

An identifier frequently appears with an extension added to its base. For
every assigned base identifier, there is in principle an infinite number of
extended forms. In practice, the NAA may not officially list all its extended
forms publically. Moreover, many extended forms are created and publicized by
NMAs independent of the NAA assignments.

Still more extended forms are discovered by users exploring an NMA’s services,
for example, by noticing identifier patterns and changing some of the values.
Names designed so that logical changes have logical consequences have been
called “hackable identifiers”. Also, sometimes an NMA supports substitution of
“parameters” (values) inside of query strings appended to its identifiers
(after a “?”), in order to produce certain documented effects.

Identifier schemes tend to specify little beyond the form of the NAAN (or
other designation for the NAA, sometimes called a Name Authority). The ARK
scheme permits formal disclosure of hierarchy and equivalence in name
extensions; if used in an ARK, ‘/’ indicates containment and ‘.’ indicates
variation. For example,

    ark:/13030/tqb3kh8z/                 # names an object containing...
    ark:/13030/tqb3kh8z/chap3            # that in turn contains...
    ark:/13030/tqb3kh8z/chap3/fig5.jpg   # that is a variant of...
    ark:/13030/tqb3kh8z/chap3/fig5.pdf   # and so forth
{: .bg-secondary-subtle }

## The “NCDA” check character convention

Check characters, if included at all, often protect only base identifiers
without extensions. This is where check characters are most useful anyway,
since base identifiers tend to be opaque (unlike extensions) and offer no
clues about presence of errors. For example, “in 2018 I celebratd my brithday
at home” contains two clear typos, but no hint that the date I really meant
was 2017.

Check characters lengthen whatever sub-string they protect by at least one
character, so protecting each sub-string extensions would result in fairly
long identifiers. Also, check character generation is a specialized process
not always available to those who need to create create non-opaque extensions
flexibly and rapidly.

One useful check character convention, called “NCDA” (for Noid Check Digit
Algorithm), involves exactly one check character at the tip of the blade, in
other words, the last character of the base identifier. First appearing in the
[Noid] software package, NCDA guarantees the base identifier against the most
common transcription errors: transposition of two adjacent characters and
single character errors. NCDA does not protect either the hostname or any
extensions. For example, in the identifier,

    https://OwlBike.example.org/hdl:13030/tqb3kh8w/chap3/fig5.jpg
                                    \____________/
{: .bg-secondary-subtle }

the protected string, “13030/tqb3kh8w”, ends with a “w” that is
(hypothetically) the computed NCDA check character. Also, all NCDA examples
use *betanumeric* characters (more [here]), which are from a restricted
character repertoire consisting of digits and lowercase letters minus vowels
and minus the letter ‘l’ (ell). The Noid software uses this repertoire to
reduce the chance of “accidental” semantics in generated identifiers and to
avoid some of the confusion that arises over mistaking digits for letters,
such as ‘1’ for ‘l’ and ‘0’ for ‘O’.

[https://n2t.net]: http://n2t.net/
[Noid]: https://n2t.net/e/noid.html
[here]: /about/running-minters-and-resolvers/
