# Pokemon

On va utiliser la [PokeAPI](https://pokeapi.co/).

Créer une fonction `getPokemons` qui
- prend en argument un nombre `number` représentant la génération, ainsi qu'une string optionelle `lang` représentant la langue
- renvoie la liste de tous les Pokemons de cette génération sous la forme `{id, name, image}`
  - l'`id` est l'identifiant du Pokemon
  - le `name` doit être dans la langue demandée
  - l'`image` est le `sprites.front_default`
- la liste doit être ordonnée par `id`
- si la `lang` n'est pas fournie ou n'existe pas, renvoie le nom anglais par défaut

```js
const url = `https://pokeapi.co/api/v2/`
```

Conseils:
- utiliser le endpoint `/generation/{id}` pour avoir les infos d'une génération
- les infos d'une génération contiennent des infos partielles sur les `pokemon_species` de la génération
- utiliser le endpoint `/pokemon/{name}` pour avoir les infos d'un spécimen (utile pour l'`image`)
- utiliser le endpoint `/pokemon_species/{name}` pour avoir les infos complètes d'une espèce
- une interface visuelle n'est pas demandée
