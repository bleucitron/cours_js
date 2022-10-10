# Préliminaires

> Quelques outils de base

Quel que soit le langage de programmation, écrire du code signifie toujours écrire des instructions que l'on veut faire exécuter à une machine.

Ces instructions sont des combinaisons d'**expressions** et constituent l'essentiel du code que l'on écrit.

```js
1 + 1 // une expression
if (a === 2) a = 3 + 10 // une instruction
```

## Opérations basiques

Les expressions sont souvent des calculs mathématiques sur des nombres.

```js
1 + 1
2 - 5
4 * 10
100 / 3
5 % 2 // reste par la division entière
```

Il est également possible de concaténer des strings avec l'opérateur `+`.

```js
'Rom' + 'ain' // 'Romain'
```

## Blocks

On appelle l'ensemble des instructions entre 2 accolades `{}` un *block*.

```js
{
  1 + 1;
  2 - 5;
  4 * 10;
}
```

On verra qu'il y a plusieurs types de blocks (`if`, `for`, `while`, `switch`, `function`, ...).

## Logs

Parfois, lorsqu'on écrit du code, on a besoin d'afficher des informations sur ce qui est en train de se passer lors de l'exécution.

Pour cela on peut utiliser [`console.log()`](https://developer.mozilla.org/fr/docs/Web/API/console/log), en lui fournissant l'information à afficher.

```js
console.log('Bonjour');
console.log(3 + 10);
```

## Commentaires

Il arrive également de devoir écrire des commentaires au sein de notre code, pour détailler en langage humain certaines parties.

```js
1 + 10 // le résultat est 11

// Ceci est un commentaire sur une ligne

/**
 * Ceci est un commentaire sur
 * plusieurs lignes
 */
```

Les commentaires ne sont pas des expressions, et ne sont donc pas pris en compte par les machines.

## `;` ou pas ?

Dans certains langages, il est nécessaire de terminer toutes les instructions par un `;`. Cela indique à la machine que l'instruction est terminée.

En Javascript, **il n'y a pas d'obligation d'utiliser `;`**. On peut écrire indifféremment:
```js
1 + 1
1 + 1;
```

Néanmoins, pour simplifier la lecture, il est recommandé de rester cohérent dans l'utilisation ou non du point virgule.

## Le mode strict

Depuis 2009, le [mode strict](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode) a été introduction dans le standard.

Il permet d'éviter certaines erreurs ou mauvaises pratiques liées à la nature même de Javascript.

```js
'use strict'; // à ajouter en haut d'un fichier .js
```

**Il est fortement recommandé de l'activer dans tous nos fichiers**.

---

### _À suivre: [Assignations de variables](./1-1_assignments.md)_
