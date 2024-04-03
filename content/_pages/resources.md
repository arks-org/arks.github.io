---
title: Resources
permalink: /resources/
pid: 243
date: 2020-11-23T05:54:54+00:00
published: true
---

A helpful list of resources, documentation, and services.

<!--more-->

-   [NAAN form] to *get started* creating ARKs or to *update* your existing
    NAAN

## Documentation

<div class="row" markdown=1>

-   [The ARK Identifier Scheme (v.18)], technical specification
-   [Current and evolving specifications]
-   *Towards Electronic Persistence Using ARK Identifiers*, 2003-07, [PDF]
-   [General identifier concepts and conventions]
-   Archival Resource Key [wikipedia]
{: .col }

<div class="col" markdown=1>
![][1]{: .img-thumbnail .img-fluid .d-block fetchpriority="high" loading="eager"}

The Mazarine Library, Paris, which assigns ARKs under the NAAN 61562 (photo by
Marie-Lan Nguyen).
</div>

</div>


## Services

-   [ARKetype][]: ARKetype is an Archival Resource Key (ARK) allocation
    service managed by the Haute école de gestion de Genève which was
    initiated thanks to the funding from [swissuniversities].
-   [N2T.net] resolver: Name-to-Thing, a global resolver for ARKs and other
    identifiers. The service is currently hosted at the [CDL].

## Plug-ins and software

A non-exhaustive scan of open source software modules implementing ARK
services turned up this set of packages. Some may not be currently maintained.
To get your software listed please [let us know] about it.

-   [arklet][]: a Python Django application for minting, binding, and
    resolving ARKs, created by the Internet Archive
-   [Arklet-Frick][]: the Frick Collection's adaptation of the Internet Archive's arklet tool, with improved security and bugfixes, as well as 
    bulk operations, suffix passthrough, shoulder rules, extensive metadata, ?info and ?json endpoints, and more
-   [arknoid][]: docker application to simplify setting up and managing ARK
    minters
-   [Noid][]: (Nice Opaque Identifiers), original open source Perl software
    for minting and resolving ARKs on your own
-   [Pynoid][]: Python implementation of Noid
-   [Golang Noid][]: Golang/Docker implementation of Noid
-   [Ruby Noid][]: Ruby implementation of Noid
-   [PHP Noid][]: PHP implementation of Noid
-   [OJS Plug-in][]: ARK plug-in for the [Open Journal System (OJS)] of the
    Public Knowledge Project (similar to its DOI plug-in) that works with
    versions 3.1.X, 3.2.X, and 3.3.X, and with locales for the Spanish and
    English (more languages coming). Installation and configuration in English
    ([ARK Plugin Guide for OJS]) and Español ([Guia del Plugin ARK para OJS]).
-   [ArkAndNoid][] [“Omeka Classic”][ArkAndNoid]: module to create and manage
    ARKs for the Omeka Classic open source web-publishing platform
-   [ArkAndNoid][2] [“Omeka S”][2]: module to create and manage ARKs for the
    Omeka S open source web-publishing platform
-   [Archival][] [Resource Key Identifier Name Mapping][Archival]: module for
    Drupal which allows your Drupal site to act as a Name Mapping Authority
-   [EZID codebase][]: Provides a user interface to minting and resolving that
    enables you to become an ARK service provider (requires significant
    expertise to set up and run)
-   [N2T codebase][]: Picks up where Noid development left off; the code is in
    flux, requires significant expertise to set up and run, and consists of a
    generic Eggnog minting, binding, and resolution package plus an
    [N2T-admin] package; we are currently looking to create a next-generation
    ARK resolver

## Selected presentations

-   _Getting Started with ARK Persistent Identifiers (PIDs)_, 2024-03-31, recommended ARK (Archival Resource Key) tutorial for beginners. [video][17] (30 mins)
-   Brief Introduction to ARKs for GLAMs, 2023-08-03. [slides] (15 mins)
-   ARK Training, 2023-06-06, 3-hour tutorial from 2023 IIIF Annual
    Conference. [slides][3]
-   ARK Alliance Update and Three Use Cases, 2023-01-18, presentation. [video]
    (28 mins)
    -   [Introduction]
    -   [ARKs for physical samples]
    -   [ARKs for biomedical AI]
    -   [ARKs for vocabulary terms]
-   IIIF Community Call: Intersection of IIIF and ARKs, 2023-01-25, meeting.
    [video][4] (58 mins)
-   *Discoverability and future developments in the Louvre Museum’s
    collections portal*, 2022-12-13, Anne-Laure Huet and Benoît Deshayes,
    speaking at the French National Institute for Art History (INHA).
    [video][5] (19 mins, in French 🇫🇷)
-   *The ARK Alliance: 20 years, 850 institutions, 8.2 billion persistent
    identifiers*, 2021-10-22, presentation (English). [slides][6]
-   *ARKetype – Ask Me Anything*, 2021-01-27, presentation (English) plus
    interactive questions and answers (English, French, German). [video][7]
    (75 mins)
-   *INCIPIT: An ARK Allocation Service in Switzerland*, 2020-11-16, Julien
    Raemy. [video][8] (12 mins) Note (2021): this project is still known as
    INCIPIT but the service is now called ARKetype.
-   *ARKs in the Open: 3.2 billion Persistent Identifiers*, 2020-04-23, John
    Kunze, Bess Missell, Karen Hanson, Tom Creighton. [abstract] \| [video][9]
    (62 mins) \| [slides][10]
-   *Integrating ArchivesSpace and ARKs*, 2020-03-04, John Kunze, Seth Shaw,
    Christine di Bella. [abstract][11] \| [video][12] (60 mins) \|
    [slides][13]
-   *ARKs in the Open: community owned identifier infrastructure*, 2020-01-24,
    John Kunze. [slides][14]
-   *ARK Identifier Summit, National Library of France*, 2018-03-21, Sébastien
    Peyrard, John Kunze, Bertrand Caron, Nicolas Thouvenin, Roxana
    Maurer-Popistașu, Bruno Revellin, Delphine Jamet, Franck Bernardet, Adrien
    di Mascio, Guillaume Lory, Alexis Moisdon, Emmanuelle Bermès.
    [abstract][15] \| [collected videos] (5 hours, in French 🇫🇷)
-   *Keynote address at ARK Identifier Summit*, 2018-03-21, John Kunze. [video
    link] (45 mins, in French 🇫🇷) \| [English transcription]
-   *Using Archival Resource Keys (ARKs) for Persistent Identification*,
    2008-06-05, Mark Phillips. [slides][16]

[NAAN form]: https://goo.gl/forms/bmckLSPpbzpZ5dix1
[The ARK Identifier Scheme (v.18)]: ../assets/documents/2023/04/ark-18-arksorg.pdf
[Current and evolving specifications]: specs.md
[PDF]: https://n2t.net/e/Towards_Electronic_Persistence_Using_ARK_Identifiers.pdf
[General identifier concepts and conventions]: about-identifier-concepts-and-conventions.md
[wikipedia]: https://en.wikipedia.org/wiki/Archival_Resource_Key
[1]: ../assets/images/pages/resources/1089px-Salle_de_lecture_de_la_Bibliotheque_Mazarine_Paris_n1.jpg
[ARKetype]: https://www.arketype.ch/
[swissuniversities]: https://www.swissuniversities.ch
[N2T.net]: https://n2t-dev.n2t.net/
[CDL]: https://cdlib.org/
[let us know]: contact-us.md
[arklet]: https://github.com/internetarchive/arklet
[Arklet-Frick]: https://github.com/squidgetx/arklet-frick/tree/master
[arknoid]: https://github.com/jkunze/docker-arknoid
[Noid]: https://n2t.net/e/noid.html
[Pynoid]: https://github.com/no-reply/pynoid
[Golang Noid]: https://github.com/ndlib/noids
[Ruby Noid]: https://github.com/ruby-microservices/noid
[PHP Noid]: https://github.com/Daniel-KM/Noid4Php/blob/master/noid
[OJS Plug-in]: https://github.com/yasielpv/pkp-ark-pubid
[Open Journal System (OJS)]: https://pkp.sfu.ca/ojs/
[ARK Plugin Guide for OJS]: https://github.com/yasielpv/pkp-ark-pubid/files/8398101/ARK.plugin.guide.for.OJS.pdf
[Guia del Plugin ARK para OJS]: https://github.com/yasielpv/pkp-ark-pubid/files/8398100/Guia.del.plugin.ARK.para.OJS.pdf
[ArkAndNoid]: https://github.com/Daniel-KM/ArkAndNoid4Omeka
[2]: https://github.com/Daniel-KM/Omeka-S-module-Ark
[Archival]: https://www.drupal.org/project/ark/
[EZID codebase]: https://github.com/CDLUC3/ezid
[N2T codebase]: https://github.com/jkunze/n2t-eggnog
[N2T-admin]: https://github.com/jkunze/n2t-admin
[slides]: ../assets/documents/2023/08/ARK-intro-for-GLAMs-2023-slides-15-mins-version.pdf
[3]: ../assets/documents/2023/06/ARK-Training-Tutorial-IIIF-2023-slides.pdf
[video]: https://youtu.be/7HYYR0tGGcw
[Introduction]: https://youtu.be/7HYYR0tGGcw?t=0
[ARKs for physical samples]: https://youtu.be/7HYYR0tGGcw?t=259
[ARKs for biomedical AI]: https://youtu.be/7HYYR0tGGcw?t=542
[ARKs for vocabulary terms]: https://youtu.be/7HYYR0tGGcw?t=1351
[4]: https://www.youtube.com/watch?v=it5LA3VRXpE
[5]: https://www.youtube.com/watch?v=oYC3HHsb0Ks
[6]: https://www.slideshare.net/jakkbl/the-ark-alliance-20-years-850-institutions-82-billion-persistent-identifiers-20211022
[7]: https://vimeo.com/505177383
[8]: https://www.youtube.com/watch?v=giw9stetjy8&list=PLjev6DgUn5W-TOz3Aoli77tiT1T5HsIRa&index=61
[abstract]: https://www.cni.org/topics/identity-management/arks-in-the-open-3-2-billion-persistent-identifiers
[9]: https://vimeo.com/412227303
[10]: https://docs.google.com/presentation/d/1UoEb0O8IsLXWta46GLS0d3NjK-RJcVbP2DeleB2yTKU/edit?usp=sharing
[11]: https://archivesspace.org/archives/5930
[12]: https://youtu.be/Rt_tZHb1kiA
[13]: https://archivesspace.org/wp-content/uploads/2020/02/ARKs-and-ArchivesSpace-2020-03-04-webinar.pdf
[14]: https://wiki.lyrasis.org/download/attachments/90979116/aito.pdf?version=1&modificationDate=1548711589415&api=v2
[15]: https://www.cdlib.org/cdlinfo/2018/01/26/ark-identifier-summit-at-the-national-library-of-france-21-march-2018/
[collected videos]: https://www.bnf.fr/fr/sommet-international-ark-journee-detude-et-dechanges-sur-lidentifiant-ark-archival-resource-key
[video link]: https://www.youtube.com/watch?v=vYYYUIokwPM&t=134s
[English transcription]: ../assets/documents/2021/11/The-Covenant-of-the-ARK-en.pdf
[16]: https://digital.library.unt.edu/ark:/67531/metadc28359/
[17]: https://www.youtube.com/watch?v=-RkMGFCGRic
