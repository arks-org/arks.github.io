---
title: Testing ARKs with N2T
permalink: /about/testing-arks/
pid: 827
date: 2021-01-23T23:09:05+00:00
published: true
---

ARK Testing: Best Practices. Delete test ARKs regularly. Quick test ARKs with
your NAAN: ark:99999/9NNNNN\_. Shared NAAN 99999 for testing; list in
registry for N2T resolution.

<!--more-->

Test ARKs should be deleted regularly or else users will get used to them
being there and they may become attached to them. The longer an identifier is
in place the harder it can be to withdraw it. For example, the EZID system
deletes test ARKs older than about two weeks. Duration of any ARK should be
discoverable from its persistence statement, which is what the “??” inflection
is designed to return.

There are two ways to create test ARKs.

## 1. Test with your own NAAN

If your organization already has its own NAAN, you can immediately create and
use a “quick test ARK”. This is an ARK that starts with ark:99999/9NNNNN\_,
where NNNNN represents the NAAN (preceded by ‘9’ and followed by ‘\_’). There
is no need to register a quick test namespace since it is automatically set
aside for each NAAN. As with any prefix, there is an infinite number of
possible test ARKs in each NAAN’s quick test namespace. Here are two versions
of an example quick test ARK belonging to the BnF (NAAN 12148):

       https://ark.bnf.fr/ark:99999/912148_testxyz
          https://n2t.net/ark:99999/912148_testxyz
{: .bg-secondary-subtle }

Note that N2T.net is configured to forward any quick test ARK it receives
(second version above) to the appropriate local resolver (first version).

## 2. Request a test shoulder under a shared NAAN

As mentioned, to implement a shoulder under your *own* NAAN requires no
special request, but the drawback is that recipients have no way of looking at
an ARK minted on your test shoulder and knowing that it is a test ARK. But
they can tell if the shoulder is under the *shared* NAAN, 99999, which is
well-known for being reserved for testing. So if you need a shoulder under
this shared NAAN, and if you want N2T.net to resolve it, you would need to get
it listed in the [shared NAAN shoulders registry]. That means filling out an
[online shoulder form].

[shared NAAN shoulders registry]: https://n2t.net/e/pub/shoulder_registry.txt
[online shoulder form]: https://n2t.net/e/shoulder_request
