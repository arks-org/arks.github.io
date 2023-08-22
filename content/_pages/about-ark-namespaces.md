---
title: ARK namespaces and sub-namespaces
type: article
permalink: /about/ark-namespaces/
pid: 823
original_date: 2021-01-23T23:06:30+00:00
published: true
---

## ARK namespace overview

ARK namespaces work much the same way that all namespaces work. Given a prefix
associated with a namespace, this prefix can be “extended” (adding characters
to the end of it) to create a new sub-namespace (directly under it) associated
with the extended prefix. If the extended prefixes don’t conflict, nor will
the names in the associated namespaces. There can be a namespace associated
with any prefix you can think of, each with a potentially infinite number of
names (ARKs) that start with it.

ARK namespaces begin with the Name Assigning Authority Number (NAAN), and can
be further extended by a shoulder.

| ***Set of all ARKs starting*** | ***Associated namespace***             | ***Example ARK in that namespace*** |
|--------------------------------|----------------------------------------|-------------------------------------|
| ark:/                          | All ARKs                               | ark:/99999/fk4gt2m                  |
| ark:/12345/                    | ARKs under the NAAN 12345              | ark:/12345/p987654                  |
| ark:/12345/x5                  | ARKs under the 12345/x5 *shoulder*     | ark:/12345/x5wf6789                 |
| ark:/12345/x5wf6789/           | ARKs under the 12345/x5wf6789 *object* | ark:/12345/x5wf6789/c2/s4.pdf       |
{: .table .table-striped .table-hover }

The above table shows examples of four common namespace/sub-namespace levels.
The first is for all ARKs and the second is for all ARKs under ark:12345. The
third is the shoulder concept, described further below, which is the next
subdivision under the NAAN; note that it has no “/” after it.

The fourth, a complete ARK-as-prefix example, shows that an object ARK is
itself also a namespace, with an infinite number of “sub-ARKs” that could
descend from it to name object parts and variants. Creating new namespaces to
avoid naming conflicts is an ancient practice. For example, a family may refer
to someone as Sam, the community as Sam Smith, the government as Sam Smith,
4321 Main Street, Springfield, and history as Sam Smith, 4321 Main Street,
Springfield, 1888-1997.

## ARK shoulders

Shoulders are short, consistent strings that allow you to divide your ARKs
across autonomous projects or divisions. Even if an organization initially
only needs ARKs for one project, plans may change. Different internal
departments may need ARKs for their own particular use cases. If new needs and
use cases ARKs arise later, setting aside a new shoulder for each new project
or division makes it easy to ensure that independent assignment streams –
present, past, or future – won’t conflict with each other, thanks to
non-overlapping namespaces.

Technically, a *shoulder* is a sub-namespace under a NAAN. It is the set all
ARKs starting with a short, fixed extension to the NAAN. For example, in

       ark:/12345/x5wf6789/c2/s4.pdf
{: .bg-secondary-subtle }

the shoulder, /x5, extends the NAAN, 12345. The short designation, /x5, isn’t
very unique, so the fully qualified, globally unique designation should be
used (for example, ark:/12345/x5). There is [more information about
implementing shoulders].

## ARK shoulder as namespace

In the classic namespace tradition, the shoulder is the set of all possible
ARKs starting with the shoulder name. Our use of this term is borrowed from
locksmithing, which understands sets of keys to be defined by fixed, unvarying
“shoulders” that precede the varying “blades” (shapes that differ among keys
sharing the same shoulder) that follow it.

![][1]{: .img-thumbnail .img-fluid loading="lazy" }

Shoulders help organize a NAAN namespace for the long term. Just because a
namespace contains an infinite number of possible ARKs does not mean that
finding an unassigned ARK is easy, especially when over time there are – or
were, or may be – different independent ARK assignment operations under it.
Just as the ARK community sets aside organizations’ NAAN namespaces, each
organization is encouraged to set aside shoulder sub-namespaces. If you don’t
use shoulders from the beginning, even for one simple stream of assignments,
you risk creating mild but permanent chaos in your NAAN namespace, and you may
end up requesting an additional NAAN (which is discouraged) for future
assignment streams.

A shoulder is analogous to a guest room in your house. Imagine a colleague,
Sally, who takes in a long term lodger, Larry. Although her home is extremely
spacious (in fact it is infinite), Sally complains that Larry leaves things
permanently lying around in random spots all over the house: his coat on the
kitchen chair, glasses on the dining table, book on Sally’s desk, slippers
next to the sofa, coffee cup on the bathroom sink, etc. By the terms of his
lodging agreement, Larry’s things, once placed, cannot be moved. But Sally,
who also needs places for her things and might later take on new lodgers, is
stuck forever noticing and trying not to disturb Larry’s stuff in parts of the
house that she uses often.

Understanding Sally’s troubles, you might vow to require any guest of yours to
agree to place things only in their room (their shoulder). Under such an
agreement, not only would Sally’s home have been minimally disturbed by
Larry’s stuff, but also she would be able to take on any number of new lodgers
(new assigning operations) under similar agreements.

So shoulders allow ARK assignment under a NAAN to be delegated to autonomous
projects or divisions, just as NAANs do under the overall ARK namespace. Even
if an organization initially only needs to create ARKs for one project, plans
may change. If other needs for ARKs arise later, setting aside a new shoulder
for each new project or division makes it easy to ensure that independent
assignment streams – present, past, or future – won’t conflict with each
other, thanks to non-overlapping namespaces. (Shoulders can also ease the
[namespace splitting problem].) If you would like to learn more about
shoulders, please see the brief [ARK Shoulders FAQ].

## Shared NAANs

There are four *shared* NAANs with special semantics that you might want to
take advantage of. Normally, long term ARKs and their NAANs should be opaque,
revealing little about what they’re assigned to, but the semantics in the
table below are considered so immutable as to not risk their longevity. Each
shared NAAN has particular connotations that software and people with enough
training can recognize and benefit from, and this offers some relief from the
challenge of using opaque identifiers.

Shared NAANs are not owned by any one organization. In order to create ARKs
without conflict under a shared NAAN requires, as you might imagine, reserving
a shoulder, and that requires filling out an online [form to request a
shoulder under a shared NAAN] (please don’t use this for shoulders under your
own, non-shared NAAN).

<table class="table table-hover table-striped">
<tr>
<th><strong>Shared NAAN <em>meaning</em></strong></th>
<th><strong>Purpose, meaning, or connotation of ARKs with this NAAN.</strong><br />
<strong>(It’s ok for these NAANs to be <em>non-opaque</em> since their meanings are immutable.)</strong></th>
<th><strong>Expect to resolve?</strong></th>
<th><strong>OK for long term reference?</strong></th>
</tr>
<tr>
<td><strong>12345</strong> <em>examples</em></td>
<td>Example ARKs appearing in documentation. They might resolve, but no link checker need be concerned if they don’t. They should not be considered viable for long term reference.</td>
<td>maybe</td>
<td>no</td>
</tr>
<tr>
<td><strong>99152</strong> <em>terms</em></td>
<td>ARKs for controlled vocabulary and ontology terms, such as metadata element names and pick-list values. They should resolve to term definitions and are suitable for long term reference.</td>
<td>yes</td>
<td>yes</td>
</tr>
<tr>
<td><strong>99166</strong> <em>agents</em></td>
<td>ARKs for people, groups, and institutions as “agents” (actors, such as creators, contributors, publishers, performers, etc). They should resolve to agent definitions and are suitable for long term reference.</td>
<td>yes</td>
<td>yes</td>
</tr>
<tr>
<td><strong>99999</strong> <em>test ids</em></td>
<td>ARKs for test, development, or experimental purposes, often at scale. They might resolve, but no link checker need be concerned if they don’t. They should not be considered viable for long term reference.</td>
<td>maybe</td>
<td>no</td>
</tr>
</table>

The 99999 and 12345 ARKs (“non-real”) are especially useful if you are
responsible for reviewing broken link reports. Unless you know otherwise,
errors for ARKs with these NAANs can be ignored. This can save lots of wasted
effort since, despite providers’ best efforts, such non-real ARKs frequently
“escape into the wild” for all to see. Recipients (eg, people and link
checkers) that would normally be concerned with broken links have only to
recognize these two special NAANs in order to avoid being distracted by them.
(Note that the non-real semantics remain even if the things don’t exist.)

## The NAAN’s role in N2T ARK resolution

NAANs also play a key role in resolution. For example, if the N2T.net resolver
cannot find an incoming ARK in its database, it looks at the incoming NAAN and
redirects the ARK to the local resolver registered with the NAAN. Any local
resolver could be configured to return the favor for incoming ARKs containing
NAANs that it doesn’t know about, simply by redirecting them to N2T.

## How to make changes to a NAAN

Because the information in the NAAN registry can play a significant role in
resolving your ARKs, you want to keep it up to date any time there is a change
to your local resolver. You can request a change to the registry entry for a
NAAN related to your organization by filling out the same [online form] used
for requesting a new NAAN. For security purposes requests are processed
manually. Example reasons for a change may include

-   notifying N2T of a change in your organization’s contact person or resolver URL,
-   updating your organization’s name assignment policy ([sample policy]),
-   requesting an additional NAAN, eg, to support a significant new body of
    ARKs or new organizational division, and
-   transitioning your NAAN to another organization that will carry on your
    work and future use of your NAAN.

NAANs are portable. If your organization transitions into or out of a vendor
relationship, there is no impediment to taking your NAAN with you.

[more information about implementing shoulders]: /about/shoulders
[1]: https://lh6.googleusercontent.com/4P2TlDWgXCj_wBahPf2UDHXeIbebp_8BTHlDccb0HGedk6wsqKLJCyWWXPmCN_j1zl_S_YjBO94rY7f80fUZNzaVkGy3-Dq28o9bLpD3tjVap0_b1VYFgOofuEOGwEgogvLtOAHY
[namespace splitting problem]: https://n2t.net/e/n2t_vision.html
[ARK Shoulders FAQ]: https://wiki.lyrasis.org/display/ARKs/ARK+Shoulders+FAQ
[form to request a shoulder under a shared NAAN]: https://n2t.net/e/shoulder_request
[online form]: https://n2t.net/e/naan_request
[sample policy]: http://ark.bnf.fr/ark:/12148/bpt6k2102478.policy
