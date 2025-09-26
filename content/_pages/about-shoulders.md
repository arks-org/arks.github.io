---
title: "ARK shoulders: Do’s and Don’ts"
permalink: /about/shoulders/
pid: 825
date: 2021-01-23T23:07:47+00:00
published: true
---

ARK Shoulder Selection: Best Practices. Choose short, unique extension with
lowercase letters and ending digit. Avoid '/', ensure compliance.
Implementation options discussed.

<!--more-->

In selecting a shoulder format, do start with your NAAN and decide on a short,
fixed extension that you will add to it. The extension should

-   start with one or more lowercase letters,
-   end with a digit (non-zero preferred), and
-   contain no vowels or the letter ‘l’ (ell).

Many people make the initial mistake of adding a “/” between the end of the
shoulder and the rest of the ARK, for example,

       ark:12345/x5/wf6789/c2/s4.pdf
                   ^ WRONG!
{: .bg-secondary-subtle }

Don’t do that! It’s natural to want to visually mark the shoulder’s end, but
it’s prohibited by ARK rules.

Why? The reason is that adding a “/” after “/x5” makes two false assertions:

1.  that ark:12345/x5 also names an actual object, and
2.  that the original object (ark:12345/x5/wf6789/c2/s4.pdf) is contained in it.

Adding a “/” might make the shoulder boundary obvious to in-house ARK
administrators, but recall that they are trained specialists. The end user has
no business knowing your internal operational details, and if they did you
would risk their trying to hold you to account for their inferences (eg, about
consistent support levels across objects sharing the apparent containing
object). Less transparency about administrative structure hides messy details
and can save you user-support time in the end.

In fact, in-house ARK administrators always know where the shoulder ends,
provided it was chosen using the “first-digit convention”. A *primordinal
shoulder* is a sequence of one or more betanumeric characters (defined [here])
ending in a digit. This means that the shoulder is all letters (often just
one) after the NAAN up to and including the first digit encountered after the
NAAN. Another advantage of primordinal shoulders is that there is an infinite
number of them possible under any NAAN.

## Implementing shoulders

There are different ways to implement a shoulder. Fundamentally, a shoulder is
the deliberate practice of assigning ARKs that start with a particular
extension to a NAAN. You could implement two shoulders simply by assigning
ARKs beginning ark:12345/x8 only to apples and ARKs beginning ark:12345/x9
only to oranges.

If you use a service that stores ARKs in the N2T.net resolver, such as
[ezid.cdlib.org], then you can supplement that practice in two different ways.
First, you could take advantage of N2T’s [suffix passthrough] feature by
creating a short ARK, such as [ark:99152/p0], that looks and acts like a
shoulder. To make it work, it suffices for that ARK to redirect to a server
URL that can handle all the ARKs on that shoulder (eg, the Smithsonian does
this), and you wouldn’t have to store or manage any other ARKs on that
shoulder at N2T. Second, the EZID service (and perhaps others), associates a
shoulder with a minter service and an API access point.

A completely different kind of shoulder “creation” step is needed to implement
a shoulder under one of the few shared NAANs (described under [namespaces]).

[here]: about-running-minters-and-resolvers.md
[ezid.cdlib.org]: https://ezid.cdlib.org/
[suffix passthrough]: https://n2t.net/e/suffix_passthrough.html
[ark:99152/p0]: https://n2t.net/ark:99152/p0
[namespaces]: about-ark-namespaces.md
