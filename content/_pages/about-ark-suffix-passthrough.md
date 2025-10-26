---
title: Suffix Passthrough
permalink: /about/ark-suffix-passthrough/
pid: 798
date: 2025-10-14
published: true
---

The suffix passthrough feature in a resolver system allows one ARK
registration to support resolution of millions of different ARKs
that extend that registered ARK with suffixes.

<!--more-->

Suffix Passthrough (SPT) is a feature that lets you add any suffix to an
identifier, and when a user selects ("clicks on") the identifier, the suffix is
added to the end of the identifier's location (target) URL. It dramatically
reduces the maintenance burden by permitting one identifier to stand in for
many identifiers.

The transformation of an identifier into its final location URL is done by
a web server called a resolver, and the transformation is called resolution.
Typically a web browser uses the resolver to find the final location URL, which
it then displays in its location bar. The SPT feature can only be used when
ARKs are served by local resolvers that implement it. For example, it is
available to all institutions (and the general public interacting with their
ARKs) who get resolver services from
[EZID](https://ezid.cdlib.org) or from services built on the
[arklet-frick](https://github.com/squidgetx/arklet-frick/tree/master) code
base. This includes the Smithsonian Institution, the Frick Collection,
and the [WACREN](https://pidslink.wacren.net) network.

Basically, Suffix Passthrough makes every ARK the root of its own "namespace".
Any user-added suffix, which is a common way to form sub-object identifiers,
will be passed through to the registered target object. For example, a dataset
with a million component parts and just this one "ancestor" ARK,

    https://n2t.net/ark:12345/x98765

would effectively allow access to a million ARKs, but only require you to
manage the ancestor ARK. Those sub-object ARKs might look like: :

    https://n2t.net/ark:12345/x98765/study1/location1/day1.cs
    https://n2t.net/ark:12345/x98765/study1/location3/day19.cs
     ...
    https://n2t.net/ark:12345/x98765/study92/location18/day96.xlsx

![][1]{: .img-thumbnail .img-responsive fetchpriority="high" height="769" loading="eager" width="824" }

When a user clicks on one of those ARKs, it is submitted to N2T, which sees
that it is forwarded to the local resolver. Failing to find it stored, the
local resolver scans scans starting from the end of the user-supplied ARK
string and stops at the first ancestor ARK that is stored (registered) in
the resolver.

The part that was scanned over, stretching from the first registered ancestor
ARK to the end of the original string, comprises the suffix.

    https://n2t.net/ark:12345/x98765/study92/location18/day96.xlsx
    \______________________________/\____________________________/
              ancestor ARK                      suffix

Then it redirects the user's browser to the ancestor's target URL,
appending the suffix that it scanned. So if the ancestor ARK's target
was, :

    https://n2t.net/ark:12345/x98765 --> https://datazoo.example.com/carbon288
    \______________________________/     \___________________________________/
           ancestor ARK                        ancestor ARK's target URL

the user would be (hypothetically) redirected to :

    https://datazoo.example.com/carbon288/study92/location18/day96.xlsx
    \___________________________________/\____________________________/
           ancestor's target URL                    suffix

Note that SPT is only useful when the target server can respond to the
suffixes it receives. For example, you would not instruct users how to
add suffixes to the above ARK unless the target server was prepared to
provide access to its one million sub-objects. Fortunately, SPT is easy to
illustrate in some cases, such as when the target server extends
resource names with query strings or ordinary URL paths.

**Rule:** *if identifier A has target T, suffix passthrough means the
extended identifier A/X has target T/X.*

Using more words, for an identifier A stored in N2T that has the target
URL T, if you add a suffix X to A and resolve (eg, click on) the URL
A/X, you will be redirected to the URL T/X.

Some limitations and exceptions apply. For example, scanning stops when
the NAAN (the number directly after the "ark:") is reached.

## Suffix Passthrough Examples

You can see SPT in action by clicking on the extended ARKs below. These
are "ARKs" (for illustration purposes only, not long-term stable) that
are not stored in the local resolver, but are formed by adding a suffix to
an ARK that is stored.

Example 1. One stored ARK standing in for several CDL service page
"ARKs".

- Stored: ark:12345/fk1234
- Its target URL: <https://www.cdlib.org/services>
- An extended ARK: <https://n2t.net/ark:12345/fk1234/uc3/ezid/>

Example 2. One stored ARK standing in for any number of Wikipedia
article "ARKs".

- Stored: ark:12345/fk1235
- Its target URL: <https://en.wikipedia.org/wiki>
- An extended ARK:
  <https://n2t.net/ark:12345/fk1235/Persistent_identifier>

Example 3. One stored ARK standing in for any number of internet search
"ARKs".

- Stored: ark:12345/fk3
- Its target URL: <https://www.google.com/#q=>
- Extended ARK: <https://n2t.net/ark:12345/fk3pqrst>

You can experiment easily by pasting this stored ARK, :

    https://n2t.net/ark:12345/fk3

into your browser's location field and appending (no spaces) a "search
term" suffix of your choice.

[1]: {{ site.baseurl }}/assets/images/share/learn_spt_in_action.gif
