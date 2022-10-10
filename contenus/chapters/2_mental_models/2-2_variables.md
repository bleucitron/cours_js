# Valeurs et variables

_Basé sur [Just Javascript](https://justjavascript.com/), de [Dan Abramov](https://twitter.com/dan_abramov)._

```js
let thing = 'gateau';
thing[0] = 'r';
console.log(thing);
```

### _<span style="color:royalblue">À votre avis ? Quel est votre cheminement mental ?</span>_

Le code n'affichera jamais `'rateau'`.

## Les valeurs primitives sont immutables

On ne peut **jamais** changer une valeur primitive. Comme une étoile lointaine, on doit se contenter de l'observer.

On appelle ça être **immutable**.

On peut en revanche tout à fait muter des objets.

```js
let name = 'john';
name[0] = 'p';

console.log(name); // 'john'

let beatles = ['john', 'paul', 'george', 'ringo'];
beatles[0] = 'romain';

console.log(beatles); // ['romain', 'paul', 'george', 'ringo']
```

## Oui, mais...

```js
let name = 'cassius';
name = 'muhammad';
console.log(name); // ?
```

Dans ce cas, la console affiche bien `muhammad`.

Et ce résultat n'a pas grand chose à voir avec l'immutabilité des valeurs primitives.

## Les variables sont des câbles

Les variables ne sont pas des valeurs.

**Les variables pointent vers des valeurs**.

Il est possible de faire 2 choses avec une variable:

- assigner
- lire

### Assigner une valeur à une variable

```js
let name = 'romain';
let age = 30 + 4;
```

La partie gauche d'une assignation doit être un câble.

La partie droite une expression.

### Lire la valeur d'une variable

```js
console.log(name); // romain
```

Ici, on ne passe pas la variable à `console.log`.

**On passe toujours les valeurs**.

Écrire `name`, c'est en réalité poser une question à Javascript:

- "Quelle est la valeur pointée par `name` ?"
- "`'romain'`"

**Les mots sont importants**.

Surtout dans votre modèle mental.

Dans le cas suivant, l'usage de mauvais mots peut induire en erreur.

```js
function double(x) {
  x = x * 2;
}

let money = 10;
double(money);
console.log(money); // ?
```

## Pas de boîtes !

Souvent on utilise le mot "boîte" pour expliquer les variables.

> ~~Une variable est une boîte dans laquelle je mets une valeur.~~

Certains concepts en Javascript s'expliquent mal avec la notion de boîtes.

La notion de câbles est plus adaptée.

Notre univers ne va donc se composer que de câbles.

---

### _<span style="color:royalblue">Dessiner sur une feuille tout ce qu'il se passe dans ces quelques lignes:</span>_

```js
let x = 10;
let y = x;
x = 0;
```

## Les fondations de l'univers

- Notre univers est plein de valeurs
- Chaque valeur appartient à un type
- Certains de ces types sont primitifs
- Les valeurs de type primitif sont immutables
- Les variables sont des câbles qui partent d'un nom et pointent vers une valeur

---

# _**À vos crayons !!!**_

- Faire les exercices du fichier [`/exos/1-3_variables.md`](../../../exos/1_mental_models/1-3_variables.md)

---

#### _La suite: [Compter les valeurs](./2-3_count.md)_
