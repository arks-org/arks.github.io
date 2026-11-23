---
title: ARK Resolver Rules
permalink: /about/ark-resolver-rules/
pid: 778
date: 2026.10.29T00:12:51+00:00
published: true
---

This article describes the form and function of the custom ARK resolver rule
that sits in each NAAN record and guides how incoming ARKs bearing that NAAN
will be constructed and redirected (forwarded) as target URLs. Template
variables permit construction of a target URL using selected parts of each
incoming ARK.

<!--more-->

{% include content/section.html do="start" color="cool" label="Why use ARKs" %}

This article describes the form and function of the custom ARK resolver rule
that sits in each NAAN record and guides how incoming ARKs bearing that NAAN
will be constructed and redirected (forwarded) as target URLs. Each incoming
ARK is redirected to a URL constructed according to the resolver rule found
under its NAAN record.

## Template variables

Template variables permit construction of each target URL using selected parts
of the incoming ARK. Each variable refers to a specific part.

Generally you do not need to use variables in your resolver rule.
Variables may help if your local resolver (website) platform cannot easily
process a full incoming ARK, in which case N2T.net can include just certain
parts of the ARK.  On the other hand, this is not an ideal long-term strategy
because it means your local resolver cannot serve incoming ARKs unless they
have been pre-processed, and that makes you more dependent on N2T.net.

When a template variable listed below appears in a resolver rule, it is
replaced by the corresponding part of the incoming ARK identifier.
For example, if the incoming ARK is

        https://n2t.net/ark:12345/x8rd9

then the variables refer to the following parts:

        ${prefix}   =  12345
        ${value}    =  x8rd9
        ${scheme}   =  ark
        ${content}  =  12345/x8rd9
        ${pid}      =  ark:12345/x8rd9

## Template examples

An example resolver rule using a template variable is

        https://ark.example.org/mystuff/${value}    # resolver rule

In this case, if the incoming ARK were

        https://n2t.net/ark:12345/x8rd9"            # incoming ARK

then the rule would construct this target URL for redirecting:

        https://ark.example.org/mystuff/x8rd9       # target URL

Most resolver rules don't use template variables, in which case the target URL
is constructed as if `${pid}` were appended to the rule
So, a bare resolver rule such as

        https://ark.example.org/mystuff/            # bare resolver rule

implicitly behaves as if the rule were

        https://ark.example.org/mystuff/${pid}      # implied resolver rule

{% include content/section.html do="end" %}
