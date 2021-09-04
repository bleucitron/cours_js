# Qualité de code

## Linting

Sert à écrire du code propre, selon les conventions que l'on choisit.

On va utiliser [Eslint](https://eslint.org/).

```bash
npm i eslint --save-dev

# on initialise les règles
npx eslint --init
```

Dans `package.json`

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

Lancer le linter.

```bash
npm run lint
```

### Ignorer les fichiers superflus

Définir une liste de fichiers dans un `.eslintignore`.

### Règles

À l'initialisation, on choisit (ou pas) des règles par défaut.

On peut choisir d'ajuster les règles dans `.eslintrc`.

Les règles peuvent être désactivées (`"off"`), définies en avertissement
(`"warn"`) ou erreur (`"error"`). Elles peuvent également être
[configurées](https://eslint.org/docs/rules/).

```json
{
  "extends": "eslint:recommended",
  "rules": {
    "ma-règle": "off",
    "ma-règle-1": "warn",
    "ma-règle-2": "error",
    "ma-règle-3": ["error", options]
  }
}
```

## Tests

Plusieurs frameworks sont disponibles:

- [Jest](https://jestjs.io/)
- [Jasmine](https://jasmine.github.io/)
- [Mocha](https://mochajs.org/) + [Chai](https://www.chaijs.com/)

Pour lancer des tests dans un vrai navigateur, utiliser
[Karma](https://karma-runner.github.io/2.0/index.html).

```bash
npm i jest --save-dev
```

Dans `package.json`

```json
{
  "scripts": {
    "test": "jest ."
  }
}
```

Lancer les tests.

```bash
npm run test
```

Jest va chercher tous les fichiers en `*.test.js`, et les exécuter.

```js
import maFonction from "./maFonction";

describe("la fonction que l'on veut tester", () => {
  it("ce que cette fonction doit faire dans un cas précis", () => {
    const maValeur = maFonction();

    expect(maValeur).toBe(ceQuiEstAttendu); // chercher dans la doc de Jest
  });
});
```

**À noter:** Dans Jest, on a accès à toute l'API du DOM, grâce à `jsdom`.

### Automatisation

On veut s'assurer que les tests sont lancés systématiquement.

```bash
npm i husky lint-staged --save-dev
```

```json
// package.json
{
  "lint-staged": {
    "*.js": ["eslint", "jest --findRelatedTests"]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

### Code coverage

Attention ! Métrique dangereuse !

### Tests de non-régression

1. on a observé un bug
2. on écrit un test qui décrit le comportement correct
3. on lance le test, il échoue
4. on corrige le bug
5. on lance le test, il passe

### Tests automatisés sur vrais navigateurs: [Karma](https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai)

## Typescript

Avoir un typage fort permet d'éviter un bon nombre d'erreurs "bêtes", au prix
tout relatif d'une plus grande rigueur lors de l'écriture du code.

Javascript ne permet pas cela, mais Typescript si.

Typescript est un langage jumeau de Javascript, développé par Microsoft, et qui
implémente un typage fort. Ce langage est de plus en plus populaire.

Typescript n'est pas interprêtable par un navigateur. Pour utiliser Typescript,
il est donc nécessaire de compiler son code Typescript en Javascript équivalent.
Et donc d'utiliser un bundler avec un plugin Typescript.

# **_À vos claviers !!!_**

**isFrenchTweet**

Isoler la fonction qui teste la langue d'un tweet (`isFrenchTweet`) dans un
module, et la tester:

- (1) tester que `isFrenchTweet` renvoie `true` pour un tweet en francais
- (2) tester que `isFrenchTweet` renvoie `false` pour un tweet en anglais
- (2bis) tester que `isFrenchTweet` renvoie `false` pour un tweet sans langue
- (3) tester que `isFrenchTweet` renvoie `true` pour un tweet en francais
  canadien (`fr-ca`)
- (4) tester que `isFrenchTweet` jette une exception pour un tweet undefined

**createOl**

Créer des tests pour la fonction `createOl`:

- (1) tester que `createOl` renvoie une instance de `HTMLOListElement`
- (2) tester que `createOl` renvoie un élément qui a le bon nombre d'enfants

**createLi**

Créer des tests pour la fonction `createLi`.
