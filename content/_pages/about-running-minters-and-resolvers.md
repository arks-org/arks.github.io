---
title: Running minters and resolvers
permalink: /about/running-minters-and-resolvers/
pid: 819
date: 2021-01-23T23:03:44+00:00
published: true
---

Creating & Managing ARKs: Use alphanumerics, inert hyphens. Opt for opaque identifiers. Choose URL format for stability. Guide to minters & resolvers.

<!--more-->

## Minting ARK name strings

You are free to create ARK name strings as you wish, provided you use only
digits, letters (ASCII, no diacritics), and the following characters:

         = ~ * + @ _ $ . /
{: .bg-secondary-subtle }

The last two characters are reserved in the event you wish to disclose ARK
relationships.

Another unique feature of ARKs is that hyphens (‘-‘) may appear but are
*identity inert*, meaning that strings that differ only by hyphens are
considered identical; for example, these strings

       ark:/12345/141e86dc-d396-4e59-bbc2-4c3bf5326152
       ark:/12345/141e86dcd3964e59bbc24c3bf5326152
{: .bg-secondary-subtle }

identify the same thing. The reason for this feature is that text formatting
processes out in the world routinely introduce extra hyphens into identifiers,
and that breaks links to any server that treats hyphens as significant. ARKs
are the only identifiers we know of that won’t break when that happens.

## Best practices for minting ARK name strings

ARKs distinguish between lower- and upper-case letters, which makes shorter
identifiers possible (52 vs 26 letters per character position). The “ARK way”,
however, is to use lower-case only unless you need shorter ARKs. The
restriction makes it easier for resolvers to support your ARKs in case they
arrive from the world with mixed- or upper-case letters, which happens
regrettably often due to the lingering 1960s-era view that identifiers are
case-insensitive (one sign of which is the prominence of the Caps Lock key on
most computer keyboards).

Alphanumeric characters (letters and digits) are generally adequate, but it is
recommended to use the *betanumeric* subset, consisting only of digits and
consonants minus ‘l’ (letter ell, often mistaken for the digit 1):

         0123456789bcdfghjkmnpqrstvwxz
{: .bg-secondary-subtle }

This happens to be the repertoire produced from *minters* (unique string
generators) supported by the [Noid] (Nice Opaque Identifiers) tool and N2T.net
(used by ezid.cdlib.org and the Internet Archive), which creates
transcription-safe strings using the strongest mainstream identifier check
digit algorithm. When generating unique strings automatically, the absence of
vowels helps avoid accidentally creating words that users can misconstrue.

Regarding assignment, one common strategy is to leverage legacy identifiers.
For example, a museum moth specimen number cd456f9_87 might be advertised
under the ark:/12345/cd456f9_87. Some legacy identifiers may need to be
altered in view of ARK character restrictions. The second common strategy is
to make up entirely new strings for your ARKs. In this case it is important to
consider whether to make them *opaque* or non-opaque (or a bit of both).

## Opaque identifiers

Persistent identifier strings are typically *opaque*, deliberately revealing
little about what they’re assigned to, because non-opaque identifiers do not
age or travel well. Organization names are notoriously transient, which is why
NAANs are opaque numbers. As titles and dates are corrected, word meanings
evolve (e.g., innocent older acronyms may become offensive or infringing),
strings meant to be persistent can become confusing or politically
challenging. The generation and assignment of completely opaque strings comes
with risk too, for example, numbers assigned sequentially reveal timing
information and strings containing letters can unintentionally spell words
(which is why vowels are missing from the recommended character repertoire).

<div class="table-responsive" markdown=1>
|                |                                      |                           |                        |
|----------------|--------------------------------------|---------------------------|------------------------|
| **non-opaque** | Netscape Permanent Archive           | Gay_Divorcee_1934_April_1 | Name-to-Thing Resolver |
| **opaque-ish** | x0001, x0002, …, x9998               | GD/1934/04/01             | n2t.net                |
| **opaquer**    | 141e86dc-d396-4e59-bbc2-4c3bf5326152 | 19340401                  | n2t                    |
| **opaquest**   | 141e86dcd3964e59bbc24c3bf5326152     | h8k74926g                 | 12148                  |
{: .table .table-striped .table-hover }
</div>

ARKs are not required to be opaque, but it is recommended that the base object
name be made opaque, since it tends to name the main focus of persistence. If
any qualifier strings follow that name, it is less important that they be
opaque. To help choose your approach to opacity, you may wish to consider
compatibility with legacy identifiers and ease of string generation and
transcription (eg, brevity, check digits). New strings can be created (minted)
with date/time, [UUID], and number generators, as well as [Noid] minters.

Opaque strings are “mute” and therefore can be challenging to use and manage,
which is why ARKs were designed to be “talking” identifiers. This means that
if there’s metadata, an ARK that comes in to your server with the ‘?’
inflection should be able to talk about itself.

## Making server content addressable with ARKs

First, decide what the user experience of accessing your ARKs will be, for
example, a spreadsheet file, a PDF, an image, a landing page filled with
formatted metadata and a range of choices, etc. Whichever you choose, plan for
your server to be able to respond with metadata if your ARK should arrive with
a ‘?’ inflection after it.

Otherwise, serving ARKs is like serving URLs. Normally incoming URL strings
somehow *address* (get mapped to) content that your web server returns. If
your server is ARK-aware, incoming ARKs (expressed as URLs) must be mapped to
the same content. The term “map” here refers to a generic web server software
process that associates the incoming URL with content such as a particular
file or a database entry. The process varies greatly across servers, but can
be thought of abstractly as a lookup in a two-column table: column 1 for each
incoming URL and column 2 for the corresponding file, database entry, or
another URL.

Unfortunately, this mapping table description is abstract because the details
depend on your web server software. On the other hand, the idea of mapping is
very basic to how the web has worked since the 1990’s, so doing your own
resolution is quite feasible. For example, most server configuration files can
easily accommodate 100,000 mapping table rows with lines that look like
“Redirect &lt;incoming ARK&gt; &lt;URL on this or other server&gt;” (columns 1
and 2, after you replace what is in &lt;&gt;’s). A common approach with ARKs
is to map each incoming ARK (column 1) to the kind of URL that your web server
already knows how to deal with, and you are done. With this approach, to keep
the ARKs in column 1 stable you only need to keep the URLs in column 2 updated
when they change. In this case your server is acting as a *local resolver*. If
you don’t want to implement this yourself, there are [ARK software tools and
services] that can help.

Another approach is to run your web server without change, but instead of
updating local tables, you would update ARK-to-URL mapping tables residing at
a non-local resolver. Examples of this can be found among vendors and in any
organization that updates tables via EZID.cdlib.org (which, due to a special
relationship, updates resolver tables at n2t.net).

## ARK inflection vs. content negotiation

An *inflection* is a change to the ending of a word to express a shift in
meaning. It permits us to define a word such as “go” without also defining
“goes” and “going”. To an ARK that leads to an object, simply adding a ‘?’ to
the end (the ‘?’ is one example of an ARK inflection) permits us to request
metadata without having to define a separate identifier for the object’s
metadata. This simple technique can be used by a human with a web browser. The
N2T resolver supports both inflections and content negotiation.

*Content negotiation for metadata* is a software technique for requesting
alternate formats of an object, such as the PDF or RTF form of an HTML file.
Although not designed for it, historic “content negotiation” was kludged
(twisted) in certain contexts to request metadata under the startling
assumption that formats often used to hold metadata *are* in fact metadata and
will never be objects in their own right. Unlike inflections, “content
negotiation for metadata”/doesn’t work at all for *objects* represented in
those formats (the list of which is growing and known only by private
agreement), nor is it easy enough to be used directly by most human users.

Although inflections are commonly associated with ARKs, they are not “owned”
by ARKs. Contrary to popular belief, identifiers don’t *do* anything – it’s
their resolvers that *do* or *don’t* support such features. So, for example,
inflections and suffix passthrough are supported by n2t.net for all identifier
types, but not by doi.org or handle.net (which has a related functionality
called Template Handles) for any identifier types.

## ARK citation format

The URL (https or http) form of the ARK is preferred, for example,

       https://n2t.net/ark:/99166/w66d60p2
{: .bg-secondary-subtle }

An ARK meant for external use is generally advertised (released, published,
disseminated) in this way in order to be an *actionable* *identifier*. If a
more compact visual display of an ARK is needed, it should be hyperlinked; for
example, a compact display of an HTML hyperlink can be achieved with

       <a href="https://n2t.net/ark:/99166/w66d60p2"> ark:/99166/w66d60p2 </a>
{: .bg-secondary-subtle }

An important decision is whether your URL-based ARKs will use the hostname of
your local resolver or the N2T.net resolver. If local control or branding is
important enough, you would advertise ARKs based at your local resolver (see
about serving content with ARKs). If you’re concerned about the stability of
your local hostname, you would advertise your ARKs based at [n2t.net].

Resolving your ARKs through N2T is always possible for users, regardless of
how you advertise them.

[Noid]: https://n2t.net/e/noid.html
[UUID]: https://en.wikipedia.org/w/index.php?title=Universally_unique_identifier&oldid=906541334
[ARK software tools and services]: resources.md
[n2t.net]: https://n2t.net/
