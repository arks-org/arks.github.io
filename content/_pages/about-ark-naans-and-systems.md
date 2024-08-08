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

Whether you use an ARK service provider, a plug-in or microservice, or build
your own ARK support, there are multiple systems that play a part in making
ARKs persist. The following systems are likely to be part of your ARK
solution.

## Name Assigning Authority Number (NAAN) registry

A NAAN is a number that uniquely identifies your institution, and appears near
the start of the ARKs that your organization produces.

      https://example.org/ark:/12345/x54xz321/s3/f8.05v.tiff
      \_________________/ \__/ \___/ \______/\____/\_______/
                  |        |     |      |      |       |
                  |  ARK Label   |      | Sub-parts  Variants
                  |              |      |
    Name Mapping Authority (NMA) |    Assigned Name
                                 |
                  Name Assigning Authority Number (NAAN)
{: .bg-secondary-subtle }

The NAAN part of an ARK, following the “ark:” label, uniquely identifies the
organization that assigned the Name part of the ARK. Often the initial access
provider coincides with the original namer (represented by the NAAN), however,
access may be provided by one or more different entities instead of or in
addition to the original naming authority.

The NAAN used above, 13030, represents the California Digital Library (CDL).
Over {{ site.num_ark_orgs }} organizations have registered for ARK NAANs, including numerous
universities, Google, the Internet Archive, WIPO, the British Library, and
other national libraries.

NAANs are assigned to prevent name assignment conflicts. By obtaining a NAAN,
an organization gets the exclusive right to create ARKs “under” that NAAN,
which is part of a prefix in front of all your ARKs.

The set of ARKs you can create is infinite and is known as your NAAN’s
namespace. Since organizations only create ARKs in their own namespaces, ARK
assignments between organizations will never “collide”.

All NAANs must be registered with the Name-to-Thing (N2T) ARK registry and
listed in the public NAAN registry, which also lists the official resolver for
each NAAN. Any stable memory organization may obtain a NAAN at no cost and
begin assigning ARKs. Please fill out the [NAAN request form] if you are
interested in generating and using ARKs for your information objects.

You may also use that form to request NAANs on behalf of other organizations.
Your organization might represent a group of other organizations, possibly
providing them services such as ARK minting and database management. Examples
include a non-profit aggregator or a for-profit archival system vendor. To
proceed, you would fill out the form and list your own organization as a
“service provider”. Note that a NAAN requested in this way is meant for an
organization that directly curates or creates content to which ARKs will be
assigned. Each such organization that you serve should have its own NAAN.
Moreover, if a service provider does resolution for a dozen organizations, it
would not be surprising if its resolver URL were registered with a dozen
different NAANs.

The ARK Alliance maintains a complete registry of all assigned NAANs,
currently at the California Digital Library. The registry is mirrored at the
(U.S.) National Library of Medicine and the National Library of France.

You can request a change to the registry entry for a NAAN related to your
organization by filling out the [same online form][NAAN request form] used for
requesting a new NAAN. For security purposes requests are processed manually.
Example reasons for a change may include notifying N2T of a change in your
organization’s contact person or resolver URL, updating your organization’s
name assignment policy (sample policy), requesting an additional NAAN, eg, to
support a significant new body of ARKs or new organizational division, and
transitioning your NAAN to another organization that will carry on your work
and future use of your NAAN.

NAANs are portable. If your organization transitions into or out of a vendor
relationship, there is no impediment to taking your NAAN with you.

![][1]

## Nice Opaque Identifier (Noid) systems

A “Noid system” is an identifier service base on the Noid (Nice Opaque
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

### Minting name strings

      https://example.org/ark:/12345/x54xz321/s3/f8.05v.tiff
      \_________________/ \__/ \___/ \______/\____/\_______/
                  |        |     |      |      |       |
                  |  ARK Label   |      | Sub-parts  Variants
                  |              |      |
    Name Mapping Authority (NMA) |    Assigned Name
                                 |
                  Name Assigning Authority Number (NAAN)
{: .bg-secondary-subtle }

The “assigned name” in an ARK is the part of the ARK string that your
organization is responsible for making unique. Appended to your NAAN, it
becomes globally unique. A Noid minter can help because it ensures that the
same string does not get generated twice. If you expect to be running a Noid
minter locally, there is further information on ARK name syntax and best
practices in the [Running ARK Minters and Resolvers] section.

You don’t have to use a Noid minter to generate unique assigned names. No
matter how you generate them, they can still be used with the other two Noid
functions.

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

        https://ark.bnf.fr/ark:/12148/btv1b8449691v/f29

Having to run and maintain your own resolver is the cost of complete autonomy.
Using your own resolver also lets you do branding via the hostname, the
downside being that brands are transient and tend to make identifiers fragile.
Political and even legal (eg, trademarks) pressures may make supporting older
branded hostnames, hence their identifiers, difficult. And while your
organization may provide the staffing and IT resources needed to host and run
a local resolver today, IT policy and support may change in the future.

Another reason to use N2T is if your ARKs “in the wild” show up without your
resolver hostname (meaning that they start “ark:…”, which is not uncommon to
see), the person wanting to use them won’t need to know the hostname as long
as they know to add “n2t.net” in front of them. This works because N2T knows
the correct resolver hostname.

### N2T feature: suffix passthrough

Suffix passthrough is a feature of the N2T resolver that allows you to assign
a single identifier to large complex objects with many files while still being
able to refer to each distinct file.

Suppose you have a registered ARK, https://n2t.net/ark:/12345/6789, that
redirects to the web server page,

       https://a.example.org/dataset542

And suppose that same server also serves up these pages:

       https://a.example.org/dataset542/volume3
       https://a.example.org/dataset542/volume3/part2
       https://a.example.org/dataset542/volume3/part2.pdf

What suffix passthrough does is to let your one registered ARK act as if you
had also registered these three ARKs below, which would resolve to the pages
above, respectively:

       https://n2t.net/ark:/12345/6789/volume3
       https://n2t.net/ark:/12345/6789/volume3/part2
       https://n2t.net/ark:/12345/6789/volume3/part2.pdf

In this case, suffix passthrough saved your having to maintain registrations
for three more pages. In fact, it works for an unlimited number of pages. You
can [learn more about N2T’s suffix passthrough].

[1]: /assets/images/pages/about-ark-naans-and-systems/NAAN_slice.jpg
[NAAN request form]: https://docs.google.com/forms/d/e/1FAIpQLSfd1CX6idwLB47g8OGKUG654auV8IU8yI7DAs61cXGOoFDn0g/viewform?c=0&w=1
[Running ARK Minters and Resolvers]: about-running-minters-and-resolvers.md
[ARK features]: about-ark-features.md
[learn more about N2T’s suffix passthrough]: https://n2t.net/e/suffix_passthrough.html
