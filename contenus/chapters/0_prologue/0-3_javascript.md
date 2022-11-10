# Javascript

## Généralités

Javascript est un langage de programmation interprété, faiblement typé, single
threadé, et asynchrone.

- Interprété = non compilé _(encore que...)_
- Faiblement typé = des types existent, mais on peut faire ce qu'on veut
  _(coucou Typescript...)_
- Single threadé = ne peut pas paralléliser des tâches _(mais il est...)_
- Asynchrone = est capable d'utiliser des instructions non bloquantes _(merci
  l'Event Loop...)_

## Un peu d'histoire

Javascript a été créé en décembre 1995 en seulement **10 jours :scream:** par
[Brendan Eich](https://fr.wikipedia.org/wiki/Brendan_Eich), qui travaillait à
l'époque pour [Netscape](https://fr.wikipedia.org/wiki/Netscape).

**Historiquement, Javascript est un langage client**, qui s'éxécute uniquement
dans le navigateur. L'objectif initial était de permettre d'ajouter de
l'interactivité avec les éléments d'une page (qui n'étaient que en HTML et CSS).

**Aujourd'hui, on peut également écrire du code serveur avec Javascript**, grâce
notamment à [NodeJS](https://fr.wikipedia.org/wiki/Node.js), ou
[Deno](https://deno.land/).

Hormis l'expérimental
[WebAssembly](https://developer.mozilla.org/fr/docs/WebAssembly), **Javascript
est le seul langage à réellement tourner dans un navigateur**.

Javascript a la mauvaise réputation d'être **un langage "cassé"**,
[qui ne sera jamais vraiment réparé](https://www.youtube.com/watch?v=7eNFQqMSxtU).

La plupart de la documentation pertinente sur Javascript est sur
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview).

## Standards

### Fonctionnement des standards

- **Standards**: écrivent le futur du langage
- **Implémenteurs**: mettent en pratique les standards dans les navigateurs
- **Développeurs**: utilisent les nouvelles fonctionnalités du standard pour améliorer les sites
- **Utilisateurs**: ne se rendent compte de rien, mais leur site préféré marche mieux

En pratique, le marché des navigateurs est concurrentiel. Du coup ce sont souvent les navigateurs qui innovent, et proposent des évolutions du langage non standards.

Pour ne pas perdre du terrain, les autres navigateurs se mettent à jour, et proposent également les mêmes fonctionnalités que leurs concurrents. Un standard apparaît de facto, et finit par être intégré au standard officiel.

De même, un navigateur ne prendra pas le risque de corriger une faille historique de Javascript, car de nombreux sites pourraient être impactés, et donc "casser". Et si c'était le cas, de nombreux utilisateurs se déporteraient vers des navigateurs n'ayant pas corrigé cette faille.

Un status quo est donc en place: on ne corrige pas des failles de Javascript, on rajoute des garde-fous.

### Historique succinct

- ECMAScript 3 (1999)
- Pas de ECMAScript 4 !
- ECMAScript 5 (2009)
- ECMAScript 6 / 2015
- ECMAScript 2016
- ECMAScript 2017
- ECMAScript ...

---

### _À suivre: [La syntaxe JS](../1_syntax/Readme.md)_
