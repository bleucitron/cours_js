# Un peu d'histoire

- S'execute dans le navigateur, côté client.
- A quoi sert JavaScript ?
- Javascript est cassé...
- ... et ne [sera jamais réparé](https://www.youtube.com/watch?v=7eNFQqMSxtU)
- [Rapide survol par MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview)

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

### Compatibilité des navigateurs

- [Navigateurs](https://kangax.github.io/compat-table/es6/)
- [Node](http://node.green/)

_Les versions de JavaScript (1.7, 1.7.5, 1.8, etc.) n'existent pas (ce sont numéros de version du moteur JS de Firefox)_

#### _La suite: [Le modèle mental](./1-1_mental_models.md)_
