---
title: ARK features
type: article
permalink: /about/ark-features/
pid: 812
original_date: 2021-01-23T22:26:24+00:00
published: true
---

The availability of the features below is based on what system you’re using to
resolve ARKs, so may vary whether you’re using an ARK service provider or
running your own Noid installation. ARKs are designed to support all of the
following:

-   Shoulders (local namespaces)
-   Metadata
-   Inflections
-   Deletion

## Shoulders

Shoulders are short strings that extend your NAAN and allow you to create
local namespaces below your NAAN. They divide your ARKs across autonomous
projects or divisions, the which prevents independent assignment operations
from creating duplicate ARKs. There is more to learn more about [ARK shoulders
and namespaces].

## Metadata

### **ARK metadata flexibility and the digital object lifecycle**

ARK systems such as Noid and N2T can record and provide metadata about any
resource with an ARK. That metadata becomes available via APIs, and can be
seen when you add “?” to the end of an ARK URL. (See “Inflections” below)

ARK metadata is very flexible, with no initial required metadata, but with
support for multiple metadata schemas. This flexibility is intentional: ARKs
are designed to support a full digital object workflow, including the earliest
stages before a resource is well-understood or described.

People need identifiers before they know exactly what object they refer to, or
if they refer to anything worth keeping. An identifier that requires mature
metadata cannot be created during early development since little is known
about the object.

If you start with an ARK, you benefit from being able to keep the original
identifier through to public release as the metadata matures. Many objects go
through intensive development and revision phases, sometimes lasting years,
during which they are too immature to meet most metadata requirements.
Nonetheless every object needs some sort of identifier from conception to
maturity.

Like the object itself, metadata *elements* need a flexible place to grow and
mature over time:

-   starting in the planning phase, when it just needs an *identifier*,
-   at the moment of birth, when its first digital representation needs a
    *redirection target* URL,
-   after the first analysis, when its significance and a tentative *title* emerges,
-   when creating dozens of discipline-specific metadata elements that violate
    most metadata standards except your own,
-   during post-processing by a colleague whose name you will add as an
    additional *creator*,
-   when early feedback based on the tweeted identifier turns up a key insight
    and a new *contributor*,
-   and so forth, through to archiving, abandonment, public release,
    correction, revision, enhancement, etc.

Unlike Crossref and DataCite DOIs, which require specific metadata (eg, see
the [DataCite schema]), ARKs do not constrain any of these activities.
Moreover the N2T.net resolver actually supports all of them.

### **Metadata schemas**

If you use an ARK service such as EZID or ARKetype, or if ARKs are integrated
with your repository platform, those services may define the metadata schemas
you can use. [Dublin Core], [DataCite], [Schema.org], and [Dublin Kernel] are
common metadata specifications to consider for use with ARKs.

Enhance here when you have answers to metadata questions

Choosing or creating a specification for your metadata depends on factors such as

-   whether you are currently managing metadata (*hint*: stay with your
    current standard unless you have a good reason to switch),
-   how well your local metadata standard can map to a schema already
    supported by your resolver (*hint*: map to an existing standard if
    possible),
-   whether you want to officially publish objects (*hint*: prepare to be able
    to supply author, title, date, publisher/archive, and object type),
-   the requirements and capabilities of your resolver (*hint*: your IT staff
    or vendor might have its own requirements), and
-   whether you want to store non-standard elements (*hint*: [N2T] allows
    this, but most standards and vendors don’t).

## ERC: Dublin Kernel metadata

You may see metadata for ARKs expressed with the labels “who”, “what”, “when”,
“where”, which may not correspond to a standard you use now.

ARKs were designed to identify anything, not just things that are, for
example, publishable or purchasable. It is unnatural to model a fossil, tissue
sample, vocabulary term, or Marie Curie as if each has an Author, Title,
Publisher, Copyright, and Price. Instead, since 2001 an ARK typically has a
four-element kernel of highly generic metadata ([Dublin Kernel], inspired by
[Dublin Core] (DC)), followed by any other metadata elements (name/value
pairs) the provider wishes to provide.

Kernel metadata is structured as if in answer to the questions, who, what,
when, and where regarding the expression of, or the “telling” of, an object:

-   *who* “told” it (similar to DC Creator, Contributor, and Publisher, but
    also Inventor, Discoverer, Conductor, etc),
-   *what* the “telling” was called (similar to DC Title, but also
    TissueSampleNumber, ArtifactBarcode, etc),
-   *when* it was “told” (similar DC Date, but includes date ranges,
    approximate and BCE dates),
-   *where* the “telling” can be found (from DC Identifier, but usually not
    needed because this is the ARK itself)

## Inflection: metadata and policy statement

Many ARK resolvers, including N2T, support two inflections: characters you can
add to the end of an ARK URL to return additional information about the
resource.

With inflection features, each ARK URL should be able to provide 3 things:

-   the object itself,
-   a brief metadata record if you append a single question mark to the ARK, and
-   a maintenance commitment from the current server when you append two
    question marks.

To see inflections in action, visit the following links:

-   <https://texashistory.unt.edu/ark:/67531/metapth346793/>
-   <https://texashistory.unt.edu/ark:/67531/metapth346793/?>
-   <https://texashistory.unt.edu/ark:/67531/metapth346793/??>

The metadata returned is determined by the metadata schema and maintenance
decisions you made when implementing ARKs.

The policy information returned is actually a URL that leads to a policy
statement that some resolvers may allow you to configure. That policy
statement should hold true for all objects you assign ARKs to.

As an example, the California Digital Library (CDL) assigns identifiers within
the ARK domain under the NAAN 13030 and according to the following principles:

-   No ARK shall be re-assigned; that is, once an ARK-to-object association
    has been made public, that association shall be considered unique into the
    indefinite future.
-   To help them age and travel well, the Name part of CDL-assigned ARKs shall
    contain no widely recognizable semantic information (to the extent
    possible).
-   CDL-assigned ARKs shall be generated with a terminal check character that
    guarantees them against single character errors and transposition errors.

Institutions that generate ARKs may want to follow similar principles or
develop their own assignment policies.

## Deleting ARKs

Unlike other kinds of identifiers, ARKs can be deleted. If no one knows about
an identifier but you, there’s no harm in deleting or withdrawing it. Stepping
back, an identifier is actually an assertion that a given string of characters
is associated with specific thing. The fewer people you tell, the easier it is
to scrap that assertion. If you create a URL and share it only with your
closest colleagues, that is much easier to withdraw than if the URL appeared
for a month on a public website, from which it was harvested by internet
search engines. In contrast, it is hard to delete DOIs and Handles because
once registered and made resolvable, they are effectively released to the
world.

ARKs behave like URLs in this respect. Providers are free to create and share
ARKs narrowly, in which case they’re easy to delete.

Perhaps surprisingly, even if shared more broadly, ARKs should come with
policy [statements] that tell you how much or how little commitment is made to
them. ARKs were designed to articulate a variety of persistence statements,
but they are certainly not alone among identifiers and objects that exhibit a
variety of commitment “flavors”. This is why ARKs are known as
high-functioning identifiers that are good at persistence rather than as
“persistent identifiers”.

Finally, people make mistakes. ARKs, DOIs, Handles, PURLs, and URNs are
sometimes broadcast in error and need to be withdrawn. When that happens,
provider best practice is to make the withdrawn identifier resolve to a
“tombstone” page that explains and perhaps apologizes for the inconvenience.
Despite the rumors, persistent identifiers are never guaranteed.

Because ARKs can be deleted and don’t require metadata, you can create them
very early in the object workflow, before you’re sure about the keeping the
resource and before you’ve invested in describing it.

[ARK shoulders and namespaces]: /about/ark-namespaces/
[DataCite schema]: https://schema.datacite.org/meta/kernel-4.2/
[Dublin Core]: http://dublincore.org/
[DataCite]: https://schema.datacite.org/
[Schema.org]: https://schema.org/
[Dublin Kernel]: http://dublincore.org/groups/kernel/spec/
[N2T]: https://n2t.net/
[statements]: https://doi.org/10.5334/dsj-2017-039
