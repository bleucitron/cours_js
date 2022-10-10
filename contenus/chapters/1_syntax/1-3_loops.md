# Boucles

> Éviter de réecrire plusieurs fois la même chose

Exécuter plusieurs fois la même instruction sans en répéter le code est un motif classique dans tout langage de programmation.

On appelle ça des boucles.

## [Boucles `for`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for)

**Une boucle `for` permet de boucler sur un nombre prédéfini d'itérations.**

> "Fais des tours de terrains et arrête toi quand tu en as fait 10"

Trois choses sont nécessaires pour définir une boucle `for`:
- un indice de boucle (souvent `i`) avec une valeur de départ
- une condition d'arrêt de la boucle dépendant de notre indice
- une expression faisant évoluer notre indice après chaque intération

À chaque itération de
la boucle, la condition est testée, si celle-ci est vraie, alors les instructions du block sont exécutées, puis la valeur de l'indice est modifiée en fonction de notre expression.

```js
for (let i = 1; i < 10; i++) {
  console.log(i);
}
// en commencant par 1, et tant que i est strictement plus petit que 10, on recommence au augmentant de 1 la valeur de i

for (let j = 5; j <= 50; j += 5) {
  console.log(j);
}
// en commencant par 5, et tant que j est plus petit ou égal à 50, on recommence au augmentant de 5 la valeur de j
```

On peut également faire diminuer l'indice, en faisant attention à notre valeur de départ et notre condition d'arrêt.

```js
for (let i = 10; i > 0; i--) {
  console.log(i);
}
// en commencant par 10, et tant que i est strictement plus grand que 0, on recommence au diminuant de 1 la valeur de i

for (let j = 1000; j >= 500; j -= 10) {
  console.log(j);
}
// en commencant par 1000, et tant que j est plus grand ou égal à 500, on recommence au diminuant de 10 la valeur de j
```

> On utilise souvent des boucles pour parcourir des tableaux. Dans ce cas, on préfère souvent utiliser un boucle `for of`, ou encore la syntaxe fonctionnelle des tableaux.

Si on a besoin que d'une seule instruction, il est également possible d'écrire une boucle `for` sans block.

## [Boucles `while`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/while)

Parfois une boucle `for` ne permet pas d'écrire notre logique, particulièrement lorsqu'on ne connait pas à l'avance le nombre d'itérations

**Une boucle `while` permet de boucler sur un nombre indéfini d'itérations.**

> "Fais des tours de terrains et arrête toi quand tes chaussures sont trouées"

Une seule chose est nécessaire pour définir une boucle `while`: une condition d'arrêt.

```js
let money = 1000;

while (money > 0) {
  money -= 14
}
// tant que money est strictement plus grand que 0, exécuter l'instruction
```

Si on a besoin que d'une seule instruction, il est également possible d'écrire une boucle `while` sans block.

```js
let money = 20;

while (money > 0) money -= 3
```

> Il est toujours possible d'écrire une boucle `for` sous la forme d'une boucle `while`, mais pas l'inverse.

On peut aussi [écrire une boucle `do while` en commencant par l'instruction](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/do...while). L'instruction sera alors au moins exécutée une fois.

```js
let money = 1000;

do {
  money -= 14
}
while (money > 0)
```

**Les boucles `while` sont généralement déconseillées**, car il est facile d'écrire des boucles infinies, qui feront planter notre programme.

En effet, si la condition d'arrêt est mal définie, ou si on oublie de faire évoluer notre condition d'arrêt, la boucle ne s'arrêtera jamais.

---

## À retenir

- il existe deux types de boucles: `for` et `while`
- une boucle `for` permet de boucler sur un nombre prédéfini d'itérations
- une boucle `while` permet de boucler sur un nombre indéfini d'itérations
- une boucle `while` peut facilement être mal écrite, et devenir infinie

---

## Exercices

- Ouvrir le dossier `/exos/1_syntax/1-3_loops`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

---

### _À suivre: [Fonctions](./1-4_functions.md)_
