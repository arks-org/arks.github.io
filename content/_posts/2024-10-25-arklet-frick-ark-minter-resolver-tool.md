### Arklet-frick: bringing ARKs from need to implementation at the Frick Collection

Authors: Jack O’Malley

In 2021, the Frick Collection announced that it would start assigning ARK
identifiers to assets in its digital collections and library catalog. The
decision came after a migration to a new ILS (integrated library system) and
the obsolescence of the old system's identifiers and permalinks. The breakdown
in both public links and systems interoperability spurred the Frick Collection
to explore assigning persistent identifiers and ultimately to select ARKs. 

From May to September 2023, the Frick Collection worked with a developer, Emery
Infrastructure, to implement software that could mint, manage, and resolve
ARKs. The software expanded on arklet, an ARK minting and resolving tool
designed and maintained by the Internet Archive. The modified tool,
arklet-frick, makes several improvements and changes to arklet. 

In addition to supporting URL resolution, arklet-frick supports six Dublin Core
metadata fields: title, identifier, source, relation, type, and format.
Additional features supported include suffix passthrough, content negotiation
for metadata delivery, and a command line interface. Future improvements will
include support for subparts and commitment statements. 

To create ARKs with arklet-frick, which uses a technical base of Python and
Django, an organization must first request a NAAN (name assigning authority
number) and enter it into the Django administration interface in order to
generate an API key.. This interface is also where administrators can create
and manage shoulders, which subdivide a NAAN‚Äôs namespace. Shoulders are one of
the most powerful and flexible features of the ARK specification because they
allow ARKs to support a variety of content and usage standards. The Frick uses
separate shoulders for the DAMS and the library catalog, which helps keep ARKs
organized and easy to understand. 

With a NAAN, shoulder, and API key in hand, users of arklet-frick can
immediately start using the command line interface to experiment with ARKs. The
application supports three key activities: minting, updating, and resolving.
When minting ARKs, users can supply metadata for both the URL and Dublin Core
fields. Resolving ARKs generically redirects users to the value stored in the
URL field, but users can also append a "?info" or "?json" extension to see
metadata directly. The Frick uses DigitalOcean as a provider for its production
deployment of arklet-frick.

The Frick ran its testing phase for arklet-frick from September 2023 and to the
end of the year. During this time, the Frick integrated the Django application
into its existing systems, assigned user roles, created shoulders, and
generated API keys for testing and production use cases. For each shoulder the
Frick created, we created a set of rules governing the use case for the
shoulder and the standards for the Dublin Core metadata fields.

The open source code for arklet-frick is available on Github, where we welcome
feedback.  In a separate blog post we will present how the Frick has been using
ARKs since launching its API.

