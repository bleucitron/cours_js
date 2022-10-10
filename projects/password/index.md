# Mot de passe

### 1) `random`

Créer une fonction `random` qui:
- prend un entier `nb` en entrée
- renvoie un nombre aléatoire entre 0 (inclus) et `nb` (exclus)

Utiliser [`Math.random`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
et [`Math.floor`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).


### 2) `getLetter`

Créer une fonction `getLetter` qui renvoie une lettre aléatoire parmi les lettres de l'alphabet.

Vous pouvez utiliser la string `letters`:
```js
const letters = 'abcdefghijklmnopqrstuvwxyz';
```

Utiliser `random`.

### 3) `makePassword`

Créer une fonction `makePassword` qui:
- en entrée prend un objet `options`, dont les champs sont `size` et `withNumbers`
- si `options` n'est pas fourni, ou si `size` ou `withNumbers` ne sont pas fournies dans les `options`, considérer que `size` vaut `10` et `withNumbers` vaut `true`
- renvoie une chaine de caractères avec des lettres aléatoires, selon les règles ci-dessous
- utiliser une boucle for et la fonction `getLetter`

Règles:
- Si `withNumber` est vrai, faire en sorte qu'un caractère sur deux soit un nombre entre 0 et 9 au hasard
- Si `size` est plus petit que 8, logguer un message d'avertissement, mais créer le password quand même
