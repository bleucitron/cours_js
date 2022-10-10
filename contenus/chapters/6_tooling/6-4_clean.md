# Mr. Propre

> Ne plus penser au format du code

## [Prettier](https://prettier.io/)

Permet de formatter le code selon des critères purement esthétiques.

```bash
npm i prettier -D
echo semi: true > .prettierrc
echo dist > .prettierignore
```

> Ajouter `"format": "prettier --write ."` dans vos `scripts` NPM

```bash
npm run format
```

- `.prettierrc` permet de configurer les règles de formattage
- `.prettierignore` permet d'ignorer des dossiers ou des fichiers

## Linting

Sert à écrire du code propre, selon les conventions que l'on choisit. Va au delà du formattage en tant que tel: par exemple détecter les variables inutilisées, ou les `console.log`.

Plusieurs linters existent, mais le plus populaire est [Eslint](https://eslint.org/).

```bash
npm init @eslint/config # installe et configure Eslint

echo "dist
node_modules" > .eslintignore
```

> Ajouter `"lint": "eslint ."` dans vos `scripts` NPM

```bash
npm run lint
```

- `.eslintrc` permet de configurer les règles de formattage
- `.eslintignore` permet d'ignorer des dossiers ou des fichiers

### [Eslint et Prettier](https://github.com/prettier/eslint-config-prettier)

Si on choisit d'utiliser Eslint avec Prettier, il est nécessaire d'ignorer les règles Eslint qui peuvent être en conflit avec Prettier.

```bash
npm install eslint-config-prettier -D
```

> Ajouter `prettier` en dernier de la liste `extends` de votre `.eslintrc`.

```yaml
extends: [
  "standard",
  "prettier"
]
```

### Règles

Au début d'un projet, on choisit (ou pas) des règles par défaut. Ces règles peuvent évoluer au fur et à mesure du projet.

> Le choix de ces règles doit se faire en équipe, au début d'un projet

On peut choisir d'ajuster les règles dans le `rules` de `.eslintrc`.

Les règles peuvent être désactivées (`"off"`), définies en avertissement (`"warn"`) ou erreur (`"error"`). Elles peuvent également être [configurées](https://eslint.org/docs/rules/).

```yaml
extends: standard,
rules: {
  "ma-règle": "off",
  "ma-règle-1": "warn",
  "ma-règle-2": "error",
  "ma-règle-3": ["error", options]
}
```

> Les `rules` Eslint écrasent les éventuels défauts définis par `extends`

---

## À retenir

- Prettier permet de formatter l'esthétique du code
- Un linter permet de détecter des problèmes potentiels

---

## Exercices

- Nettoyer ses erreurs de linting soit en modifiant ses `rules`, soit en corrigeant son code

---

### _À suivre: [Tests](./6-5_tests.md)_
