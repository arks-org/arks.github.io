---
title: Upcoming changes to the ARK specification
redirect_from: blog/upcoming-changes-to-the-ark-specification/
pid: 1341
authors:
  - ark-alliance
date: 2022-03-18T20:07:27+00:00
published: true
---

The ARK Alliance’s Outreach and Technical Working Groups will develop a
community plan to transition from the older 2013 ARK spec to the current
2022 ARK spec.

<!--more-->

Since 2019 the ARK Alliance (then known as ARKs-in-the-Open) has been
reviewing the ARK specification (“spec”) in light of the [ARK Experts Day
recommendations] coming from the 2018 ARK Summit in Paris. Accordingly, the
latest ARK spec contains minor changes, all of which are backwards compatible
and therefore won’t disrupt the functioning of any previously published ARKs.
The most visible change is that implementers will soon be encouraged to
publish new ARKs with just “ark:” instead of “ark:/”. For example,

-   Old recommendation `https://n2t.net/ark:/12345/x9876`
-   New recommendation `https://n2t.net/ark:12345/x9876`

Either form will always be valid, but the new form will become recommended.
Other small changes include better documentation of current terminology and
increased flexibility in the way that the ARK Alliance registers new NAANs.

The overall impact should be minimal, mostly affecting implementations that
currently need to *validate externally produced ARKs.* Note that some
implementations, such as N2T.net and archive.org, already accept both new- and
old-form ARKs. Starting immediately, it is safe for any organization to begin
accepting both forms. Over the long term, organizations that deal with ARKs
will be expected to accept both forms. Thus all previously published ARKs
should always be fully supported.

The ARK Alliance’s [Outreach] and [Technical] Working Groups will develop a
community plan to transition from the [older 2013 ARK spec] to the [current
2022 ARK spec] (if you are interested, here are the [detailed differences]).
When it is ready, the transition plan will be publicized via the usual ARK
Alliance channels.

[ARK Experts Day recommendations]: https://wiki.lyrasis.org/pages/viewpage.action?pageId=112525432
[Outreach]: https://wiki.lyrasis.org/display/ARKs/Outreach+Working+Group
[Technical]: https://wiki.lyrasis.org/display/ARKs/Technical+Working+Group
[older 2013 ARK spec]: https://datatracker.ietf.org/doc/draft-kunze-ark/18/
[current 2022 ARK spec]: https://datatracker.ietf.org/doc/draft-kunze-ark/
[detailed differences]: https://www.ietf.org/rfcdiff?url1=draft-kunze-ark-18.txt&url2=draft-kunze-ark-34.txt
