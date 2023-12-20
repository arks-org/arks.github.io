---
title: Frequently Asked Questions and Answers about ARK Shoulders
permalink: /about/ark-shoulders-faq/
pid: 500
date: 2020-09-22T10:04:00+00:00
published: true
---

Imported from LYRASIS confluence wiki Dec 2023.

<!--more-->

    * [How can I give feedback on this document?](#how-can-i-give-feedback-on-this-document?)
    * [What is a "shoulder"?](#what-is-a-"shoulder"?)



### How can I give feedback on this document?
By sending an email to the ARK mailing list, [https://groups.google.com/forum/#!forum/arks-forum](https://groups.google.com/forum/#!forum/arks-forum), or contacting us as described on the [communications page](https://wiki.lyrasis.org/display/ARKs/Communications).


### What is a "shoulder"?
To understand this FAQ you should first read this [introduction to shoulders](https://wiki.lyrasis.org/display/ARKs/ARK+Identifiers+FAQ#ARKIdentifiersFAQ-shoulders). Briefly, a  _shoulder_  is a sub-[namespace](https://wiki.lyrasis.org/pages/viewpage.action?pageId=131533174#ARKIdentifiersFAQ-namespaces) under a NAAN. This sub-namespace is identified by a short, fixed  alphanumeric extension to the NAAN. For example, in

[ark:/12345 **/x5** wf6789/c2/s4.pdf](http://ark/12345/x5wf6789/c2/s4.pdf)

the shoulder, /x5, extends the NAAN, 12345.

### How do I format a shoulder?
Start with your NAAN and decide on a short, fixed extension that you will add to it. The extension should


* start with one or more lowercase letters,
* end with a digit (non-zero preferred), and
* contain no vowels or the letter 'l' (ell).

Some more detail is given in response to the next question.

### Why is there no "/" to mark the end of a shoulder?
Many people make the initial mistake of adding a "/" between the end of the shoulder and the rest of the ARK, for example,

[ark:/12345/x5/wf6789/c2/s4.pdf

](http://ark/12345/x5/wf6789/c2/s4.pdf)             ^ WRONG![](http://ark/12345/x5/wf6789/c2/s4.pdf)

It's natural to want to visually mark the shoulder's end, but it's prohibited by ARK rules. 

Why? The reason is that adding a "/" after "/x5" makes two false assertions:


1. that ark:/12345/x5 also names an actual object, and
1. that the original object (ark:/12345/x5/wf6789/c2/s4.pdf) is contained in it. 

Adding a "/" might make the shoulder boundary obvious to in-house ARK administrators, but recall that they are trained specialists. The end user has no business knowing your internal operational details, and if they did you would risk their trying to hold you to account for their inferences (eg, about consistent support levels across objects sharing the apparent containing object). Less transparency about administrative structure hides messy details and can save you user-support time in the end.

In fact, in-house ARK administrators always know where the shoulder ends, provided it was chosen using the "first-digit convention". A  _primordinal shoulder_  is a sequence of one or more [betanumeric](https://wiki.lyrasis.org/display/ARKs/ARK+Identifiers+FAQ#ARKIdentifiersFAQ-betanumeric) characters ending in a digit. This means that the shoulder is all letters (often just one) after the NAAN up to and including the first digit encountered after the NAAN. Another advantage of primordinal shoulders is that there is an infinite number of them possible under any NAAN.

### How do I implement a shoulder?
There are different ways to implement a shoulder. Fundamentally, a shoulder is the deliberate practice of assigning ARKs that start with a particular extension to a NAAN. You could implement two shoulders simply by assigning ARKs beginning ark:/12345/x8 only to apples and ARKs beginning ark:/12345/x9 only to oranges.

If you use a service that stores ARKs in the [N2T.net](https://n2t.net) resolver, such as [ezid.cdlib.org](https://ezid.cdlib.org), then you can supplement that practice in two different ways. First, you could take advantage of N2T's [suffix passthrough](https://ezid.cdlib.org/learn/suffix_passthrough) feature by creating a short ARK, such as [ark:/99152/p0](http://n2t.net/ark:/99152/p0), that looks and acts like a shoulder. To make it work, it suffices for that ARK to redirect to a server URL that can handle all the ARKs on that shoulder (eg, the Smithsonian does this), and you wouldn't have to store or manage any other ARKs on that shoulder at N2T. Second, the EZID service (and perhaps others), associates a shoulder with a minter service and an API access point.

A completely different kind of shoulder "creation" step is needed to implement a shoulder under one of the few  _shared_  NAANs (below).

### Is there a quick way to get started creating test ARKs?
Yes. Instead of reserving a 99999 shoulder, if your organization already has its own NAAN, you can immediately create and use a "quick test ARK". This is an ARK that starts with ark:/99999/9NNNNN_, where NNNNN represents the NAAN (preceded by '9' and followed by '_'). There is no need to register a quick test namespace since it is automatically set aside for each NAAN. As with any prefix, there is an infinite number of possible test ARKs in each NAAN's quick test namespace. Two versions of an example quick test ARK belonging to the BnF (NAAN 12148) are

https://ark.bnf.fr/ark:/99999/912148_testxyz

   https://n2t.net/ark:/99999/912148_testxyz

Note that N2T.net is configured to forward any quick test ARK it receives (second version above) to the appropriate local resolver (first version).

### How do I request or make changes to a shoulder under a shared NAAN?
As mentioned, to implement a shoulder under your  _own_  NAAN requires no special request. To implement or change a shoulder under a  _shared_  NAAN, however, requires getting into the [shared NAAN shoulders registry](https://n2t.net/e/pub/shoulder_registry.txt), which means filling out an [online shoulder form](https://n2t.net/e/shoulder_request). For security purposes requests are processed manually. Example reasons for a change may include


* notifying [N2T](https://wiki.lyrasis.org/pages/viewpage.action?pageId=131533174#ARKIdentifiersFAQ-n2t) of a change in your organization's contact person or resolver URL,
* updating your organization's name assignment policy ([sample policy](http://ark.bnf.fr/ark:/12148/bpt6k2102478.policy)),
* requesting an additional shoulder, eg, to support a significant new body of ARKs or new organizational division, and
* transitioning your shoulder to another organization that will carry on your work and future use of your shoulder.

Like NAANs, shoulders under shared NAANs are portable. If your organization transitions into or out of a vendor relationship, there is no impediment to taking your shoulder with you.















*****

[[category.storage-team]] 
[[category.confluence]] 
