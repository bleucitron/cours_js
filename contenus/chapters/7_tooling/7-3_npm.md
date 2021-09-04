# [NPM](https://www.npmjs.com/)

Gestionnaire de paquets pour NodeJS.

```bash
npm init // initialise un projet NPM

npm install // installe toutes les dépendances
npm install uneDependance // installe uneDependance
npm install uneDependance -g // installe uneDependance en global
npm install uneDependance --save-dev // installe uneDependance en dépendance de développement
```

Les dépendances locales sont installées dans le dossier `node_modules`.

## [`package.json`](https://docs.npmjs.com/getting-started/using-a-package.json)

C'est le fichier de configuration du projet NPM. Il est créé par `npm init`.

[Exemple](https://gitlab.com/mapcontrib/mapcontrib.next/blob/develop/packages/web/package.json)

```json
{
  "name": "formation",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.3"
  },
  "dependencies": {
    "react": "^16.3.2"
  }
}
```

Les versions des dépendances sont gérées par la
[syntaxe semver](https://docs.npmjs.com/files/package.json#dependencies).

Le fichier `package-lock.json` permet de s'assurer que le même `node_modules`
est produit à chaque `npm install`, quelque soit la situation.

## Scripts NPM

Les scripts NPM permettent d'automatiser certaines tâches. Ils remplacent les
outils Grunt et Gulp la plupart du temps.

- http://naholyr.fr/2015/11/ecrire-des-scripts-npm-multi-plateforme/

```json
{
  "scripts": {
    "build": "my build script",
    "prebuild": "this will be executed before 'build'",
    "postbuild": "this will be executed after 'build'"
  }
}
```

```bash
npm run build
```

### Aparté Babel

On va à partir de maintenant utiliser Babel **globalement** dans le projet.

Enlever les `presets` des scripts

```json
{
  "scripts": {
    "build": "browserify src/vanilla/main.js -o bundle.js -t [ babelify ] -d"
  }
}
```

et rajouter un `.babelrc` à la racine du projet

```json
{
  "presets": ["@babel/preset-env"]
}
```

### Quelques outils

- [`npm-run-all`](https://www.npmjs.com/package/npm-run-all)
- [`watch-exec`](https://www.npmjs.com/package/watch-exec)
- [`npx`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

## [Bundlephobia](https://bundlephobia.com/)

Pour gérer la taille de ses paquets.

#### _La suite: [Qualité](./7-4_quality.md)_
