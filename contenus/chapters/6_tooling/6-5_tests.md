# Tests

> "Tester, c'est douter"

## La pyramide des tests

Il y a plusieurs définitions de la pyramide des tests. Dans le cadre front-end, on peut considérer la suivante:

- End-to-end tests
- Integration tests
- Component tests
- Unit tests

**E2E tests**: tester des morceaux entiers de l'application, depuis l'interaction utilisateur dans le navigateur jusqu'à la réponse du serveur et l'affichage d'un résultat, en passant par la base de données.

Coûteux, ne faire que les fonctionnalités critiques.

**Integration tests**: tester des ensembles de fonctionnalités censer fonctionner ensemble, en simulant le reste du monde.

**Component tests**: tester des morceaux d'UI atomiques en vase clos.

**Unit tests**: tester des fonctions en vase clos.

## Frameworks

Plusieurs types de frameworks sont disponibles:

### Moteurs de tests

- [Mocha](https://mochajs.org/) + [Chai](https://www.chaijs.com/)
- [Jest](https://jestjs.io/)
- [Vitest](https://vitest.dev/)

### Simuler le navigateur

- [JSDOM](https://github.com/jsdom/jsdom)
- [Testing library](https://testing-library.com/)

### Tester dans un vrai navigateur

- [Karma](https://karma-runner.github.io/2.0/index.html)
- [Cypress](https://www.cypress.io/)
- [Playwright](https://playwright.dev/docs/intro)

## En pratique

On va utiliser **Vitest**.

```bash
npm i vitest -D
```

> Ajouter `"test": "vitest run"` et `"test:watch": "vitest"` dans vos `scripts` NPM


Lancer les tests.

```bash
npm run test:watch # ou npx vitest
```

Vitest va chercher tous les fichiers en `*.test.js`, et les exécuter.

```js
import { describe, it, expect } from 'vitest';
import maFonction from './maFonction.js';

describe("la fonction que l'on veut tester", () => {
  it('ce que cette fonction doit faire dans un cas précis', () => {
    const maValeur = maFonction();

    expect(maValeur).toBe(ceQuiEstAttendu); // d'autres possibilités dans la doc de Vitest
  });
});
```

## Automatisation

On veut s'assurer que les tests sont lancés systématiquement, avec [Husky](https://github.com/typicode/husky#install) et [Lint-staged](https://github.com/okonet/lint-staged#lintstagedrc-example).

### [Husky](https://github.com/typicode/husky#install)

**Husky vous permet de lancer des scripts (notamment des tests) avant chaque commit**, et de s'assurer que tous les devs du projet en fassent autant.

```bash
npm i husky lint-staged -D

git init # Git est nécessaire pour utiliser Husky
```

```bash
npm set-script prepare "husky install"
npm run prepare

# Ajoute un git hook:
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```

> Avant chaque commit, vos tests seront vérifiés.

### [Lint-staged](https://github.com/okonet/lint-staged#lintstagedrc-example)

**Lint-staged permet de n'exécuter des scripts que sur les fichiers en *staging***. Cela évite d'analyser ou tester tous vos fichiers si vous n'avez fait qu'une modification mineure.

> Remplacer `npm test` par `npx lintstaged` dans votre `pre-commit` hook

> Créer le fichier `.lintstagedrc` suivant:
```json
{
  "*.js": ["prettier --write", "eslint --fix", "vitest related --run"],
}
```


### CI/CD

Penser à également exécuter vos formattages / tests sur votre serveur de CI.

## Code coverage

Ne pas chercher le 100% à tout prix. **80% de couverture est un seuil qui fait consensus**.

## Tests de non-régression

1. on a observé un bug
2. on écrit un test qui décrit le comportement correct
3. on lance le test, il échoue
4. on corrige le bug
5. on lance le test, il passe

---

## À retenir

- La pyramide des tests schématise les différents types de tests
- En général, on fait beaucoup de tests unitaires, et peu de tests E2E
- Il est important de lancer ses tests avant de commit, ainsi qu'après (CI)
- Attention à ne pas se laisser envoûter par le code coverage

---

## Exercices

**isFrenchTweet**

Isoler la fonction qui teste la langue d'un tweet (`isFrenchTweet`) dans un module, et la tester:

- (1) tester que `isFrenchTweet` renvoie `true` pour un tweet en francais
- (2) tester que `isFrenchTweet` renvoie `false` pour un tweet en anglais
- (2bis) tester que `isFrenchTweet` renvoie `false` pour un tweet sans langue
- (3) tester que `isFrenchTweet` renvoie `true` pour un tweet en francais canadien (`fr-ca`)
- (4) tester que `isFrenchTweet` jette une exception pour un tweet undefined

**createOl**

Créer des tests pour la fonction `createOl`:

- (1) tester que `createOl` renvoie une instance de `HTMLOListElement`
- (2) tester que `createOl` renvoie un élément qui a le bon nombre d'enfants

**createLi**

Créer des tests pour la fonction `createLi`.

---

### _À suivre: [Vers l'infini et au-delà](../beyond.md)_
