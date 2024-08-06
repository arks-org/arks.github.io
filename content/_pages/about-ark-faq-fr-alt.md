# 🇫🇷 FAQ sur les identifiants ARK

---------------------------------------------------------------------------------------------

üá´üá∑ FAQ sur les identifiants ARK
=================================

Created by John Kunze, last modified on Apr 28, 2020

**Foire aux questions-r√©ponses sur les ARK**

Ceci est la traduction fran√ßaise du document "ARK Identifiers FAQ".

/\*<!\[CDATA\[\*/ div.rbtoc1721795063361 {padding: 0px;} div.rbtoc1721795063361 ul {margin-left: 0px;} div.rbtoc1721795063361 li {margin-left: 0px;padding-left: 0px;} /\*\]\]>\*/

*   [Les bases](#id-üá´üá∑FAQsurlesidentifiantsARK-Lesbases)
    *   [Comment puis-je donner mon avis sur ce document ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Commentpuis-jedonnermonavissurcedocument?)
    *   [Que sont les ARK ?](#id-üá´üá∑FAQsurlesidentifiantsARK-QuesontlesARK?)
    *   [Qu'est-ce qu'un identifiant ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Qu'est-cequ'unidentifiant?)
    *   [Qu'est-ce qu'un ¬´ identifiant p√©renne ¬ª ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Qu'est-cequ'un¬´identifiantp√©renne¬ª?)
    *   [Qu'est-ce qu'un r√©solveur ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Qu'est-cequ'unr√©solveur?)
    *   [√Ä quoi peut-on attribuer un ARK ?](#id-üá´üá∑FAQsurlesidentifiantsARK-√Äquoipeut-onattribuerunARK?)
    *   [Qui utilise les ARK ?](#id-üá´üá∑FAQsurlesidentifiantsARK-QuiutiliselesARK?)
*   [Pour commencer](#id-üá´üá∑FAQsurlesidentifiantsARK-Pourcommencer)
    *   [De quoi ai-je besoin pour cr√©er des ARK ?](#id-üá´üá∑FAQsurlesidentifiantsARK-localglobalDequoiai-jebesoinpourcr√©erdesARK?)
    *   [Comment commencer √† cr√©er des cha√Ænes de caract√®res destin√©es √† devenir des ARK ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Commentcommencer√†cr√©erdescha√Ænesdecaract√®resdestin√©es√†devenirdesARK?)
    *   [Que sont les identifiants opaques ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Quesontlesidentifiantsopaques?)
    *   [Comment rendre le contenu du serveur accessible via les ARK ?](#id-üá´üá∑FAQsurlesidentifiantsARK-CommentrendrelecontenuduserveuraccessiblevialesARK?)
    *   [Comment citer ou faire conna√Ætre un ARK ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Commentciteroufaireconna√ÆtreunARK?)
    *   [Existe-t-il des outils et des services de gestion d‚ÄôARK ?](#id-üá´üá∑FAQsurlesidentifiantsARK-outilsExiste-t-ildesoutilsetdesservicesdegestiond‚ÄôARK?)
*   [Pour aller plus loin](#id-üá´üá∑FAQsurlesidentifiantsARK-Pourallerplusloin)
    *   [Qu'est-ce que N2T ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Qu'est-cequeN2T?)
    *   [Si la plupart des ARK ont leur propre r√©solveur, pourquoi existe-t-il √©galement un r√©solveur global pour les ARK ?](#id-üá´üá∑FAQsurlesidentifiantsARK-SilaplupartdesARKontleurproprer√©solveur,pourquoiexiste-t-il√©galementunr√©solveurglobalpourlesARK?)
    *   [Mon organisation a son propre r√©solveur ARK - dois-je me soucier de N2T.net ?](#id-üá´üá∑FAQsurlesidentifiantsARK-monResolveurVsN2TMonorganisationasonproprer√©solveurARK-dois-jemesoucierdeN2T.net?)
    *   [Pourquoi le r√©solveur ARK global (n2t.net) ne contient-il pas le mot ¬´ ARK ¬ª ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Pourquoiler√©solveurARKglobal(n2t.net)necontient-ilpaslemot¬´ARK¬ª?)
    *   [Que d√©signe-t-on par ¬´ transfert de suffixe ¬ª ?](#id-üá´üá∑FAQsurlesidentifiantsARK-transfertDeSuffixeQued√©signe-t-onpar¬´transfertdesuffixe¬ª?)
    *   [Quelles sont les parties d'un ARK ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Quellessontlespartiesd'unARK?)
    *   [Puis-je attribuer des ARK √† des composantes d‚Äôune ressource qui a d√©j√† un ARK ?](#id-üá´üá∑FAQsurlesidentifiantsARK-granularitePuis-jeattribuerdesARK√†descomposantesd‚Äôuneressourcequiad√©j√†unARK?)
    *   [Quel est le but du NAAN et puis-je y apporter des modifications ?](#id-üá´üá∑FAQsurlesidentifiantsARK-QuelestlebutduNAANetpuis-jeyapporterdesmodifications?)
    *   [Y a-t-il des restrictions d‚Äôusage des NAAN ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Ya-t-ildesrestrictionsd‚ÄôusagedesNAAN?)
*   [ARK et les autres identifiants](#id-üá´üá∑FAQsurlesidentifiantsARK-ARKetlesautresidentifiants)
    *   [Pourquoi utiliser des ARK plut√¥t que des DOI, par exemple ?](#id-üá´üá∑FAQsurlesidentifiantsARK-PourquoiutiliserdesARKplut√¥tquedesDOI,parexemple?)
    *   [Qu'ont en commun ARK, DOI, Handle, PURL et URN ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Qu'ontencommunARK,DOI,Handle,PURLetURN?)
    *   [Attendez, vous voulez dire que ARK, DOI, Handle, PURL et URN sont inutiles ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Attendez,vousvoulezdirequeARK,DOI,Handle,PURLetURNsontinutiles?)
    *   [En quoi les ARK diff√®rent-ils des identifiants tels que les DOI, les Handle, les PURL et les URN ?](#id-üá´üá∑FAQsurlesidentifiantsARK-differenceSchemasIdentifiantsEnquoilesARKdiff√®rent-ilsdesidentifiantstelsquelesDOI,lesHandle,lesPURLetlesURN?)
        *   [La r√©ponse courte](#id-üá´üá∑FAQsurlesidentifiantsARK-Lar√©ponsecourte)
        *   [D‚Äôautres diff√©rences entre ARK, DOI, Handle, PURL et URN](#id-üá´üá∑FAQsurlesidentifiantsARK-D‚Äôautresdiff√©rencesentreARK,DOI,Handle,PURLetURN)
    *   [Mais si les ARK peuvent √™tre supprim√©s, comment peut-on leur faire confiance ?](#id-üá´üá∑FAQsurlesidentifiantsARK-MaissilesARKpeuvent√™tresupprim√©s,commentpeut-onleurfaireconfiance?)
    *   [Un objet peut-il avoir √† la fois un ARK et un DOI ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Unobjetpeut-ilavoir√†lafoisunARKetunDOI?)
    *   [Quand dois-je utiliser ARK plut√¥t que DOI, Handle, PURL ou URN ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Quanddois-jeutiliserARKplut√¥tqueDOI,Handle,PURLouURN?)
*   [Du berceau au tombeau](#id-üá´üá∑FAQsurlesidentifiantsARK-Duberceauautombeau)
    *   [Quand dois-je cr√©er des ARK dans mon processus de travail ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Quanddois-jecr√©erdesARKdansmonprocessusdetravail?)
    *   [Comment se fait-il que les ARK puissent √™tre faciles √† supprimer ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Commentsefait-ilquelesARKpuissent√™trefaciles√†supprimer?)
    *   [Pourquoi dit-on que les ARK sont adapt√©s √† des objets dans un stade pr√©coce de d√©veloppement ?](#id-üá´üá∑FAQsurlesidentifiantsARK-precocePourquoidit-onquelesARKsontadapt√©s√†desobjetsdansunstadepr√©coceded√©veloppement?)
    *   [Si les ARK ne les exigent pas, pourquoi se donner la peine de cr√©er des m√©tadonn√©es ?](#id-üá´üá∑FAQsurlesidentifiantsARK-metadonneesSilesARKnelesexigentpas,pourquoisedonnerlapeinedecr√©erdesm√©tadonn√©es?)
    *   [Quelles m√©tadonn√©es sont recommand√©es pour les ARK ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Quellesm√©tadonn√©essontrecommand√©espourlesARK?)
    *   [Pourquoi est-ce que je vois des m√©tadonn√©es ARK avec les termes ¬´ qui ¬ª, ¬´ quoi ¬ª, ¬´ quand ¬ª, ¬´ o√π ¬ª ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Pourquoiest-cequejevoisdesm√©tadonn√©esARKaveclestermes¬´qui¬ª,¬´quoi¬ª,¬´quand¬ª,¬´o√π¬ª?)
    *   [Qu'est-ce qu'une ¬´ inflexion ¬ª et en quoi diff√®re-t-elle de la ¬´ n√©gociation de contenu ¬ª ?](#id-üá´üá∑FAQsurlesidentifiantsARK-inflexionQu'est-cequ'une¬´inflexion¬ªetenquoidiff√®re-t-elledela¬´n√©gociationdecontenu¬ª?)
    *   [Qu'entendez-vous par ¬´ silos ¬ª ?](#id-üá´üá∑FAQsurlesidentifiantsARK-Qu'entendez-vouspar¬´silos¬ª?)

Les bases
=========

Comment puis-je donner mon avis sur ce document¬†?
-------------------------------------------------

En commentant cette version ouverte aux commentaires.

Que sont les ARK¬†?
------------------

Les ARK (_Archival Resource Key_) sont des **identifiants** de haute performance qui vous donnent acc√®s √† des choses et √† des descriptions de ces choses. Par exemple, cet ARK,

¬†¬†¬†¬†¬†[https://n2t.net/ark:/67531/metadc107835/](https://n2t.net/ark:/67531/metadc107835/)

vous donne acc√®s √† une th√®se, et, en ajoutant '??' √† la fin de l'ARK, devrait vous amener √† sa description¬†:

¬†¬†¬†¬†¬†[https://n2t.net/ark:/67531/metadc107835/??](https://n2t.net/ark:/67531/metadc107835/??)

Qu'est-ce qu'un identifiant¬†?
-----------------------------

Sur Internet, un **identifiant** est une URL, ou une partie d'URL. Par exemple, cet identifiant ARK principal,

[ark:/12148/btv1b8449691v/f29](http://ark/12148/btv1b8449691v/f29)

figure dans deux URL (_Uniform Resource Locators_, √©galement appel√©s ¬´¬†liens Web¬†¬ª ou ¬´¬†adresses Web¬†¬ª) diff√©rentes¬†:

¬†¬†¬†¬†¬†¬†¬† [http://ark.bnf.fr/ark:/12148/btv1b8449691v/f29](http://ark.bnf.fr/ark:/12148/btv1b8449691v/f29)  
¬†¬†¬†¬†¬†¬†¬† [https://n2t.net/ark:/12148/btv1b8449691v/f29](https://n2t.net/ark:/12148/btv1b8449691v/f29)

Les ARK sont plus particuli√®rement destin√©s √† √™tre des identifiants p√©rennes.

Qu'est-ce qu'un ¬´¬†identifiant p√©renne¬†¬ª¬†?
-----------------------------------------

On a estim√© que la dur√©e de vie moyenne d'un URL √©tait de 44 jours. La fin de la vie d‚Äôun URL advient lorsque celui-ci se ¬´¬†rompt¬†¬ª¬†; il ¬†vous retourne alors la redoutable erreur "404 Introuvable" que la plupart d‚Äôentre nous connaissent bien. Non seulement c‚Äôest aga√ßant, mais c‚Äôest en outre politiquement embarrassant lorsque l‚Äôon recherche des publications scientifiques financ√©es sur fonds publics, et c‚Äôest un d√©sastre culturel pour les biblioth√®ques, les archives, les mus√©es et autres institutions m√©morielles.

Parmi les multiples liens qui peuvent ou ont pu vous conduire √† une chose, un **identifiant p√©renne** est un lien qui, en principe, continue de fonctionner tr√®s longtemps. Les services qui permettent la d√©couverte et l'interconnexion de ressources (comme entre les articles universitaires, les auteurs, les donn√©es de la recherche et les sujets connexes) pr√©f√®rent les identifiants p√©rennes en raison de cette stabilit√©.

Les identifiants p√©rennes devraient continuer √† fonctionner m√™me lorsque les choses sont d√©plac√©es d'un site Web √† un autre. Normalement, lorsque les choses sont d√©plac√©es, tous ceux qui ont d√©j√† enregistr√© les anciens liens devraient √™tre inform√©s des nouveaux, ce qui est presque impossible. C'est alors qu'interviennent les **r√©solveurs** d'identifiants.

Qu'est-ce qu'un r√©solveur¬†?
---------------------------

Un r√©solveur est un site Web sp√©cialis√© dans la r√©orientation d'identifiants entrants (ceux initialement annonc√©s aux utilisateurs) vers les sites Web actuellement les mieux √† m√™me de les traiter. Ce transfert est g√©n√©ralement appel√© ¬´¬†**r√©solution**¬†¬ª et une des √©tapes de ce processus de r√©solution la ¬´¬†**redirection**¬†¬ª.

Pour qu'un r√©solveur fonctionne, son nom d'h√¥te - _hostname_ en anglais - (¬´¬†[n2t.net](http://n2t.net)¬†¬ª ou ¬´¬†[ark.bnf.fr](http://ark.bnf.fr)¬†¬ª dans les identifiants ci-dessus) doit √™tre soigneusement choisi afin qu'il ne soit plus n√©cessaire de le changer. Les noms d‚Äôh√¥te des institutions m√©morielles, dont certaines sont vieilles de plusieurs si√®cles, sont souvent de bons candidats pour devenir des r√©solveurs. On citera d‚Äôautres r√©solveurs, plus r√©cents et plus connus¬†: n2t.net (le r√©solveur ARK), identifiers.org, doi.org, handle.net et purl.org.

√Ä quoi peut-on attribuer un ARK¬†?
---------------------------------

√Ä toute chose num√©rique, physique ou abstraite. Cela inclut les choses qui n‚Äôexistent pas encore mais auxquelles vous devez faire r√©f√©rence depuis des objets que vous cr√©ez ou pr√©voyez de cr√©er, comme un lien depuis le brouillon d‚Äôun article vers un jeu de donn√©es en pr√©paration, ou un lien depuis une lettre num√©rique archiv√©e vers un instrument de recherche √† cr√©er. Attention, vous ne devriez attribuer des ARK qu‚Äô√† des choses que vous poss√©dez, contr√¥lez ou g√©rez. Attribuer des ARK √† des choses que vous ne contr√¥lez pas est d√©conseill√© car de tels identifiants sont g√©n√©ralement fragiles.

Vous trouverez ci-dessous une liste de choses qui re√ßoivent des ARK. Les nombres sont une estimation produite en septembre 2019 par les organisations elles-m√™mes.

|     |     |
| --- | --- |
| Cat√©gories | Exemples |
| *   Documents g√©n√©alogiques (3 milliards, FamilySearch)<br>*   Contenus d‚Äô√©diteurs (100 millions, Portico)<br>*   Publications scientifiques (22 millions, INIST)<br>*   Textes num√©ris√©s (20 millions, Internet Archive)<br>*   Notices bibliographiques (15 millions, catalogue g√©n√©ral de la BnF)<br>*   Objets mus√©aux (11 millions, bient√¥t 100 millions, Biblioth√®ques de la Smithsonian Institution)<br>*   Documents publics de sant√©, la plupart issus de mesures d‚Äô√©tablissement de preuves l√©gales (14 millions, Biblioth√®ques de l‚ÄôUCSF)<br>*   Documents et objets num√©ris√©s (5 millions, Gallica, BnF)<br>*   Auteurs et universitaires li√©s √† des sources historiques (4 millions, SNAC)<br>*   Instruments de recherche et collections pr√©cieuses (4 millions, Merritt)<br>*   Cartes de ressources (1,5 millions, RMap Hub)<br>*   Ressources p√©dagogiques (1,1 million, Universit√© de l‚ÄôUtah)<br>*   Vocabulaires contr√¥l√©s (9000, Periodo, YAMZ)<br>*   des jeux de donn√©es, des journaux, des objets arch√©ologiques, des √™tres vivants, etc. | [![](attachments/178880619/178880621.png)](https://www.familysearch.org/ark:/61903/2:1:M4MZ-NDF)[![](attachments/178880619/178880622.jpeg)](http://ark.bnf.fr/ark:/12148/btv1b8449691v)[![](attachments/178880619/178880623.png)](https://n2t.net/ark:/13960/t26b1m88x)[![](attachments/178880619/178880624.png)](http://n2t.net/ark:/99166/w6xd14mf)[![](attachments/178880619/178880625.png)](https://n2t.net/ark:/87278/s66m7g4t)[![](attachments/178880619/178880626.png)](http://n2t.net/ark:/65665/326def39f-b58f-4e05-ad08-edbe9fc87801)[![](attachments/178880619/178880627.png)](https://n2t.net/ark:/88122/lfnv0009)[![](attachments/178880619/178880628.png)](http://n2t.net/ark:/99166/w6b09txc) |

Qui utilise les ARK¬†?
---------------------

Difficile √† dire car les ARK sont d√©centralis√©s, mais plus de 600 organisations enregistr√©es ont cr√©√©, selon leurs estimations, environ 3,2 milliards d‚ÄôARK. Vous trouverez des ARK utilis√©s comme permaliens dans

*   le Data Citation Index (li√© au Web of Science)
*   les articles de Wikip√©dia
*   les entr√©es de Wikidata
*   les collections d‚ÄôInternet Archive)
*   les profils de chercheurs ORCID

Voici la r√©partition globale des organisations enregistr√©es comme attributrices d‚ÄôARK en avril 2020. Cliquez sur l‚Äôimage ci-dessous pour acc√©der √† une carte √† jour et zoomable.

[](https://drive.google.com/open?id=1ALGeRERECL36f2pg7pqrthUYNmuU43UM&usp=sharing)

Pour commencer
==============

¬†De quoi ai-je besoin pour cr√©er des ARK¬†?
------------------------------------------

Tout d'abord, vous avez besoin d'un NAAN (num√©ro d'autorit√© nommante, ou _Name Assigning Authority Number_ en anglais), qui est un num√©ro exclusivement r√©serv√© √† votre organisation. Il doit appara√Ætre dans chaque ARK attribu√© par votre organisation, juste apr√®s l'√©tiquette "ark:/". Le NAAN de tous ces ARK

¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬† ¬† ¬† ¬†¬†¬†¬†¬†¬†¬† ark:/12148/btv1b8449691v/f29

¬†¬†¬†¬†¬†http://ark.bnf.fr/ark:/12148/btv1b8449691v/f29

¬†¬†¬†¬†¬† https://n2t.net/ark:/12148/btv1b8449691v/f29

est 12148¬†; il identifie de mani√®re unique la Biblioth√®que nationale de France. Chaque NAAN est associ√© √† l'URL d'un r√©solveur pour ses ARK. Par exemple, pour r√©soudre un ARK en 12148, apposez-le apr√®s [http://ark.bnf.fr/](http://ark.bnf.fr/) comme indiqu√© ci-dessus. Le r√©solveur N2T.net est √† part dans la mesure o√π il transmet tout ARK au r√©solveur associ√© √† son NAAN.

L'obtention ou l'utilisation d'un NAAN est gratuite et vous pouvez en demander un en remplissant un formulaire en ligne. Plus de 600 organisations (biblioth√®ques, archives, mus√©es, facult√©s, agences gouvernementales, √©diteurs scientifiques et p√©dagogiques, projets, etc.) ont un NAAN r√©pertori√© dans le registre public NAAN.

Comment commencer √† cr√©er des cha√Ænes de caract√®res destin√©es √† devenir des ARK¬†?
---------------------------------------------------------------------------------

Vous √™tes libre de cr√©er des cha√Ænes de caract√®re ARK √† votre guise, √† condition que vous n'utilisiez que des chiffres, des lettres (ASCII, donc sans aucun signe diacritique) et les caract√®res suivants¬†:

\= ~ \* + @ \_ $ . /

Les deux derniers caract√®res sont r√©serv√©s pour le cas o√π vous souhaiteriez divulguer des relations entre ARK.

Une autre des caract√©ristiques des ARK est que les traits d'union ('-') peuvent √™tre utilis√©s mais qu‚Äôils sont **inertes en ce qui concerne l'identit√©**, ce qui signifie que des cha√Ænes ne diff√©rant que par des traits d'union sont consid√©r√©es comme identiques¬†; par exemple, ces cha√Ænes

[ark:/12345/141e86dc-d396-4e59-bbc2-4c3bf5326152](http://ark/12345/141e86dc-d396-4e59-bbc2-4c3bf5326152)  
  
[ark:/12345/141e86dcd3964e59bbc24c3bf5326152](http://ark/12345/141e86dcd3964e59bbc24c3bf5326152)

identifient la m√™me chose. La raison de cette fonctionnalit√© est que les processus de formatage de texte utilis√©s √† travers le monde introduisent r√©guli√®rement des traits d'union suppl√©mentaires dans les identifiants, rompant ainsi les liens avec tout serveur qui consid√®re les traits d'union comme signifiants.

Les ARK distinguent majuscules et minuscules, ce qui permet des identifiants plus courts (52 contre 26 lettres par caract√®re). La ¬´¬†m√©thode ARK¬†¬ª consiste toutefois √† n'utiliser que des minuscules, sauf si vous avez besoin d'ARK plus courts. Cette restriction facilite la prise en charge de vos ARK par les r√©solveurs s‚Äôils sont re√ßus avec des majuscules ou des majuscules et minuscules m√©lang√©es, ce qui arrive malheureusement souvent √† cause de l‚Äôid√©e, vieille de 50 ans, selon laquelle les identifiants sont insensibles √† la casse. Vous pouvez √©galement envisager d'utiliser le r√©pertoire de caract√®res de l'outil Noid, qui cr√©e des cha√Ænes prot√©g√©es contre une retranscription fautive √† l'aide de l'algorithme de contr√¥le le plus puissant. Ce r√©pertoire comprend uniquement des chiffres et des consonnes moins 'l' (lettre ¬´¬†L¬†¬ª, souvent confondue avec le chiffre 1)¬†:

0123456789bcdfghjkmnpqrstvwxz

Pour l'attribution, une strat√©gie courante consiste √† tirer parti des identifiants h√©rit√©s. Par exemple, un num√©ro de sp√©cimen de papillon de mus√©e, cd456f9\_87, pourrait √™tre publi√© sous l‚ÄôARK [ark:/12345/cd456f9\_87](http://ark/12345/cd456f9_87). Certains identifiants h√©rit√©s devront peut-√™tre √™tre modifi√©s compte tenu des restrictions de caract√®res ARK. La deuxi√®me strat√©gie couramment utilis√©e consiste √† cr√©er des cha√Ænes enti√®rement nouvelles pour vos ARK. Dans ce cas, il est important de consid√©rer si elles doivent √™tre totalement ou partiellement opaques, ou signifiantes.

Que sont les identifiants opaques¬†?
-----------------------------------

Les cha√Ænes de caract√®res d'identifiants p√©rennes sont g√©n√©ralement **opaques** et r√©v√®lent d√©lib√©r√©ment peu de choses sur ce √† quoi elles sont attribu√©es, car les identifiants non opaques ne vieillissent pas ou ne voyagent pas bien. Les noms d'organisations sont connus pour √™tre transitoires, raison pour laquelle les NAAN sont des nombres opaques. Lorsque les dates et les titres sont corrig√©s, que les significations des mots √©voluent (par exemple, d'anciens sigles innocents peuvent devenir offensants ou attentatoires), les cha√Ænes de caract√®res cens√©es √™tre p√©rennes peuvent g√©n√©rer de la confusion ou poser un probl√®me politique. La g√©n√©ration et l'attribution de cha√Ænes de caract√®res compl√®tement opaques comportent √©galement des risques¬†; ainsi, des nombres attribu√©s s√©quentiellement r√©v√®lent des informations sur leur date et les cha√Ænes de caract√®res contenant des lettres peuvent g√©n√©rer fortuitement des mots (c'est pourquoi le r√©pertoire de caract√®res recommand√© ne comporte pas de voyelles).

|     |     |     |     |
| --- | --- | --- | --- |
| **Exemples de cha√Ænes de caract√®res plus ou moins opaques** |     |     |     |
| Non opaque | Netscape Permanent Archive | Gay\_Divorcee\_1934\_April\_1 | Name-to-Thing Resolver |
| Partiellement opaque | X0001, x0002, ..., x9998 | GD/1934/04/01 | [n2t.net](http://n2t.net) |
| Plus opaque | 141e86dc-d396-4e59-bbc2-4c3bf5326152 | 19340401 | n2t |
| Totalement opaque | 141e86dcd3964e59bbc24c3bf5326152 | H8k74926g | 12148 |

  

Il n'est pas obligatoire que les ARK soient opaques, mais il est recommand√© que le nom de base de l'objet le soit, car il constitue en g√©n√©ral le nom du sujet principal de l‚Äôeffort de p√©rennisation. Si des qualificatifs suivent ce nom, il est moins important qu'ils soient opaques. Pour vous aider √† d√©terminer votre niveau d'opacit√©, vous pouvez √©valuer la compatibilit√© avec les identifiants h√©rit√©s et la facilit√© de g√©n√©ration et de retranscription de la cha√Æne de caract√®res (en prenant en compte la compacit√©, le caract√®re de contr√¥le). De nouvelles cha√Ænes de caract√®res peuvent √™tre g√©n√©r√©es avec la date et l‚Äôheure, un UUID, √† l‚Äôaide d‚Äôun g√©n√©rateur de nombres ou du g√©n√©rateur Noid (Nice Opaque Identifiers).

Les cha√Ænes de caract√®res opaques sont ¬´¬†muettes¬†¬ª et donc difficiles √† g√©rer, c'est pourquoi les ARK ont √©t√© con√ßus pour √™tre des identifiants ¬´¬†parlants¬†¬ª. Cela signifie que s'il existe des m√©tadonn√©es sur la ressource, un ARK qui se pr√©sente sur votre serveur suivi de l'inflexion ¬´¬†?¬†¬ª devrait pouvoir parler de lui-m√™me.

Comment rendre le contenu du serveur accessible via les ARK¬†?
-------------------------------------------------------------

Tout d‚Äôabord, d√©terminez ce que sera l‚Äôexp√©rience utilisateur lors de l‚Äôacc√®s par vos ARK¬†: une feuille de calcul, un PDF, une image, une page d‚Äôaccueil affichant des m√©tadonn√©es et plusieurs options¬†? Quel que soit votre choix, pr√©voyez que votre serveur retourne des m√©tadonn√©es si l‚ÄôARK arrivait suivi d‚Äôune üá´üá∑ FAQ sur les identifiants ARK#inflexion ¬´¬†?¬†¬ª.

Pour le reste, r√©soudre des ARK revient √† r√©pondre √† des URL. Normalement, les URL entrants **appellent** (ou sont associ√©s √†) du contenu renvoy√© par votre serveur Web. Si votre serveur est compatible ARK, les ARK entrants (exprim√©s sous forme d‚ÄôURL) doivent √™tre associ√©s au m√™me contenu. L‚Äôapproche habituelle consiste √† associer l‚ÄôARK √† l‚ÄôURL √† l‚Äôaide d‚Äôune table de donn√©es que vous mettez √† jour chaque fois que l‚ÄôURL change. Dans ce cas, votre serveur agit comme un **r√©solveur local**. Si vous ne souhaitez pas l‚Äôimpl√©menter vous-m√™me, il existe des [outils et services logiciels ARK](https://wiki.lyrasis.org/pages/viewpage.action?pageId=178880635#id-üá´üá∑FAQsurlesidentifiantsARK-outils) qui peuvent vous aider.

Une autre approche consiste √† laisser votre serveur Web fonctionner en l‚Äô√©tat et, au lieu de mettre √† jour ses tables locales, de maintenir des tables de correspondance ARK/URL sur un r√©solveur distinct. Cette approche est adopt√©e par nombre d‚Äô√©diteurs de logiciels et par les organisations maintenant leurs tables via le service EZID (qui est li√© au r√©solveur n2t.net et met √† jour les tables de r√©solution de ce dernier).

Comment citer ou faire conna√Ætre un ARK¬†?
-----------------------------------------

On pr√©f√©rera la forme URL (https ou http) de l‚ÄôARK. Par exemple¬†:¬†https://n2t.net/ark:/99166/w66d60p2. Un ARK destin√© √† un usage externe est g√©n√©ralement publi√© (annonc√©, diffus√©‚Ä¶) de cette mani√®re afin de constituer un identifiant actionnable. Si un affichage visuel plus compact est n√©cessaire, il doit √™tre associ√© √† un lien hypertexte. Par exemple¬†:

<a href="[https://n2t.net/ark:/99166/w66d60p2](https://n2t.net/ark:/99166/w66d60p2)">ark:/99166/w66d60p2</a>

Une d√©cision importante consiste √† d√©terminer si vos URI ARK utiliseront le nom d‚Äôh√¥te de votre r√©solveur local ou le r√©solveur N2T.net. Si vous privil√©giez le contr√¥le ou la strat√©gie de marque, vous pr√©f√©rerez publier des ARK utilisant votre r√©solveur local. Si vous doutez de la stabilit√© de votre nom d‚Äôh√¥te local, vous pr√©f√©rerez publier vos ARK en utilisant le nom d‚Äôh√¥te n2t.net (voir ici des exemples des deux approches).¬†Quelle que soit la mani√®re dont vous les publiez, la r√©solution de vos ARK via N2T est toujours possible.

Existe-t-il des outils et des services de gestion d‚ÄôARK¬†?
---------------------------------------------------------

¬†Voici une liste partielle d‚Äôoutils logiciels de gestion d‚Äôidentifiants. Elle comprend notamment

*   Noid (Nice Opaque Identifiers), logiciel open source permettant de cr√©er et de r√©soudre vous-m√™me des ARK,
*   ArchiveSpace, une application open source pour g√©rer et fournir un acc√®s web √† des archives, des manuscrits et des objets num√©riques,
*   un¬†plug-in ARK pour Omeka, qui cr√©e et g√®re des ARK pour la plate-forme de publication Web open source Omeka,
*   un¬†module ARK pour Drupal, qui permet √† votre site Drupal d'agir en tant qu'autorit√© d‚Äôadressage (NMA).

On y mentionne √©galement certains √©diteurs de logiciels et fournisseurs de service, tels que EZID.¬†Vous trouverez ici des informations suppl√©mentaires sur les concepts et les bonnes pratiques.

Pour aller plus loin
====================

Qu'est-ce que N2T¬†?
-------------------

![](attachments/178880619/178880633.png)

N2T.net est un r√©solveur ARK global. N2T, qui signifie ¬´¬†Name-to-Thing¬†¬ª, est en fait un r√©solveur g√©n√©ricis√© permettant d‚Äôassocier des noms √† des objets. Il sait ainsi rediriger plus de 600 autres types d'identifiants - ARK, DOI, PMID, Taxon, PDB, ISSN, etc. Si cela vous int√©resse, le sch√©ma et la suite de cette r√©ponse donnent un peu plus de d√©tails.¬†

Les requ√™tes entrantes sont g√©n√©ralement constitu√©es de https://n2t.net/ suivies d‚Äôun identifiant (le nom). N2T cherche cet identifiant et renvoie un lien de redirection. Pour cela, il utilise deux m√©thodes de r√©solution. D‚Äôabord, N2T tente de r√©soudre l‚Äôidentifiant selon une information associ√©e √† un identifiant stock√© unitairement. √Ä d√©faut, il applique des r√®gles li√©es au type d‚Äôidentifiant. Il existe √©galement une API N2T qui permet, sur authentification, des op√©rations de masse et la g√©n√©ration d‚Äôidentifiants.¬†

N2T utilise deux types de donn√©es stock√©es. Premi√®rement, il stocke des enregistrements individuels pour plus de 20 millions d'identifiants d'objet (par exemple, ARK, DOI) qu'il obtient de trois sources¬†: EZID, Internet Archive et YAMZ.net. Lorsque de tels enregistrements incluent une URL de redirection (cible) et des m√©tadonn√©es descriptives, N2T peut agir sur les inflexions, effectuer un transfert de suffixe et une ¬´¬†n√©gociation de contenu¬†¬ª.¬†

Deuxi√®mement, N2T stocke plus de 3500 enregistrements de ¬´¬†r√®gle¬†¬ª pour rediriger les identifiants qui n‚Äôont pas √©t√© trouv√©s individuellement dans N2T, mais pour lesquels il dispose d'informations de redirection li√©es au type d'identifiant √† r√©soudre. Il obtient des enregistrements de r√®gles de plusieurs sources, notamment le registre NAAN, une base de donn√©es de pr√©fixes ARK et DOI et un partenariat officiel sur les identifiants compacts avec identifiers.org.

Si la plupart des ARK ont leur propre r√©solveur, pourquoi existe-t-il √©galement un r√©solveur global pour les ARK¬†?
------------------------------------------------------------------------------------------------------------------

¬†La plupart des ARK sont cr√©√©s par des organisations qui les publient en utilisant leur propre r√©solveur. Par exemple, cet ARK a √©t√© publi√© en sp√©cifiant le r√©solveur ark.bnf.fr¬†:

http://ark.bnf.fr/ark:/12148/btv1b8449691v/f29

Avoir √† g√©rer et √† maintenir son propre r√©solveur est la contrepartie d‚Äôune autonomie compl√®te. L'utilisation de votre propre r√©solveur vous permet √©galement de mettre en avant votre ¬´¬†marque¬†¬ª via le nom d'h√¥te, l'inconv√©nient √©tant que les marques sont transitoires et ont tendance √† fragiliser les identifiants. Les pressions politiques voire l√©gales (par exemple, sur les marques commerciales) peuvent rendre difficile le maintien de noms d'h√¥tes de ¬´¬†marque¬†¬ª plus anciens, et donc des identifiants sur lesquels ils ont √©t√© construits.¬†C'est un autre argument en faveur du r√©solveur ARK global. Les utilisateurs rencontrant ult√©rieurement un identifiant bris√© et constatant que son nom d'h√¥te n'existe plus peuvent, si c'est un ARK, extraire son identit√© immuable de base (l‚Äô√©l√©ment commen√ßant par ¬´¬†ark:¬†¬ª) et la pr√©senter au r√©solveur global n2t.net,

https://n2t.net/ark:/12148/btv1b8449691v/f29.

Mon organisation a son propre r√©solveur ARK - dois-je me soucier de N2T.net ?
-----------------------------------------------------------------------------

Oui, et ce pour deux raisons principales. Tout d'abord, si vos ARK ¬´ √† l'√©tat sauvage ¬ª apparaissent sans votre le nom d'h√¥te de votre r√©solveur (c'est-√†-dire, s'ils commencent par ¬´ ark: ... ¬ª, ce qui n'est pas rare), la personne qui veut les utiliser n'est pas tenue de conna√Ætre le nom d'h√¥te : il lui suffit d'ajouter ¬´ n2t.net ¬ª devant eux. Cela fonctionne car N2T conna√Æt le nom d'h√¥te du r√©solveur.Deuxi√®mement, si certaines organisations et leurs noms d'h√¥tes r√©solveurs ont une longue dur√©e de vie, la plupart ne durent pas. Une personne essayant d'utiliser un ARK contenant un nom d'h√¥te de r√©solveur non fonctionnel peut remplacer la partie non fonctionnelle par ¬´ n2t.net ¬ª. Si les circonstances vous obligent √† changer votre r√©solveur, cette √©tape de remplacement donne aux ARK que vous avez publi√©s avant le changement une meilleure chance de fonctionner.Pour √©viter de futurs d√©sagr√©ments, certaines organisations qui g√®rent leurs propres r√©solveurs peuvent choisir d'embl√©e de pr√©f√©rer au nom de leur r√©solveur le nom de domaine n2t.net pour la publication de leurs ARK.

Pourquoi le r√©solveur ARK global (n2t.net) ne contient-il pas le mot ¬´¬†ARK¬†¬ª¬†?
------------------------------------------------------------------------------

Lorsque le besoin d'un r√©solveur ARK global est apparu, les principes de base d'ouverture et de g√©n√©ricit√© ont dissuad√© les concepteurs de cr√©er un autre silo sur le mod√®le de DOI / Handle / PURL. Au lieu de quoi, le r√©solveur ARK a √©t√© con√ßu pour √™tre un r√©solveur g√©n√©rique, non li√© √† un format, appel√© N2T (Name-to-Thing), qui r√©sout maintenant plus de 600 types d'identifiants, y compris les ARK, les DOI, les Handle, les PURL, les URN, les ORCID, les ISSN, etc. La r√©solution consiste √† rechercher dans une table une cha√Æne de caract√®res d'identifiant, quel que soit son type, et √† la rediriger au bon endroit.

Les m√™mes principes de base ont guid√© la conception d'un outil ant√©rieur appel√© noid, con√ßu pour les ARK, mais √©galement utilis√© r√©guli√®rement par les organisations attribuant des Handle.

Que d√©signe-t-on par ¬´ transfert de suffixe ¬ª ?
-----------------------------------------------

En bref, le transfert de suffixe est une fonctionnalit√© de N2T. Supposons que vous n'ayez qu'un seul ARK enregistr√©, https://n2t.net/ark:/12345/6789, et qu'il redirige vers la page du serveur Web,https://a.example.org/dataset542Et supposons que ce m√™me serveur serve √©galement ces pages :https://a.example.org/dataset542/volume3https://a.example.org/dataset542/volume3/part2https://a.example.org/dataset542/volume3/part2.pdfCe que fait le transfert de suffixe est de laisser votre ARK enregistr√© agir comme si vous aviez √©galement enregistr√© ces trois ARK ci-dessous, qui seraient r√©solus par les pages ci-dessus, respectivement:https://n2t.net/ark:/12345/6789/volume3https://n2t.net/ark:/12345/6789/volume3/part2https://n2t.net/ark:/12345/6789/volume3/part2.pdfDans ce cas, le transfert de suffixe vous √©vite d'avoir √† conserver des enregistrements pour trois pages suppl√©mentaires. En fait, cela fonctionne pour un nombre illimit√© de pages.

Quelles sont les parties d'un ARK¬†?
-----------------------------------

**Anatomie de l‚ÄôARK**¬† ¬† ¬† ¬† ¬† ¬†Identit√© immuable de base¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬† ¬† ¬† ¬† ¬† ¬† ¬†¬† ¬† /¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬† ¬†¬† \\Service de r√©solution ¬† ¬† ¬† Nom de base de l‚Äôobjet¬† Qualificatifs¬† ¬† ¬† \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ ¬† \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_¬†¬† \_\_\_\_\_\_\_\_\_\_\_\_\_¬† ¬† ¬†/¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬† ¬†¬†¬†¬†¬†¬†¬† \\/¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬†¬† ¬† ¬† ¬† \\/¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬† \\¬† ¬† ¬†**https://example.org/ark:12345/654xz321/s3/f8.05v.tiff**¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬† \\\_\_\_\_\_\_\_\_\_\_\_\_\_/ \\\_\_\_/\\\_\_\_\_\_/ \\\_\_\_\_\_\_\_\_\_/\\\_\_\_\_\_\_/\\\_\_\_\_\_\_/¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬† |¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† |¬† ¬†¬†¬†¬†¬†¬†¬† |¬† ¬† ¬†¬† ¬† ¬† ¬† | ¬† ¬† ¬† ¬† ¬†¬†¬†¬† |¬† ¬† ¬†¬†¬† ¬†¬†|¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬† |¬† ¬† ¬† ¬† ¬† ¬† ¬†¬† Libell√©¬†¬† |¬† ¬† ¬† ¬†¬†¬†¬†¬†¬† |¬†¬†¬†¬†¬†¬†¬†¬† ¬† ¬†¬†¬† |¬† ¬†¬† Variantes¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬† |¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬†¬† | ¬†¬†¬†¬†¬† ¬† ¬† ¬† | ¬† ¬†¬† Composantes¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬† |¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬†¬† | ¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬† |¬† Nom de l‚Äôautorit√© d‚Äôadressage¬†¬† |¬†¬† ¬†Nom ARK attribu√©¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬† (NMA)¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬†¬† |¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬† ¬†¬† Num√©ro d‚Äôautorit√© nommante (NAAN)

Puis-je attribuer des ARK √† des composantes d‚Äôune ressource qui a d√©j√† un ARK¬†?
-------------------------------------------------------------------------------

Oui, les ARK peuvent √™tre attribu√©s √† n'importe quel niveau de granularit√©, tel qu'un manuscrit, des chapitres √† l'int√©rieur, des sections de chapitre, des sous-sections, etc. Un ARK peut √©galement √™tre attribu√© √† une chose qui contient d'autres choses. Dans les ARK, le caract√®re '/' est r√©serv√© pour aider l‚Äôutilisateur √† d√©couvrir la relation de composition. Par exemple, le premier objet ci-dessous contient le second¬†:

ark:/12148/btv1b8449691v

ark:/12148/btv1b8449691v/f29

C'est le qualificatif de granularit√©.¬†Il n'y a qu'un seul autre qualificatif ARK, qui indique les variantes de forme d'une chose en utilisant le caract√®re r√©serv√© '.' devant un suffixe. Par exemple, ces ARK identifient des documents,

ark:/12148/btv1b8449691v/f29.pdf

ark:/12148/btv1b8449691v/f29.html

Comme ils ne diff√®rent que par le suffixe .pdf ou .html, on peut en d√©duire qu'ils identifient deux formes diff√©rentes du m√™me document.

Quel est le but du NAAN et puis-je y apporter des modifications¬†?
-----------------------------------------------------------------

¬†Les NAAN subdivisent l'ensemble des ARK potentiels (l'espace de noms ARK). Le sous-ensemble d'ARK d'un NAAN donn√© peut √™tre subdivis√© par des pr√©fixes (par exemple¬†: 12345/x2, 98765/b4), ce qui facilite la d√©l√©gation de l'attribution autonome d'ARK, aux d√©partements d'une grande organisation par exemple. La r√©solution ARK est partiellement bas√©e sur les NAAN, mais √©tant donn√© qu‚Äôil arrive que les organisations soient scind√©es, ARK r√©pond au probl√®me de la scission d'espaces de noms en permettant √† plusieurs organisations de prendre en charge la gestion d'un espace de noms. Si vous passez d‚Äôun prestataire √† un autre, rien ne vous emp√™che d‚Äôemporter votre NAAN avec vous.¬†Vous pouvez modifier un NAAN en remplissant le m√™me formulaire en ligne utilis√© pour demander un nouveau NAAN, par exemple pour

*   mettre √† jour l'URL de la personne √† contacter ou du r√©solveur de votre organisation,
*   modifier la strat√©gie d'attribution de nom de votre organisation (voir ici un exemple d‚Äôune telle strat√©gie),
*   demander un NAAN suppl√©mentaire pour un nouvel ensemble important d‚ÄôARK ou un nouvel organe √† l‚Äôint√©rieur de votre organisation,
*   ou enfin signaler le transfert de votre NAAN vers une autre organisation qui poursuivra votre travail et prendra en charge votre NAAN.

Y a-t-il des restrictions d‚Äôusage des NAAN¬†?
--------------------------------------------

Oui. Il est important de ne jamais inventer ou utiliser un NAAN qui ne serait pas pr√©sent dans le registre public. Il y a n√©anmoins deux NAAN sp√©cifiques que chacun peut utiliser¬†:

*   ¬´¬†99999¬†¬ª pour des besoins de test, de d√©veloppement ou d‚Äôexp√©rimentation,
*   ¬´¬†12345¬†¬ª pour des exemples d‚ÄôARK non fonctionnels √† utiliser dans la documentation.

Pour les experts, reconna√Ætre les ARK avec de tels NAAN et les √©liminer des rapports de liens bris√©s est ais√©. Malgr√© les efforts des fournisseurs, de tels ARK s‚Äô√©chappent fr√©quemment ¬´¬†dans la nature¬†¬ª, ce qui peut induire en erreur utilisateurs et v√©rificateurs de liens.

ARK et les autres identifiants
==============================

Pourquoi utiliser des ARK plut√¥t que des DOI, par exemple¬†?
-----------------------------------------------------------

*   Pour r√©duire les co√ªts (voir cette section pour plus de pr√©cision)¬†;
*   Pour ne g√©rer que les m√©tadonn√©es que vous voulez¬†;
*   Pour pouvoir cr√©er des identifiants sans m√©tadonn√©es¬†;
*   Pour pouvoir cr√©er un identifiant avant m√™me que votre objet n‚Äôexiste¬†;
*   Pour avoir un identifiant d√®s que vous cr√©ez le premier brouillon de votre objet¬†;
*   Pour garder cet identifiant priv√© pendant que les donn√©es et les m√©tadonn√©es √©voluent, jusqu‚Äô√† ce que vous d√©cidiez (√©ventuellement des ann√©es apr√®s) de le publier ou de le supprimer¬†;
*   Pour conserver cet identifiant jusqu‚Äô√† la publication et peut-√™tre alors attribuer √† la place un autre identifiant tel qu'un DOI¬†;
*   Parce que les ARK, con√ßus pour une utilisation g√©n√©rique et non sp√©cifiquement pour le monde de l‚Äô√©dition, sont naturellement adapt√©s √† l‚Äôidentification d‚Äôobjets physiques comme des √©chantillons ou des stations de recherche¬†;
*   Parce que les r√©solveurs ARK peuvent r√©soudre des identifiants habituellement endommag√©s par des processus de formatage de texte introduisant des traits d'union¬†;
*   Parce que la plupart des ARK portent un caract√®re de contr√¥le Noid qui peut √™tre utilis√© pour d√©tecter toutes les erreurs de transcription courantes (et non certaines d‚Äôentre elles uniquement)¬†;
*   Pour pouvoir cr√©er des identifiants plus courts, car la casse mixte permet des cha√Ænes plus compactes (un plus grand nombre de cha√Ænes d'une longueur donn√©e)¬†;
*   Pour pouvoir changer de prestataire et/ou d'infrastructure sans avoir √† coordonner des transferts de bases de donn√©es avec une autorit√© centrale¬†;
*   Pour pouvoir r√©soudre le probl√®me de la scission d'espace de noms sans perdre le contr√¥le de vos identifiants¬†;
*   Pour lier des identifiants √† diff√©rentes d√©clarations de permanence nuanc√©es¬†;
*   Pour pouvoir ajouter des requ√™tes (par exemple ¬´¬†?lang=en¬†¬ª) lors de la r√©solution de vos identifiants¬†;
*   Pour utiliser une infrastructure ouverte correspondant aux valeurs de votre organisation¬†;
*   Pour permettre d‚Äôacc√©der directement aux objets auxquels vous accordez de l‚Äôimportance et non √† leur page d‚Äôaccueil¬†;
*   Pour cr√©er un seul identifiant qui peut √™tre d√©clin√© en des millions (gr√¢ce au m√©canisme de transfert de pr√©fixe)¬†;
*   Pour acc√©der √† des m√©tadonn√©es adapt√©es et compl√®tes via des inflexions
*   Pour s‚Äôint√©grer ais√©ment dans des API IIIF en utilisant les qualificatifs ARK.

Qu'ont en commun ARK, DOI, Handle, PURL et URN¬†?
------------------------------------------------

Ce sont les principaux types (ou sch√©mas) d'identifiants p√©rennes.¬†Tous existent au moins depuis 2001.Tous sont utilis√©s dans des contextes tels que les profils Data Citation Index‚Ñ†, Wikipedia et ORCID.org. Tous donnent acc√®s √† presque tout type de contenu, qu'il soit num√©rique, physique, abstrait, une personne, un groupe, etc.¬†Ils ont √©galement une structure tr√®s similaire compos√©e de quatre parties, comme le montrent les exemples ci-dessous¬†:¬†

|     |     |
| --- | --- |
| https://n2t.net/_ark_:/99999/12345¬†  <br>¬† ¬†https://_doi_.org/10.99999/12345¬†  <br>https://_handle_.net/10.99999/12345¬†  <br>¬† ¬† ¬†https://_purl_.org/99999/12345¬†  <br>https:///_urn_:99999:12345 | 1.  le protocole (https://) plus un nom d'h√¥te,<br>2.  uniquement pour ARK et URN, un libell√© (¬´¬†ark:¬†¬ª ou ¬´¬†urn:¬†¬ª),<br>3.  l'autorit√© nommante (99999, 10.99999 ou 99999), qui est l'organisation ou le groupe qui a cr√©√© un identifiant particulier,<br>4.  et enfin, le nom, ou l'identifiant local, qu'elle a attribu√© (12345). |

¬†Aucun d‚Äôeux n‚Äôa d'effet r√©el sur la persistance (voir 10 mythes persistants sur les identifiants p√©rennes).

Attendez, vous voulez dire que ARK, DOI, Handle, PURL et URN sont inutiles¬†?
----------------------------------------------------------------------------

Non, ce serait une affirmation excessive. Mais remettons ces formats d‚Äôidentifiant (types) en perspective¬†:

*   Aucun ne prot√®ge contre les principales causes de rupture des liens¬†: baisse de financement, catastrophe naturelle, bouleversement social, guerre, √©limination d√©lib√©r√©e, erreur humaine ou n√©gligence du prestataire¬†;
*   Ils exigent tous de vous, le fournisseur final, de mettre √† jour les tables de redirection √† mesure que les URL changent¬†;
*   Ils identifient tous un contenu susceptible d'avoir √©t√© modifi√© ou supprim√© √† l‚Äôoccasion de visites ult√©rieures¬†;
*   Tous comportent des identifiants bris√©s, et en grande quantit√© (plusieurs milliers)¬†;
*   Ils reposent tous sur le simple syst√®me de la redirection g√©r√© par les serveurs Web depuis 1994 et propos√© gratuitement par des centaines de services de raccourcissement d'URL.

√âtant donn√© le peu de choses que ces formats font pour vous, lorsque vous en choisissez un, vous prendrez probablement en compte des facteurs tels que le co√ªt, le risque et l'ouverture.¬†

En quoi les ARK diff√®rent-ils des identifiants tels que les DOI, les Handle, les PURL et les URN¬†?
--------------------------------------------------------------------------------------------------

### La r√©ponse courte

Les ARK sont les seuls identifiants standards, non cloisonn√©s et non payants que vous pouvez enregistrer et utiliser en environ 48 heures. Les DOI, les Handle et les PURL n√©cessitent une r√©solution et d'autres services exig√©s par leurs syst√®mes centralis√©s respectifs (¬´¬†silos¬†¬ª).

Cela ne veut pas dire que la permanence est gratuite. Rendre un identifiant p√©renne, en tant que fournisseur, vous impose des co√ªts de gestion, d‚Äôh√©bergement, de surveillance et de redirection. Vous pouvez faire ces choses vous-m√™me ou avec l'aide d'un prestataire. Mais avec les ARK, comme avec les URL, vos identifiants ne vous seront pas factur√©s individuellement et vous ne serez pas enferm√©s dans un silo n‚Äôacceptant qu‚Äôun type de r√©solution sp√©cifique et qui refuse donc les autres identifiants.

Les ARK ont la particularit√© d'√™tre d√©centralis√©s. Bien que l‚Äôon puisse obtenir des services de r√©solution d'un r√©solveur ARK global appel√© n2t.net, plus de 90% des ARK dans le monde ne l‚Äôutilisent pas comme r√©solveur. Plus de 600 organisations enregistr√©es √† travers le monde ont cr√©√© par elles-m√™mes environ 3,2 milliards d‚ÄôARK et, √† l'instar des URL, personne n'a jamais pay√© de frais pour les cr√©er. Bien s√ªr, les maintenir n'est pas gratuit. Conserver l‚Äôacc√®s au contenu de mani√®re p√©renne sur le long terme, quel que soit le type d‚Äôidentifiant, n‚Äôest jamais gratuit.

### D‚Äôautres diff√©rences entre ARK, DOI, Handle, PURL et URN

*   ¬∑Les pages d'accueil : les DOI de Crossref et DataCite aboutissent √† des pages d'atterrissage con√ßues pour les √©diteurs, mais pas directement aux objets qui vous tiennent √† c≈ìur. Les ARK peuvent en revanche aboutir directement aux objets qui vous tiennent √† c≈ìur, ce qui est pratique √† la fois pour les machines et pour les utilisateurs, car cela ne demande pas √† l‚Äôhumain une √©tape suppl√©mentaire de navigation pour des t√¢ches courantes telles que
    *   ouvrir le fichier PDF d'un article en lecture,
    *   r√©f√©rencer un fichier image destin√© √† √™tre incorpor√© automatiquement en ligne dans un document,
    *   ou citer un tableur √† utiliser pour l‚Äôanalyse directe des donn√©es par logiciel.
*   Les DOI, les Handle, etc., ne prennent pas en charge le m√©canisme d‚Äô[inflexion](https://wiki.lyrasis.org/pages/viewpage.action?pageId=178880635#id-üá´üá∑FAQsurlesidentifiantsARK-inflexion) d‚ÄôARK permettant l'acc√®s aux m√©tadonn√©es, qu'un identifiant pointe sur un objet ou sur sa page d‚Äôaccueil.
*   Contrairement aux DOI et aux Handle, les ARK n‚Äôont pas de m√©tadonn√©es obligatoires. Les ARK qui n'ont pas encore √©t√© publi√©s sont faciles √† supprimer.
*   Toute chose finira par dispara√Ætre, y compris les noms d‚Äôh√¥te, le Web et le protocole https. Lorsque cette premi√®re partie de l'identifiant cessera d'avoir une signification, seuls les ARK et les URN incluront un libell√© (par exemple, ¬´¬†ark:¬†¬ª) indiquant le type d'identifiant restant.
*   Pour les DOI, les Handle et les PURL, vous devez utiliser leurs r√©solveurs respectifs. Les ARK et les URN vous permettent d'utiliser votre propre r√©solveur.
*   Pour cr√©er des DOI et des Handle, vous devez payer une cotisation et, pour les DOI, des frais par DOI d√©finis par les agences d‚Äôattribution. Il n'y a pas de frais pour les ARK, les PURL et les URN.
*   Pour cr√©er des Handle, vous devez installer et g√©rer un serveur Handle local, ce qui vous oblige √† surveiller, mettre √† jour et d√©panner un autre syst√®me.
*   Bien que vous puissiez utiliser un r√©solveur local ou propos√© par un prestataire pour vos ARK et vos URN, vous pouvez aussi les r√©soudre via le r√©solveur global n2t.net.
*   L'infrastructure de r√©solution URN envisag√©e n'a jamais √©t√© construite. Par cons√©quent, les URN sont actuellement r√©solus comme des URL et il n'y a pas de r√©solveur global et officiel d‚ÄôURN en tant qu'URL. Pour vous inscrire afin de cr√©er des URN, vous devez demander un espace de nom URN.
*   Les ARK poss√®dent des fonctionnalit√©s uniques qui permettent d‚Äôattribuer un identifiant √† des stades pr√©coces de d√©veloppement de l‚Äôobjet¬†: les ARK peuvent √™tre supprim√©s, na√Ætre sans m√©tadonn√©es et exister avec toutes les m√©tadonn√©es que vous souhaitez stocker.

Mais si les ARK peuvent √™tre supprim√©s, comment peut-on leur faire confiance¬†?
------------------------------------------------------------------------------

En r√©alit√©, cela rend les ARK plus fiables. La possibilit√© de supprimer est un √©l√©ment essentiel d‚Äôune saine gestion de collections. Les types d'identifiants autres qu‚ÄôARK interdisent la suppression, en partant du principe que les personnes, lorsqu‚Äôelles sont invit√©es √† intervenir, ne commettront pas d'erreur. Les personnes aux commandes d'un outil de gestion d'identifiants font r√©guli√®rement d‚Äôune simple inadvertance humaine une erreur √† grande √©chelle, m√™me au d√©but de leur engagement. En rendant la correction difficile, nous condamnons les syst√®mes √† tra√Æner ces bourdes pour l‚Äô√©ternit√©.

Bien qu‚Äôils ne soient pas √† l‚Äôabri de telles erreurs, les ARK ont le grand avantage de pouvoir √™tre cr√©√©s et supprim√©s dans l‚Äôombre, en dehors de toute publication, ou d‚Äôengagement de conservation.

Un objet peut-il avoir √† la fois un ARK et un DOI¬†?
---------------------------------------------------

Oui. Parfois, avoir deux identifiants est utile, bien que cela puisse devenir d√©routant quand cela se produit souvent. Beaucoup de gens commencent par attribuer des ARK √† chaque √©l√©ment cr√©√© afin de disposer d'une r√©f√©rence stable d√®s le d√©but, avant de savoir s'ils souhaitent le publier ni m√™me le conserver.

L'objet et ses m√©tadonn√©es √©voluent conjointement, et pour le sous-ensemble d'√©l√©ments que vous souhaitez publier dans des contextes n√©cessitant des DOI, vous pouvez en attribuer au moment de la publication. Si votre ARK est stable et contient des m√©tadonn√©es de base, vous faites d√©j√† tout le n√©cessaire pour obtenir un bon DOI. C‚Äôest en cela que les ARK sont adapt√©s aux objets √† un stade pr√©coce de d√©veloppement.

Pour g√©rer efficacement deux identifiants, il est recommand√© de cr√©er le DOI de mani√®re √† ce qu'il redirige vers l'ARK d'origine. Cela √©limine non seulement la n√©cessit√© de mettre √† jour la redirection DOI, mais maintient √©galement l‚ÄôARK p√©renne pour tous ceux qui l'ont pr√©c√©demment enregistr√© ou marqu√© d'un signet.

Quand dois-je utiliser ARK plut√¥t que DOI, Handle, PURL ou URN¬†?
----------------------------------------------------------------

Il n'y a pas de r√©ponse simple. La question des identifiants (non les choses, mais leurs noms) est complexe, alors si vous entendez des r√©ponses simples ailleurs, m√©fiez-vous des erreurs courantes.

Aucune caract√©ristique d‚ÄôARK, DOI, Handle, PURL ou URN ne les rend plus ou moins adapt√©s √† une discipline, un domaine ou un secteur particuliers. Avec un r√©solveur d'identifiants et un syst√®me de gestion, ils fournissent tous le service essentiel¬†: la r√©solution (tout comme des URL correctement g√©r√©es).

Certaines consid√©rations sp√©cifiques √† un type d'identifiant s'expliquent parfois par le fait que la r√©solution et la gestion de ce type sont verrouill√©es par un prestataire ou un fournisseur de service donn√©s. Par exemple, de nombreuses fonctionnalit√©s et restrictions de PURL ou Handle sont d√©termin√©es par leurs silos d‚Äôadministration respectifs, de m√™me que celles des DOI, bas√©s sur les Handle. En revanche les DOI ont des pratiques de m√©tadonn√©es vari√©es et √©volutives d'une agence d'enregistrement √† l'autre.

Les diff√©rences concr√®tes que nous remarquons, sur les **m√©tadonn√©es**, les pages d‚Äôaccueil et l‚Äôint√©gration d‚Äôoutils (par exemple, les outils de publication), ne sont pas des propri√©t√©s des formats d‚Äôidentifiants en soi, mais des propri√©t√©s de r√©solution, de gestion et de services de citation que divers fournisseurs √©tendent ou limitent. Ces services sont d√©finis √† leur tour par les communaut√©s d‚Äôutilisateurs et de clients. Les services de base reposent sur une base de donn√©es fiable contenant chaque identifiant, ainsi que des √©l√©ments de m√©tadonn√©es (cr√©ateur, titre, date, URL de redirection, etc.) d√©crivant l'objet identifi√©. Les services suppl√©mentaires incluent la v√©rification des liens, la d√©tection des doublons, la g√©n√©ration de rapports et la recherche.

Du berceau au tombeau
=====================

Quand dois-je cr√©er des ARK dans mon processus de travail¬†?
-----------------------------------------------------------

√Ä la naissance de l'objet, ou m√™me avant. Nous nommons g√©n√©ralement nos enfants avant leur naissance, et nous appelons et nous r√©f√©rons √† des objets au stade de la conception, parfois longtemps avant qu'ils ne portent leurs fruits. Selon le niveau de pr√©cision de vos pr√©visions, vos objets √† na√Ætre peuvent avoir des ARK fonctionnels qui fournissent un substitut appropri√© et renvoient des m√©tadonn√©es riches, y compris des d√©clarations de permanence.

La seule mise en garde consiste √† √™tre prudent lors de la publication d‚ÄôARK dont les perspectives √† long terme sont incertaines. Certains syst√®mes de gestion d'identifiant poss√®dent des fonctionnalit√©s permettant de g√©rer et de r√©soudre les identifiants non valid√©s (par exemple, EZID dispose d‚Äôun statut ¬´¬†r√©serv√©¬†¬ª). Plus il y a de personnes qui connaissent un ARK, plus il est difficile de le supprimer.

Comment se fait-il que les ARK puissent √™tre faciles √† supprimer¬†?
------------------------------------------------------------------

Si personne d‚Äôautre que vous ne conna√Æt un identifiant, rien ne vous emp√™che de le supprimer ou de le retirer. Pour sch√©matiser, un identifiant est en r√©alit√© l‚Äôaffirmation qu'une cha√Æne de caract√®res donn√©e est associ√©e √† une chose sp√©cifique. Moins vous en parlez, plus il est facile de supprimer cette affirmation. Si vous cr√©ez un URL et ne le partagez qu'avec vos coll√®gues les plus proches, il sera beaucoup plus facile de le retirer que s‚Äôil apparaissait pendant un mois sur un site Web public, √† partir duquel il aurait √©t√© collect√© par les moteurs de recherche Internet. En revanche, il est difficile de supprimer les DOI et les Handle, car une fois enregistr√©s et r√©solus, ils sont effectivement diffus√©s dans le monde entier.

Les ARK se comportent comme des URL √† cet √©gard. Les fournisseurs sont libres de cr√©er et de partager des ARK de mani√®re restreinte, auquel cas ils sont faciles √† supprimer.

Cela peut surprendre, mais m√™me s‚Äôils sont plus largement diffus√©s, les ARK peuvent √™tre accompagn√©es de d√©clarations de permanence qui indiquent quel niveau d‚Äôengagement ‚Äì √©lev√© ou bas ‚Äì on garantit. Les ARK ont √©t√© con√ßus pour disposer d‚Äôune palette de d√©clarations de permanence, mais celles-ci ne sont en aucun cas exhaustives pour des identifiants et des objets qui pr√©sentent une grande vari√©t√© de ¬´¬†saveurs¬†¬ª d‚Äôengagement. C'est pourquoi on parle des ARK comme d‚Äôidentifiants de haute performance adapt√©s √† la permanence plut√¥t que comme des ¬´¬†identifiants p√©rennes¬†¬ª.

Enfin, les gens commettent des erreurs. Des ARK, des DOI, des Handle, des PURL et des URN sont parfois diffus√©s par erreur et doivent √™tre retir√©s. Lorsque cela se produit, la meilleure option du fournisseur consiste √† r√©soudre l'identifiant retir√© en donnant acc√®s √† une page ¬´¬†fant√¥me¬†¬ª qui explique et √©ventuellement pr√©sente des excuses pour le d√©sagr√©ment occasionn√©. Contrairement aux id√©es re√ßues, les identifiants p√©rennes n‚Äôoffrent aucune garantie.

Pourquoi dit-on que les ARK sont adapt√©s √† des objets dans un stade pr√©coce de d√©veloppement¬†?
----------------------------------------------------------------------------------------------

On a besoin d'identifiants avant de savoir exactement √† quel objet ils se r√©f√®rent, ou s'ils font r√©f√©rence √† quelque chose qui m√©rite d'√™tre gard√©. Un identifiant exigeant des m√©tadonn√©es abouties ne peut pas √™tre cr√©√© au d√©but du d√©veloppement car l'objet est mal connu. C‚Äôest pourquoi les cr√©ateurs d'objets attribuent presque toujours initialement des identifiants sans exigences de m√©tadonn√©es, tels que des URL ou des ARK.

En commen√ßant par attribuer un ARK, vous b√©n√©ficiez de la possibilit√© de conserver l'identifiant d'origine de la naissance √† la diffusion publique alors que l'objet et ses m√©tadonn√©es √©voluent. De nombreux objets passent par des phases de d√©veloppement et de correction intensives, durant parfois plusieurs ann√©es, au cours desquelles ils sont trop immatures pour r√©pondre √† la plupart des exigences en mati√®re de m√©tadonn√©es. N√©anmoins, chaque objet a besoin d‚Äôune sorte d‚Äôidentifiant, de la conception √† la maturit√©, cette derni√®re consistant en une publication et en une am√©lioration, ou en un abandon. Il est facile d‚Äôabandonner des ARK qui n‚Äôont pas √©t√© d√©voil√©s au public.

Comme l'objet lui-m√™me, les √©l√©ments de m√©tadonn√©es ont besoin de flexibilit√© pour se d√©velopper et √©voluer avec le temps¬†:

*   Au moment de la pr√©vision ; il suffit alors d'un **identifiant**,
*   √† la naissance, lorsque sa premi√®re repr√©sentation num√©rique n√©cessite une **URL de redirection**,
*   apr√®s la premi√®re analyse, lorsque son sens et un titre provisoire apparaissent,
*   lors de la cr√©ation de dizaines d'√©l√©ments de m√©tadonn√©es sp√©cifiques √† une discipline qui contreviennent √† la plupart des normes de m√©tadonn√©es, √† l'exception de la v√¥tre,
*   pendant le post-traitement par un coll√®gue dont vous allez ajouter le nom en tant que contributeur suppl√©mentaire,
*   lorsque les premi√®res r√©actions bas√©es sur l'identifiant tweet√© s‚Äôav√®rent √™tre des observations fondamentales de la part d‚Äôun nouveau contributeur,
*   et ainsi de suite jusqu'√† l'archivage, l'abandon, la diffusion publique, la correction, la r√©vision, l'am√©lioration, etc.

Contrairement aux DOI Crossref et DataCite, qui n√©cessitent des m√©tadonn√©es sp√©cifiques (voir, par exemple, le sch√©ma DataCite), les ARK n‚Äôexercent aucune contrainte sur ces activit√©s. Mieux encore, le r√©solveur N2T.net permet effectivement de les prendre toutes en compte.

Si les ARK ne les exigent pas, pourquoi se donner la peine de cr√©er des m√©tadonn√©es¬†?
-------------------------------------------------------------------------------------

La cr√©ation de m√©tadonn√©es (informations suppl√©mentaires associ√©es √† ou d√©crivant un objet) pr√©sente plusieurs avantages essentiels. Premi√®rement, quelle que soit la cible de l'ARK - une page d'accueil ou un fichier - les m√©tadonn√©es fournissent aux utilisateurs des informations essentielles sur l'objet, telles que des r√©f√©rences √† des versions plus r√©centes, une date de cr√©ation, une provenance, etc. Dans le cas des ARK, les m√©tadonn√©es sont g√©n√©ralement accessibles via des inflexions.

Les m√©tadonn√©es facilitent vraiment l'utilisation d'identifiants opaques, qui ne r√©v√®lent aucun indice sur ce qu'ils identifient. En l'absence de m√©tadonn√©es, vous √™tes oblig√© d'acc√©der √† l'objet lui-m√™me pour vous rappeler de quoi il s'agit et √©galement pour vous assurer que vous acc√©dez au bon objet. De plus, la divergence entre les m√©tadonn√©es renvoy√©es et l'objet consult√© aide tout le monde √† d√©tecter des modifications ou des erreurs d'identification.

Les m√©tadonn√©es sont adapt√©es aux objets aboutis et sont beaucoup moins importantes pour les objets et les identifiants immatures que pour ceux qui ont √©t√© publi√©s. Avoir des m√©tadonn√©es d√©montre la cr√©dibilit√© du fournisseur et son engagement vis-√†-vis d‚Äôidentifiants de haute performance. Tous les fournisseurs ne sont pas √† la hauteur de cette t√¢che.

Cela n'est pas n√©cessairement cher. Les m√©tadonn√©es cr√©√©es √† partir de z√©ro peuvent √™tre co√ªteuses, mais elles sont g√©n√©ralement produites et g√©r√©es par des fournisseurs d'objets, auquel cas elles peuvent √™tre exploit√©es efficacement pour les identifiants. Id√©alement, pour une permanence maximale, les m√©tadonn√©es principales (g√©r√©es par les fournisseurs d'objet) devraient √™tre r√©pliqu√©es dans des syst√®mes ind√©pendants afin qu'il soit difficile pour une personne d'alt√©rer de mani√®re ind√©tectable les associations d'identifiants. Par exemple, les entrep√¥ts d'objets num√©riques qui obtiennent des ARK et des DOI du service EZID stockent une copie de leurs m√©tadonn√©es dans EZID, qui en stocke une autre copie dans le r√©solveur N2T.net.

Quelles m√©tadonn√©es sont recommand√©es pour les ARK¬†?
----------------------------------------------------

La question des m√©tadonn√©es est complexe pour tous les identifiants, pas seulement pour ARK. Il existe des milliers de normes selon les domaines et les types d‚Äôobjets, la plupart d‚Äôentre elles se recoupant tout en se contredisant, et chacune d‚Äôelles est appliqu√©e conform√©ment aux pratiques locales de l‚Äôorganisation avec diff√©rents niveaux de conformit√©. Le choix ou la cr√©ation d'une sp√©cification pour vos m√©tadonn√©es d√©pend de facteurs tels que

*   si vous g√©rez actuellement des m√©tadonn√©es (astuce¬†: gardez-les, sauf si vous avez une bonne raison de changer),
*   si vous souhaitez publier officiellement des objets (astuce¬†: pr√©parez-vous √† fournir l'auteur, le titre, la date, l'√©diteur / l‚Äôinstitution de conservation et le type d'objet),
*   les exigences et les capacit√©s de votre r√©solveur (astuce¬†: votre personnel informatique ou votre prestataire pourrait avoir ses propres exigences),
*   ou si vous souhaitez stocker des √©l√©ments de m√©tadonn√©es non standard (astuce¬†: N2T le permet, contrairement √† la plupart des standards et des fournisseurs).

Une interop√©rabilit√© fiable entre domaines peut s'av√©rer difficile, mais Dublin Core, DataCite, Schema.org et Dublin Kernel sont des sp√©cifications de m√©tadonn√©es standard √† envisager pour une utilisation conjointe avec ARK.

Pourquoi est-ce que je vois des m√©tadonn√©es ARK avec les termes ¬´¬†qui¬†¬ª, ¬´¬†quoi¬†¬ª, ¬´¬†quand¬†¬ª, ¬´¬†o√π¬†¬ª¬†?
------------------------------------------------------------------------------------------------------

¬†Les ARK ont √©t√© con√ßus pour identifier n'importe quoi, pas seulement des choses qui sont, par exemple, publiables ou achetables. Il n‚Äôest pas naturel de mod√©liser un fossile, un √©chantillon de tissu, un terme de vocabulaire ou Marie Curie comme si chacun avait un auteur, un titre, un √©diteur, un copyright et un prix. Au lieu de quoi, depuis 2001, un ARK est g√©n√©ralement accompagn√© d‚Äôun noyau de m√©tadonn√©es g√©n√©riques de quatre √©l√©ments (Dublin Kernel, inspir√© de Dublin Core (DC)), suivi de tout autre √©l√©ment de m√©tadonn√©e (paire attribut / valeur) que le fournisseur souhaite donner.¬†Ce noyau de m√©tadonn√©es est structur√© pour r√©pondre aux questions suivantes¬†: ¬´¬†qui¬†?¬†¬ª, ¬´¬†quoi¬†?¬†¬ª, ¬´¬†quand¬†?¬†¬ª et ¬´¬†o√π¬†?¬†¬ª sur l'expression ou le ¬´¬†r√©cit¬†¬ª d'un objet¬†:

*   qui l'a ¬´¬†dit¬†¬ª (semblable aux √©l√©ments DC Cr√©ateur, Contributeur et √âditeur, mais √©galement √† inventeur, d√©couvreur, r√©alisateur, etc.),
*   comment s'appelle le ¬´¬†dit¬†¬ª (semblable √† l‚Äô√©l√©ment DC Titre, mais aussi √† Num√©roDEchantillon, CodeBarreObjet, etc.),
*   quand il a √©t√© ¬´¬†dit¬†¬ª (similaire √† l‚Äô√©l√©ment DC Date, mais inclut les intervalles de dates, les dates approximative et celles avant l‚Äô√®re chr√©tienne),
*   o√π le ¬´¬†dit¬†¬ª peut √™tre trouv√© (similaire √† l‚Äô√©l√©ment DC Identifiant, mais g√©n√©ralement inutile car il s'agit de l'ARK lui-m√™me).

Il y a beaucoup √† dire sur les m√©tadonn√©es et ARK (par exemple, sur l‚Äôapplication des √©l√©ments ¬´¬†qui¬†¬ª, ¬´¬†quoi¬†¬ª, ¬´¬†quand¬†¬ª et ¬´¬†o√π¬†¬ª au contenu d'une biographie, ou comment une institution de conservation pr√©voit de maintenir un jeu de donn√©es). Des recommandations suppl√©mentaires sur les m√©tadonn√©es et ARK seront disponibles sur arks.org. D'autres √©l√©ments sont essentiels, tels que

*   comment il a √©t√© ¬´¬†dit¬†¬ª (similaire √† un √©l√©ment ResourceType), ce qui peut d√©terminer des alignements avec des sp√©cifications de m√©tadonn√©es externes et des √©l√©ments suppl√©mentaires
*   URL cible de la redirection, g√©n√©ralement stock√©e en tant qu'√©l√©ment distinct des m√©tadonn√©es
*   √©l√©ments de d√©claration de permanence, pour exprimer le niveau d'un engagement de conservation.

Qu'est-ce qu'une ¬´¬†inflexion¬†¬ª et en quoi diff√®re-t-elle de la ¬´¬†n√©gociation de contenu¬†¬ª¬†?
-------------------------------------------------------------------------------------------

Une inflexion est une d√©sinence √† la fin d'un mot qui exprime un changement de sens. Cela permet de d√©finir un mot tel que ¬´¬†aller¬†¬ª sans d√©finir √©galement ¬´¬†allez¬†¬ª et ¬´¬†allons¬†¬ª. Pour un ARK qui m√®ne √† un objet, ajouter simplement un ¬´¬†?¬†¬ª √† la fin (¬´¬†?¬†¬ª est un exemple d'inflexion ARK) nous permet de demander des m√©tadonn√©es sans avoir √† d√©finir un identifiant distinct pour les m√©tadonn√©es de l'objet. Cette technique simple peut √™tre utilis√©e par un humain avec un navigateur Web. Le r√©solveur N2T prend en charge les inflexions et la n√©gociation de contenu.

La n√©gociation de contenu pour les m√©tadonn√©es est une technique logicielle permettant de demander d'autres formats d'objet, tels que le format PDF ou RTF d'un fichier HTML. Bien que cela n‚Äôait pas √©t√© con√ßu pour cela, la ¬´¬†n√©gociation de contenu¬†¬ª originelle √©tait d√©tourn√©e dans certains cas pour demander des m√©tadonn√©es, en consid√©rant curieusement que les formats de fichier souvent utilis√©s pour exprimer des m√©tadonn√©es ne pouvaient v√©hiculer que des m√©tadonn√©es et jamais des objets √† part enti√®re. Contrairement aux inflexions, la ¬´¬†n√©gociation de contenu pour les m√©tadonn√©es¬†¬ª ne fonctionne pas du tout pour les objets repr√©sent√©s dans ces formats (formats dont la liste ne cesse de s'allonger et n'est connue que par convention tacite) et n'est pas assez simple d‚Äôutilisation pour la plupart des usagers humains.

Bien que les inflexions soient g√©n√©ralement associ√©es aux ARK, elles ne leur sont pas r√©serv√©es. Contrairement aux id√©es re√ßues, les identifiants ne font rien¬†; ce sont leurs r√©solveurs qui g√®rent ou non des fonctionnalit√©s. Ainsi, par exemple, les inflexions et le ¬´¬†transfert de suffixe¬†¬ª sont pris en charge par n2t.net pour tous les types d‚Äôidentifiants, mais pas par doi.org ni par handle.net (qui dispose d‚Äôune fonctionnalit√© similaire appel√©e ¬´¬†Template Handles¬†¬ª) pour aucun type d‚Äôidentifiant.

Qu'entendez-vous par ¬´ silos ¬ª ?
--------------------------------

En r√®gle g√©n√©rale, les services bas√©s sur des formats d‚Äôidentifiant sont con√ßus comme des silos, ou des plates-formes ferm√©es, g√©rant un type d'identifiant particulier tel que Handle, DOI ou PURL. Chaque silo remplit les m√™mes fonctions principales - associer des noms (cha√Ænes de caract√®res d'identifiant) √† des choses (objets ou m√©tadonn√©es). L'exclusion de tous les types d'identifiant, sauf un, peut aider √† conqu√©rir des march√©s, mais elle est contre-productive et exclusive. Elle n√©cessite la reconstruction du m√™me ensemble de services pour chaque format et viole les principes de base de l‚Äôouverture.

√Ä l‚Äôinverse, le r√©solveur N2T (Name-to-Thing) et l'interface de gestion EZID (¬´¬†identifiants simples¬†¬ª) ont √©t√© con√ßus pour g√©rer tout identifiant. Les efforts consacr√©s √† toute nouvelle fonctionnalit√© peuvent √™tre √©tendus avec profit √† tous les types, ce qui permet une surprenante flexibilit√©. Par exemple, les ARK sont souvent stock√©s dans EZID avec des m√©tadonn√©es DOI, et chaque DOI stock√© dans N2T peut b√©n√©ficier des fonctionnalit√©s de r√©solution ARK telles que les inflexions et le ¬´¬†transfert de suffixe¬†¬ª, qui ne sont pas disponibles via le r√©solveur DOI principal (doi.org).¬†

  

  

  

  

  

  

  

Attachments:
------------

![](images/icons/bullet_blue.gif) [image2019-10-25\_6-5-7.png](attachments/178880619/178880620.png) (image/png)  
![](images/icons/bullet_blue.gif) [www.familysearch.org:ark::61903:2:1:M4MZ-NDF.png](attachments/178880619/178880621.png) (image/png)  
![](images/icons/bullet_blue.gif) [Grande\_Bible\_historiale\_compleÃÅteÃÅe\_MaiÃÇtre\_du\_btv1b8449691v\_31.jpeg](attachments/178880619/178880622.jpeg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [Firebird.png](attachments/178880619/178880623.png) (image/png)  
![](images/icons/bullet_blue.gif) [IsaacNewton.png](attachments/178880619/178880624.png) (image/png)  
![](images/icons/bullet_blue.gif) [UtahCactus.png](attachments/178880619/178880625.png) (image/png)  
![](images/icons/bullet_blue.gif) [SmithsonianFlower.png](attachments/178880619/178880626.png) (image/png)  
![](images/icons/bullet_blue.gif) [MarlboroChili.png](attachments/178880619/178880627.png) (image/png)  
![](images/icons/bullet_blue.gif) [AdaLovelace.png](attachments/178880619/178880628.png) (image/png)  
![](images/icons/bullet_blue.gif) [n2t\_arch\_v5.jpg](attachments/178880619/178880629.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [image2019-11-19\_10-20-10.png](attachments/178880619/178880631.png) (image/png)  
![](images/icons/bullet_blue.gif) [image2019-11-19\_10-20-52.png](attachments/178880619/178880633.png) (image/png)  
![](images/icons/bullet_blue.gif) [image2020-4-28\_18-17-21.png](attachments/178880619/187171998.png) (image/png)
