---
title: ARK implementation best practices
type: article
permalink: /about/best-practices/
pid: 829
original_date: 2021-01-23T23:10:16+00:00
published: true
---

## ARK creation and object lifecycle

ARKs should be created at object birth, or even before. We sometimes name our
babies before they’re born, and we name and refer to objects in the conception
stages, sometimes long before they bear fruit. Depending on how elaborate the
planning may be, your unborn objects could have full-function ARKs that
resolve to an appropriate surrogate and return rich metadata, including
[persistence statements].

The only caveat is to be careful releasing (advertising) ARKs that have
uncertain long term prospects. Some identifier management systems have
features to help manage and resolve unreleased identifiers (eg, [EZID] has a
“reserved” status). The more people who know about an ARK, the harder it is to
delete.

## Metadata

Creating metadata (extra information associated with or describing an object)
has several key benefits. First, no matter what the ARK redirects to – whether
a landing page or a file – metadata gives users vital information about the
object, such as references to newer versions, creation date, provenance, etc.
For ARKs typically metadata is accessed via inflections.

Metadata really eases the difficulty of working with opaque identifiers, which
reveal no clues as to what they identify. In the absence of metadata you are
forced to access the object itself to remind yourself what it is, and also to
trust that you’re accessing the correct object. Moreover, discrepancies
between returned metadata and the accessed object help everyone detect
identifier changes and errors.

Metadata is for grownups, and is far less important for immature objects and
their identifiers than for those that have been released. Having metadata
demonstrates basic provider credibility and commitment to high-functioning
identifiers. Not every provider is up to this task.

It need not be expensive. Building metadata from scratch can be costly, but
it’s usually created and managed by object providers, in which case it can be
leveraged efficiently for identifiers. Ideally, for strong persistence master
metadata (maintained by object providers) should be reflected in independent
systems so that it is hard for someone to tamper undetectably with identifier
associations. For example, digital object repositories that obtain ARKs and
DOIs from the [EZID] service store a copy of their metadata with
EZID.cdlib.org, which in turn stores another copy with the [N2T.net] resolver.

## Policy statements

The ARK inflection “??” at the en∑scribing Digital Stickiness][persistence
statements]


[persistence statements]: https://doi.org/10.5334/dsj-2017-039
[EZID]: https://ezid.cdlib.org/
[N2T.net]: https://n2t.net/
[Identifier Conventions]: http://ezid.cdlib.org/learn/id_concepts
