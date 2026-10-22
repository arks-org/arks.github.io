---
title: ARK NAANs and systems
permalink: /about/ark-naans-and-systems/
pid: 798
date: 2021-01-23T17:36:24+00:00
published: true
---

The article discusses NAANs' role in ARKs, preventing naming conflicts, Noid
systems, metadata management, and N2T resolver.

<!--more-->

{% include content/section.html do="start" color="cool" label="Role of the NAAN" %}

Whether you use an ARK service provider, a plug-in or microservice, or build
your own ARK support, there are multiple systems that play a part in making
ARKs persist. The following systems are likely to be part of your ARK
solution.

## Name Assigning Authority Number (NAAN) registry

<div class="flex-container">
<div class="flex-item" markdown="1">

{% capture anatomy2cap %}
A NAAN is a number uniquely identifying your institution, and appears
near the start of the ARKs that your organization produces. Over
{{ site.num_ark_orgs }} organizations have registered for ARK NAANs, including
Google, the Internet Archive, WIPO, and {{ site.num_national_libs }} national
libraries.
{% endcapture %}

{% include content/fig.html
  url="/assets/images/share/ark-anatomy.svg"
  label="Anatomy of an ARK URL"
  alt="An example ARK URL divided into its resolver, ARK label, NAAN, assigned name, sub-part, and variant components."
  description=anatomy2cap
%}

In the example `https://example.org/ark:12345/x54xz321/s3/f8.05v.tiff`,
`https://example.org/` is the replaceable Name Mapping Authority (NMA),
`ark:` marks the identifier scheme, and `12345` is the NAAN. The assigned
name `x54xz321` is unique within that NAAN, and its initial shoulder `/x5`
defines a sub-namespace. The full base object name is
`ark:12345/x54xz321`. The qualifiers `/s3/f8` identify contained sub-parts,
while `.05v.tiff` identifies a variant. The compact, stable ARK begins with
`ark:`; the resolver service before it may change.

</div>
<div class="flex-item" style="margin-left: 2rem;" markdown="1">

The NAAN part of an ARK, following the `ark:` label, uniquely identifies the
organization that assigned the Name part of the ARK. Often the initial access
provider coincides with the original namer (represented by the NAAN), however,
access may be provided by one or more different entities instead of or in
addition to the original naming authority.

</div>
</div>

NAANs are assigned to prevent name assignment conflicts. By obtaining a NAAN,
an organization gets the exclusive right to create ARKs “under” that NAAN,
which is part of a prefix in front of all your ARKs.

The set of ARKs you can create is infinite and is known as your NAAN’s
namespace. Since organizations only create ARKs in their own namespaces, ARK
assignments between organizations will never “collide”.

All NAANs must be registered with the Name-to-Thing (N2T) ARK resolver and
listed in the public NAAN registry, which also lists the official resolver for
each NAAN. Any stable memory organization may obtain a NAAN at no cost and
begin assigning ARKs. Please fill out the [NAAN request form] if you are
interested in generating and using ARKs for your information objects.

<div class="flex-container">
<div class="flex-item" style="padding: 10px 0;" markdown="1">

NAANs are portable. If your organization transitions into or out of a vendor
relationship, there is no impediment to taking your NAAN with you.
The ARK Alliance maintains the complete registry of all assigned NAANs
at the California Digital Library. The registry is mirrored at the
(U.S.) National Library of Medicine and the National Library of France.

</div>
<div class="flex-item" style="margin-left: 1rem;" markdown="1">

{% include content/fig.html
  url="/assets/images/pages/about-ark-naans-and-systems/NAAN_slice.jpg"
  alt="Several pieces of naan flatbread stacked on a plate."
  description="Layers of naan bread."
  nocaption=true
%}

</div>
</div>

### Requesting changes to your NAAN registry entry

You can request a change to the registry entry for a NAAN related to your
organization by filling out the [same online form][NAAN request form] used for
requesting a new NAAN. For security purposes requests are processed manually.

Example reasons for a change may include notifying N2T of a change in your
organization’s contact person or resolver URL, updating your organization’s
name assignment policy (sample policy), requesting an additional NAAN, eg, to
support a significant new body of ARKs or new organizational division, and
transitioning your NAAN to another organization that will carry on your work
and future use of your NAAN.

<div class="arka__side-note" role="note" aria-labelledby="service-provider-note-heading" markdown="1">

### Service providers managing NAANs on behalf of organizations {#service-provider-note-heading}

You may also use the [NAAN request form] to request NAANs on behalf of other
organizations. Your organization might represent a group of other
organizations, possibly providing them services such as ARK minting and
database management. Examples include a non-profit aggregator or a for-profit
archival system vendor. To proceed, you would fill out the form and list your
own organization as a “service provider”.

Note that a NAAN requested in this way is meant for an organization that
directly curates or creates content to which ARKs will be assigned. Each such
organization that you serve should have its own NAAN. Moreover, if a service
provider does resolution for a dozen organizations, it would not be surprising
if its resolver URL were registered with a dozen different NAANs.

</div>

## Creating unique name strings

<div class="flex-container">
<div class="flex-item" markdown="1">

{% include content/fig.html
  url="/assets/images/share/ark-anatomy.svg"
  label="Assigned name within an ARK URL"
  alt="An example ARK URL divided into its resolver, ARK label, NAAN, assigned name, sub-part, and variant components."
  description="The `Assigned Name` in an ARK is the part of the ARK string that your organization is responsible for making unique. Appended to your NAAN, it becomes globally unique."
%}

In the example, `https://example.org/` is the replaceable Name Mapping
Authority, `ark:` marks the identifier scheme, and the NAAN is `12345`. The
assigned name `x54xz321` is unique within that NAAN and begins with the `/x5`
shoulder. Together, `ark:12345/x54xz321` forms a globally unique base ARK.
The later `/s3/f8` and `.05v.tiff` qualifiers identify sub-parts and variants
of that base object.

</div>
<div class="flex-item" style="margin-left: 2rem;" markdown="1">

To make ARKs globally unique, first you have to assign names that are
locally unique within your organization’s NAAN namespace. This is the
responsibility of the organization that has the NAAN.
The assigned name can be any string (restricted to the ARK character
repertoire), as long as it is unique within your NAAN’s namespace.

</div>
</div>

You can use any method you like to create unique strings as your ARK assigned
names. Especially easy is to re-use existing strings that have served you well
for many years, such as accession numbers. For example, a complete ARK system
based on unique legacy digits strings with a small change to a web server
configuration file.

Another way to create strings is manual composition of substrings that
themselves have *stable* meaning, such as journal number, volume, issue,
and article number, such as, `j2/v14/i8/a21`. Caution: if you use this method,
prefer digits over strings that include natural language words; while
convenient to in the short term, many semantic strings do not age or travel
well.

Another popular method is to use software to generate unique strings.
Caution: many generated strings, such as database or spreadsheet row
numbers, are unstable and will change, breaking any persistent identifiers
based on them, if you

- add or delete rows,
- reload your data after a crash,
- reorganize your data,
- change to a new data management system, or
- even upgrade to a new version of your current system.

Following the cautions above, there are software tools to help create unique
strings. UUID tools are easy to find, but they generate uncomfortably long
strings. There is a ULID tool that creates similar but shorter stings.

Even shorter strings can be generated with minters such as Noid and
Arklet-Frick, and both these tools do much more than just minting.
If you expect to be running a minter locally, there is further information on
ARK name syntax and best practices in the [Running ARK Minters and Resolvers]
section.

{% include content/section.html do="changeto" color="warm" label="Some minting and resolving systems" %}

### Nice Opaque Identifier (Noid) systems

A “Noid system” is an identifier service based on the Noid (Nice Opaque
Identifier) software package. Noid can be used to do one or more of these
three functions.

1.  Mint name strings for ARKs, and ensure that the same string does not get
    assigned twice.
2.  Manage metadata for things with ARKs. This includes the “target URL”
    (where the thing currently resides), but can also include other metadata
    such as title and date.
3.  Provide a local resolver for ARKs.

If you’re using an ARK service provider, a plug-in or a system with
out-of-the-box support for ARKs, you won’t need to run a separate Noid system.
The sections below describe the Noid software in more detail.

### Managing metadata

A local Noid system can also store and return metadata for each thing
(resource) that is assigned an ARK. This usually happens by way of an API with
a local repository, so that as metadata is assigned or edited in your
repository system, it is updated in your Noid system. Different Noid
implementations or ARK service providers may support different metadata
standards. The Metadata section of the [ARK features] page will provide more
detail about metadata and ARKs.

You don’t have to use Noid to manage your metadata, and some organizations
already use more sophisticated metadata and object management systems. You
may, however, need to use Noid to store one particular metadata element, the
target URL, if you want to use Noid’s resolution function.

### Resolution

As noted earlier, a resolver is the mechanism for redirecting a persistent
link that a user has followed to the URL where the thing currently resides.

For a resolver to work, its hostname must be carefully chosen so it won’t ever
need to be changed. Memory organizations, some of them centuries old, tend to
have hostnames well-suited to be resolvers. Some well-known, younger resolvers
are n2t.net (the ARK resolver), identifiers.org, doi.org, handle.net, and
purl.org.

ARKs can be implemented with a local resolver only, a global resolver only, or
combination of both.

### N2T: a global resolver

N2T.net is a global ARK resolver. N2T, which stands for Name-to-Thing, is
actually a generalized resolver for mapping names into things, so it knows
where to route over 900 other types of identifier – ARK, DOI, PMID, Taxon,
PDB, ISSN, etc. If you’re interested, the diagram and the next answer give a
bit more detail.

Resolution starts when someone attempts to access a URL (eg, by clicking on a
link) consisting of “https://n2t.net/” followed by the identifier (name) to be
resolved. As with any resolver, no one knows in advance – not the user, not
the web browser, nor N2T itself – if resolution will be successful. It depends
on what N2T finds that it knows about the received identifier.

When resolution is finished, the user is often unaware that it happened,
unless they are paying attention (eg, they notice that the link in the
location bar is different from what they clicked on). Resolution is designed
to take place without the user noticing.

Most ARKs are created by organizations that advertise (“publish”) them based
at their own resolvers. For example, this ARK was published based at the
ark.bnf.fr resolver:

        https://ark.bnf.fr/ark:12148/btv1b8449691v/f29

Having to run and maintain your own resolver is the cost of complete autonomy.
Using your own resolver also lets you do branding via the hostname, the
downside being that brands are transient and tend to make identifiers fragile.
Political and even legal (eg, trademarks) pressures may make supporting older
branded hostnames, hence their identifiers, difficult. And while your
organization may provide the staffing and IT resources needed to host and run
a local resolver today, IT policy and support may change in the future.

Another reason to use N2T is if your ARKs “in the wild” show up without your
resolver hostname (meaning that they start “ark:...”, which is not uncommon to
see), the person wanting to use them won’t need to know the hostname as long
as they know to add “n2t.net” in front of them. This works because N2T knows
the correct resolver hostname.

{% include content/section.html do="changeto" color="cool" label="Suffix passthrough" %}

### Key feature: suffix passthrough

Suffix passthrough (SPT) is a feature of a local ARK resolver that allows you
to assign a single identifier to large complex objects with many files while
still being able to refer to each distinct file.

Suppose you have a registered ARK, https://n2t.net/ark:12345/6789, that
redirects to the web server page,

       https://a.example.org/dataset542

And suppose that same server also serves up these pages:

       https://a.example.org/dataset542/volume3
       https://a.example.org/dataset542/volume3/part2
       https://a.example.org/dataset542/volume3/part2.pdf

What suffix passthrough does is to let your one registered ARK act as if you
had also registered these three ARKs below, which would resolve to the pages
above, respectively:

       https://n2t.net/ark:12345/6789/volume3
       https://n2t.net/ark:12345/6789/volume3/part2
       https://n2t.net/ark:12345/6789/volume3/part2.pdf

In this case, suffix passthrough saved your having to maintain registrations
for three more pages. In fact, it works for an unlimited number of pages. You
can [learn more about suffix passthrough].

[NAAN request form]: {{ site.naan_form_url }}
[Running ARK Minters and Resolvers]: about-running-minters-and-resolvers.md
[ARK features]: about-ark-features.md
[learn more about suffix passthrough]: {{ site.baseurl }}{{ site.spt_explained }}

{% include content/section.html do="end" %}
