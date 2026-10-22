---
title: ARK Alliance
permalink: /
pid:
date: 2023-08-23 14:03:11
published: true
background: warm
---

ARK Alliance: Global community for open, decentralized ARK identifiers
supporting research and scholarship. {{ site.num_arks }} ARKs created
by {{ site.num_ark_orgs }}+ orgs.

<!--more-->

{% include content/section.html do="start" color="warm" label="Introduction to ARKs" %}

Archival Resource Keys (ARKs) serve as *persistent identifiers*, or stable,
trusted references for information objects. Among other things, they aim to be
web addresses (URLs) that don’t return 404 Page Not Found errors. The ARK
Alliance is an open global community supporting the ARK infrastructure on
behalf of research and scholarship.

End users, especially researchers, rely on ARKs for long term access to the
global scientific and cultural record. Since 2001 some {{ site.num_arks }} ARKs
have been created by over [{{ site.num_ark_orgs }} organizations] — libraries,
data centers, archives, museums, publishers, government agencies, and vendors.

ARKs are open, mainstream, non-paywalled, decentralized persistent identifiers
that you can start creating in under 48 hours. They identify anything digital,
physical, or abstract.

{% include content/fig.html
  url="/assets/images/pages/index/ark_things.png"
  label="ARKs in use"
  alt="A collage of a journal article, a violin, a family tree, the Mona Lisa, an illustrated book cover, a photograph of baseball players, and a pressed flowering plant."
  description="Some things that have ARKs — an article, violin, genealogy, painting, book, sports photo, and plant specimen — assigned by the Louvre, Smithsonian Institution, Internet Archive, California Digital Library, and FamilySearch. "
%}

{% include content/section.html do="changeto" color="cool" label="ARKs compared to DOIs, URNs, and Handles" %}

## ARKs are similar to DOIs, URNs, and Handles

All of them:

-   were introduced over {{ site.ark_age }} ago,
-   exist in large numbers ({{ site.num_arks }} ARKs, {{ site.num_dois }} DOIs,
    etc.),
-   start with a string to identify the name assigning authority,
-   require the active updating of URL redirects, and
-   support research and scholarship, appearing in the Data Citation Index,
    Wikipedia, ORCiD.org profiles, etc.

## In contrast, ARKs are cheaper, more flexible, and less centralized

Using ARKs allows you to:

-   create unlimited identifiers without paying for the right to do so,
-   add any kind of metadata, including no metadata,
-   append extensions and query strings during resolution,
-   link directly to an article, image, or spreadsheet that is immediately
    usable by people and software without making them first stop at a landing
    page, and
-   make millions of ARKs resolvable by managing just one ARK, via a mechanism
    called [suffix passthrough].

To get started creating ARKs, please fill out [this request form] for your
organization. If you wish to get involved in the ARK Alliance, consider
joining one of its [working groups].
{: .arka__highlight}

{% include content/fig.html
  url="/assets/images/pages/index/cropped-ARKsInTheOpen-1536x957.jpg"
  label="Medieval illustration of building an ark"
  alt="Three men use hand tools to build a large wooden ship with a timber-framed house on its deck."
  description="Working on the ARK. From a 1401 manuscript page, illuminated by Johannette Ravenelle, that itself has an ARK identifier: <[https://n2t.net/ark:12148/btv1b8449691v/f29](https://n2t.net/ark:12148/btv1b8449691v/f29)> (source gallica.bnf.fr, National Library of France)."
%}

[{{ site.num_ark_orgs }} organizations]: community.md
[1]: ../assets/images/pages/index/ark_things.png
[suffix passthrough]: {{ site.baseurl }}{{ site.spt_explained }}
[this request form]: {{ site.naan_form_url }}
[working groups]: {{ site.baseurl }}/community/groups/
[2]: ../assets/images/pages/index/cropped-ARKsInTheOpen-1536x957.jpg

{% include content/section.html do="end" %}
