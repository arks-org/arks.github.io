---
title: Images and the promise of ARKs with IIIF
type: article
permalink: /blog/images-and-the-promise-of-arks-with-iiif/
pid: 1498
author: Julien A. Raemy
original_date: 2022-11-23T20:19:11+00:00
published: true
---

Digital images hold critical, compelling scholarly and scientific information.
Unlocking their value, however, can be expensive. High-quality image object
files are large and complex, and usually come with special storage and network
requirements. Advanced software systems are needed for manipulation, zoom,
search, display, description, and annotation, and they are often custom-built
to work with local object servers. Of course, having persistent identifiers,
such as ARKs, for image objects helps protect the large investment needed to
create this sophisticated infrastructure.

*This embedded [interactive figure] lets you page and zoom in a medieval
manuscript from the BnF (French National Library) thanks to the open-source,
IIIF [Universal Viewer] software.*

Only well funded efforts can create sophisticated systems, customized to work
with just one or a few repositories. But what if all organizations used the
same access methods across their image servers? Then participating servers
could share much of the same software, which would only need to be built once.
Establishing standard access methods to unlock the value of open image
collections across a large number of servers is a goal of “IIIF”.

## **What is IIIF?**

![IIIF Logo]{: .img-thumbnail .img-responsive fetchpriority="high" height="500" loading="eager" width="500"}

The [International Image Interoperability Framework] (IIIF – pronounced
“*triple-eye-eff*“) is a community-driven initiative that has defined six open
application programming interfaces (APIs).

The APIs provide a rich set of ways to describe, request, and deliver most
image-based content on the Web. The idea is that the more repositories adopt
the IIIF APIs, the more software developers and vendors will be incentivized
to create IIIF-compliant systems. The result will be affordable full-featured
systems that work across a large and diverse set of image servers.

One cross-server use of IIIF is the [virtual reconstruction demo] of a volume
from the Châteauroux Municipal Library that was created in 1460. The
IIIF-compliant [Mirador] viewer uses hyperlinks to “fill holes in pages” where
illustrations had once been cut out but were later found in various external
collections.

The IIIF-compliant Mirador viewer for virtual reconstruction, using hyperlinks
to “fill holes in pages” where illustrations had been cut out but later found
in various external collections.

This “reunification” demo was borrowed from the [Introduction to IIIF video].
It highlights a core aim of IIIF, which is to break down institutional silos
that discourage content sharing across collections. Such sharing becomes all
the more valuable the more that hyperlinks to internal and external
institutional image servers are stable. Enter persistent identifiers.

## **The IIIF API expressed via identifiers**

While IIIF recommends no particular persistent identifier for linking to
web-accessible content, they mention ARKs and persistence. In particular, the
[IIIF image API] says that an image identifier “may be an ARK, URN, filename,
or other identifier.” Also, the [IIIF presentation API] says that once URIs
for web-based resources are published, “they should be as persistent and
unchanging as possible.”

In IIIF the base image identifier is a URI with defined path extensions to
hold API parameters. The parameters are used to request such things as region,
size, quality, and format. For example, this IIIF-compliant URI

`https://gallica.bnf.fr/iiif/ark:/12148/btv1b8449691v/f29/2131,4016,1467,948/full/0/default.jpg`

<https://gallica.bnf.fr/iiif/ark:%2F12148%2Fbtv1b8449691v%2Ff29/2131,4016,1467,948/full/0/default.jpg>
(the ark:/ and the identifier have been URI percent-encoded per the IIIF
specification, see Comments below)

requests the return of a specific rectangular region “2131,4016,1467,948”, at
full quality and in the JPEG (“.jpg”) format. This region is shown below.

![][1]{: .img-thumbnail .img-responsive fetchpriority="" height="662" loading="lazy" width="1024"}

A rectangular detail region of interest (coordinates 2131,4016,1467,948)
requested via IIIF-compliant path elements (parameters) from a manuscript held
at the BnF.

Image content is often hierarchical, so we need identifiers at more than one
level. For example, a bound manuscript is a compound object consisting of page
objects. The IIIF model allows for multiple image “canvas” objects under a
top-level “manifest” object (covered in the [IIIF presentation API]).

## **Congruence of ARK extensions and IIIF paths**

ARK suffixes (extensions), which are used to refer to sub-objects in a
hierarchy and to variant formats, are a natural fit for IIIF, with its API
parameters expressed as path extensions.

            Resolver Service            Compact ARK
           __________________  _______________________________
          /                  \/                               \
          https://example.org/ark:/12345/x6np1wh8k/c3/s5.v7.xsl
          \____________________________/\________/\___________/
                       Prefixes          Base Name   Suffixes

Moreover, because ARKs permit [suffix passthrough], it is possible to register
just the top-level resolvable ARK to support an infinite number of resolvable
suffix combinations without having to register each extension.

While combining ARKs with IIIF holds great promise, there are currently no
widely adopted recommendations for using them together. Meanwhile, it should
be safe to follow the [URI Syntax of the IIIF Image API] and the [current ARK
specification]. The table below shows more of the parallelism.

<div class="table-responsive">
<table class="table table-hover table-striped">
<tr>
<th>ARK</th>
<td>https://{NMA}/ark:/{NAAN}/{name}/{qualifiers}</td>
</tr>
<tr>
<th>IIIF image API request</th>
<td>{scheme}://{server}{/prefix}/<br />
{identifier}/{region}/{size}/{rotation}/{quality}.{format}</td>
</tr>
<tr>
<th>IIIF image API information</th>
<td>{scheme}://{server}{/prefix}/{identifier}/info.json</td>
</tr>
<tr>
<th>IIIF presentation API (manifest)</th>
<td>{scheme}://{host}/{prefix}/{identifier}/manifest.json</td>
</tr>
<tr>
<th>ARK+IIIF example 1 (manifest)</th>
<td>https://example.org/iiif/ark:%2F{NAAN}%2F{objID}/manifest.json</td>
</tr>
<tr>
<th>ARK+IIIF example 2 (image)</th>
<td>https://example.org/iiif/ark:%2F{NAAN}%2F{imgID}/full/max/0/default.jpg</td>
</tr>
</table>
</div>

The ARK Anatomy and the IIIF URI Syntax Recommendations

## **ARKs and IIIF in practice**

Many organizations use the ARK and IIIF specifications, sometimes in
conjunction. Examples include the BnF (French National Library), the British
Library, Durham University Library, the Smithsonian Institution, and the
University of North Texas Libraries. The application of ARKs within a IIIF
ecosystem goes beyond the Image and Presentation APIs. One can imagine minting
ARKs in context of other IIIF specifications, or using ARKs to redirect users
to various tools and clients.

Some real world experiences from practitioners in the IIIF and ARK communities
have been shared in the recorded webinar “[Persistent identifiers in IIIF]”
(organized on 26 October 2021 by the Practical Applications of IIIF and
Heritage PIDs projects, both foundation projects in the Towards a National
Collection (TANC) programme in the UK).

It was an occasion to present the benefits of using ARKs and IIIF resources
for the cultural heritage institutions. Neither has any (direct) fees and both
are highly flexible in terms of descriptive metadata. A case can be made that
they make persistence and interoperability practicable and affordable for
cultural heritage institutions.

Below are more links that could be interesting to people who want to implement
ARKs and IIIF.

## **References**

Ben Brumfield, Sara Brumfield, Andy Irving, Rachael Kotarski, Joseph Padfield,
Julien A. Raemy, Anne McLaughlin, & Frances Madden. (2021). PIDs in IIIF
Webinar. Persistent Identifiers in IIIF.
<https://doi.org/10.5281/zenodo.5780055>

Julien A. Raemy, & René Schneider. (2019). Suggested measures for deploying
IIIF in Swiss cultural heritage institutions (White paper) (1.0). HES-SO
University of Applied Sciences and Arts, Haute école de gestion de Genève.
<https://doi.org/10.5281/zenodo.2640416>

2021 IIIF Conference presentation by Modou Dia (Pleade) – “*Association of
IIIF and ARK Protocols*”: <https://www.youtube.com/watch?v=oFlicS5f8HA>

Durham University Library:
<https://www.durhampriory.ac.uk/about-the-project/technology/ark-urls/>

French National Library (BnF):
<https://api.bnf.fr/api-iiif-de-recuperation-des-images-de-gallica> (in
French)

------------------------------------------------------------------------

    John Kunze, Julien A. Raemy, and Richard Higgins (Durham University
    Library) presented on the topic of ARK and IIIF at the IIIF Community Call
    on January 25, 2023 which was recorded.

[interactive figure]: https://gallica.bnf.fr/iiif/ark:/12148/btv1b8449691v/manifest.json
[Universal Viewer]: https://universalviewer.io/
[IIIF Logo]: /assets/images/posts/2022-11-23-images-and-the-promise-of-arks-with-iiif/IIIF-logo-500w.png
[International Image Interoperability Framework]: https://iiif.io
[virtual reconstruction demo]: https://demos.biblissima.fr/chateauroux/
[Mirador]: https://projectmirador.org/
[Introduction to IIIF video]: https://www.youtube.com/watch?v=K4i7YlZEMGA
[IIIF image API]: https://iiif.io/api/image/
[IIIF presentation API]: https://iiif.io/api/presentation/
[1]: /assets/images/posts/2022-11-23-images-and-the-promise-of-arks-with-iiif/ark_iiif.jpg
[suffix passthrough]: https://n2t.net/e/suffix_passthrough.html
[URI Syntax of the IIIF Image API]: https://iiif.io/api/image/3.0/#2-uri-syntax
[current ARK specification]: https://datatracker.ietf.org/doc/draft-kunze-ark/
[Persistent identifiers in IIIF]: https://tanc-ahrc.github.io/IIIF-TNC/seminar02.html
