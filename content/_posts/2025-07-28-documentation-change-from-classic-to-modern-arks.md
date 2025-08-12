---
title: "ARK documentation changing to show modern ARKs (ark:) by default instead of classic ARKs (ark:/)"
redirect_from: /blog/2025-07-28-documentation-change-from-classic-to-modern-arks/
pid: 553
authors:
  - ark-alliance
date: 2025-07-28
published: true
image:
  url: "/assets/images/posts/modern_classic_arks.png"
  title: "two identical golden arks as car hood ornaments, except the one in front (more modern) is lacking a bowsprit"
---

In late 2025 the ARK Alliance (arks.org) will convert its existing documentation and modify its communication practices to align with the modern form of ARKs, the most visible difference being removal of the slash ('/') at the end of "ark:/". Two ARKs that differ only in form are equivalent in perpetuity.

<!--more-->

<table style="width:100%; border:none; margin-top:30px; margin-bottom:10px;">
  <tr>
    <td style="width:30%; border:none; padding-right:55px;">
      <img src="{{ page.image.url | absolute_url }}"
        title="{{ page.image.title }}"
        style="width: 100%; height: auto;"
        fetchpriority="high"
        loading="eager">
    </td>
    <td style="width:70%; border:none; padding-right:20px; vertical-align:bottom;">
<p>
Over the month of September 2025 the ARK Alliance (ARKA) will convert its
existing documentation and modify its communication practices to align with the
modern form of ARKs used in the
<a href="https://www.ietf.org/archive/id/draft-kunze-ark-41.html">
ARK technical specification</a>
since 2019. The most visible difference, described in a
<a href="https://arks.org/news/2022-03-18-upcoming-changes-to-the-ark-specification/">
2022 blog post</a>,
is the removal of the slash ('/') at the end of "ark:/".
</p>
    </td>
  </tr>
</table>

<p>
Every modern form ARK
is, in perpetuity, considered equivalent to the same ARK in classic form. Thus
these two ARKs always refer to the same thing:
</p>

    https://digital.library.unt.edu/ark:67531/metadc28359     # modern form
    https://digital.library.unt.edu/ark:/67531/metadc28359    # classic form
{: .bg-secondary-subtle }

There’s nothing for ordinary ARK users to do. Since 2019, ARK implementers have been encouraged to accept both forms, and those that do so already will be completely unaffected by the upcoming documentation change. Those that do not yet accept both forms run a small risk, increasing over time, that some of their ARKs will appear to be broken.

The problem is that over time, ARKs published (issued) in classic form will get harvested by well-meaning aggregators and converted (normalized) into modern form for display to users. ARKs issued in modern form can also get converted into classic form. The general risk is that any published ARK is out in the wild where it may get converted to either form and will then appear to break (e.g., a 404 Not Found error) if the local resolver only accepts the form in which the ARK was issued. Even if the original ARK still works, the user experiencing an error due to a difference in form will tend to blame the local resolver or original ARK issuer.

## What implementers can do to minimize risk

ARK implementers are always free, in perpetuity, to store and manage ARKs in any way they wish, and the easiest way to accept ARKs in another form is to convert them on the way into the local resolver (server).

There is no single recipe, but for some common resolver implementations, a one-line change might be enough to make a server support both forms. In a technical glimpse of a simplified, hypothetical Apache server example, adding the question mark to this configuration line turns a server of classic ARKs into a server that accepts both forms:

    RewriteRule   ark:/?12345/(.*)   "/collection/$1"
    #                  ^ this '?' accepts both ark:/ and ark:
{: .bg-secondary-subtle }

On a technical level, tools that support classic ARKs should be changed as follows in order to support modern ARKs:

- accept the streamlined label “ark:” in addition to “ark:/”,
- remove the classic ARK 128 character length restriction,
- support a minimum of 255 characters for the Base Name and Qualifier,
- allow the ‘~’ character but disallow the ‘#’ character,
- add the “?info” inflection to request descriptive and permanence metadata,
- remove the classic ARK requirement that NAANs be 5-digit numbers,
- support a minimum of 16 characters for the NAAN, and
- allow the possibility of future NAANs to be strings of 1 or more betanumeric characters (digits and consonants minus the letter ‘l’); in the near future, however, new NAANs will continue to be 5-digit numbers.

Please see the [ARK technical specification](https://www.ietf.org/archive/id/draft-kunze-ark-41.html) for all details concerning modern ARKs.

## Conclusion

In summary, to avoid the small risk of published ARKs appearing to break when they come back in a different form, local resolver implementations that don’t already do so should start accepting incoming ARKs in both modern and classic forms. 

There is no special urgency to accept both forms, but the risks will increase as modern ARKs become more prevalent over time. If you have questions or concerns about this documentation change, please consider using the public email forums:

- arks-forum@googlegroups.com (English)
- arks-forum-fr@framalistes.org (French)
- arks-forum-ib@googlegroups.com (Spanish and Portuguese)
