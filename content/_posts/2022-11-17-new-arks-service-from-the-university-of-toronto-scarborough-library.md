---
title: "New “ARKs-Service” from the University of Toronto Scarborough Library"
type: article
permalink: /blog/new-arks-service-from-the-university-of-toronto-scarborough-library/
pid: 1479
author: Kirsta Stapelfeldt
original_date: 2022-11-17T23:54:38+00:00
published: true
---

How can smaller library shops mint and resolve persistent identifiers? A new
self-hosted application called “ARKs-Service” is a user interface designed to
help those with fewer dedicated IT resources to set up their own persistent
identifier management service. ARKs-Service is developed and maintained at the
University of Toronto Scarborough Library’s [Digital Scholarship Unit (DSU)] .

![][1]{: .img-thumbnail .img-responsive fetchpriority="high" height="712" loading="eager" width="928"}

Scarborough (Toronto) artist Doris McCarthy’s painting, “Lake Harbour in Late
Light,”available at ARK:
<https://ark.digital.utsc.utoronto.ca/ark:/61220/utsc11251>{: .text-break}

The DSU maintains digital special collections using [Islandora,] an
open-source digital asset management platform that utilizes multiple Drupal
sites for collaborative authoring, discovery, and display.

![][2]{: .img-thumbnail .img-responsive fetchpriority="" height="807" loading="lazy" width="1024"}

McCarthy’s “Reflection of the gazebo and trees,” available at ARK:
<https://ark.digital.utsc.utoronto.ca/ark:/61220/utsc11216>{: .text-break} (also
<https://n2t.net/ark:/61220/utsc11216>)

When looking for a persistent identifier solution, ARKs jumped to the top of
the list as a feature-rich, cost-effective solution. Their support for early
object development was particularly attractive, streamlining internal
processes for digital objects that are often touched by multiple internal
stakeholders before being published online.

The DSU sought a generalized solution for ARK minting and binding with a user
interface that allowed the librarians in the unit to “self serve” ARKs, update
their bindings to new locations, and see how frequently ARKs were being used.

ARKs-Service is a standalone PHP application adopting [the work of Akio
Sensei] who has integrated a MySQL database into [Noid4PHP] by Daniel
Berthereau. The application can be demoed using its Ansible Playbook and lets
users mint ARKs, and bind their server locations, as well as append a flexible
set of metadata (defined and extensible through a spreadsheet). ARKs-Service
supports both the older and new ARK specification, and the DSU plans for
future enhancements such as the inclusion of persistence statements.

Videos and documentation for deployment and use, as well as the open source
codebase (BSD 2-Clause License), are available at
<https://github.com/digitalutsc/arks-service>{: .text-break}.

You can read more about the ARKs-Service application in the Code4lib article
at <https://journal.code4lib.org/articles/16774>{: .text-break}.

Github pull requests and issues are welcomed! Potential collaborators and
users can also reach out at <dsu.utsc@utoronto.ca>.

[Digital Scholarship Unit (DSU)]: https://digital.utsc.utoronto.ca/
[1]: ../../assets/images//posts/2022-11-17-new-arks-service-from-the-university-of-toronto-scarborough-library/lake_harbour.png
[Islandora,]: https://www.islandora.ca/
[2]: ../../assets/images//posts/2022-11-17-new-arks-service-from-the-university-of-toronto-scarborough-library/gazebo_trees.png
[the work of Akio Sensei]: https://github.com/AkioUnity/Noid4Php
[Noid4PHP]: https://github.com/Daniel-KM/Noid4Php
