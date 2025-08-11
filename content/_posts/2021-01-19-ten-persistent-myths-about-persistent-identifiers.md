---
title: Ten persistent myths about persistent identifiers
redirect_from: blog/ten-persistent-myths-about-persistent-identifiers/
pid: 719
authors:
  - john-kunze
date: 2021-01-19T21:22:42+00:00
published: true
image:
  url: "/assets/images/posts/2021-01-19-ten-persistent-myths-about-persistent-identifiers/nessy.jpg"
---

Persistent identifier (PID) myths clarified: PIDs aren't access guarantees;
they can break, need maintenance; ARKs challenge norms with flexibility.

<!--more-->

![][1]{: .img-thumbnail .img-responsive fetchpriority="high" height="169" loading="eager" width="300"}

\[*Slightly expanded from a Twitter thread published 2018-08-24.*\] Here is a
list of 10 persistent myths about persistent identifiers (PIDs), whether of
type ARK, DOI, Handle, URN, PURL, or “Cool URL”, based on direct experience
managing EZID.cdlib.org and N2T.net.

**Myth 1**: PIDs guarantee access. Get real. All PID services run on evolving
software and hardware that no vendor warranties. How could any organization
change that, let alone for-profit publishers whose mission does not include
preservation or non-profit archives and libraries whose budgets have been
shrinking for decades?

**Myth 2**: PIDs rarely break. Nonsense. Millions of PIDs are broken, regardless
of type. All PID types burden archival organizations with the heavy work of
remaining solvent, not losing things, and updating redirection tables.

**Myth 3**: PIDs must not be URLs. What a crock. PIDs not carried inside
clickable URLs are irrelevant or only of academic interest.

**Myth 4**: PIDs are opaque and are never used as vanity URLs. Nope. Tons of
PIDs contain transient organizational names and acronyms. It is hard for most
of us to accept the inevitable, that one’s own brand *will* become defunct,
perhaps even poisonous. Embedding brands in poorly selected URL hostnames made
many URLs notoriously fragile and erroneously led many people to blame URLs in
general.

**Myth 5**: PIDs, unlike URLs, are not locations. Wrong. No URL or clickable PID
is a location. It’s true that the URL hostname, where resolution starts, can
be a weak point. But just because it contains a hostname, no expert can look
at a URL and tell where the content will be assembled, via what redirect
chain, DNS routing indirection, proxies, etc.

**Myth 6**: PIDs aren’t needed, so just use “Cool URLs”. Sorry. How do you know
a URL is or even might be cool? By one account, the average URL breaks in 44
days, and most URLs were never meant to persist. Assigning a PID tells people
there’s hope.

**Myth 7**: PID resolver technology is hard. Fiddlesticks. Global resolvers have
been simple to build since the 1990’s: table lookup plus HTTP redirection plus
$20 a year to rent a hostname. Every URL shortener, for example, is an
identifier resolver.

**Myth 8**: PIDs require vendor lock in. Poppycock. No database system
discriminates among identifier types unless the service provider directs it to
discriminate.

**Myth 9**: PIDs must be centralized. False. Any PID with a globally unique core
after the URL hostname is persistable. In fact if it cannot be served by other
hosts, it cannot persist since its fate is tied to one host. No hostname or
protocol lasts forever.

**Myth 10**: PIDs should be free. No. While you can choose a PID type that
avoids locking you in and charging you for the right to create PIDs, every PID
that you maintain represents a service commitment that must be paid for with
at least some sweat equity.

**Punchline**: ARK identifiers don’t fit the PID mold — no fees, flexible
metadata, and [decentralized]. ARKs are offered, not mandated, via the
N2T.net resolver, which supports 700+ other types of identifier.

[1]: {{ page.image.url | absolute_url }}
[decentralized]: https://hacks.mozilla.org/2018/07/introducing-the-d-web/
