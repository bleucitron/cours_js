# [NPM](https://www.npmjs.com/)

> Organiser et développer son projet

NPM est à la fois:
- une [librairie de modules](https://www.npmjs.com/),
- un **gestionnaire de paquets pour NodeJS**. [Yarn](https://yarnpkg.com/) et [pnpm](https://pnpm.io/fr/) en sont des alternatives.


```bash
npm init // initialise un projet NPM

npm install // installe toutes les dépendances
npm install uneDependance // installe uneDependance
npm install uneDependance -g // installe uneDependance en global
npm install uneDependance -D // installe uneDependance en dépendance de développement
```

Les dépendances locales sont installées dans le dossier `node_modules`.

> Le dossier `node_modules` ne devrait pas être versionné.

## [`package.json`](https://docs.npmjs.com/getting-started/using-a-package.json)

C'est le fichier de configuration du projet NPM. Il est créé par `npm init`. Ils peuvent devenir assez [gros](https://gitlab.com/mapcontrib/mapcontrib.next/blob/develop/packages/web/package.json) au fur et à mesure du projet.

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

Les versions des dépendances sont gérées par la [syntaxe semver](https://docs.npmjs.com/files/package.json#dependencies).

Le fichier `package-lock.json` permet de s'assurer que le même `node_modules` est produit à chaque `npm install`, quelque soit la situation.

## `devDependencies`

Les dépendances non nécessaires une fois le build construit sont dites "de développement".
Elles ne devraient être installées avec `npm i blabla -D`. Elles ne seront notamment pas installées lors des installations de CI.

## Scripts NPM

Les scripts NPM permettent d'automatiser certaines tâches. Ils remplacent les outils [Grunt](https://gruntjs.com/) et [Gulp](https://gulpjs.com/) la plupart du temps.

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

## [`npx`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

`npx` est installé avec NPM. C'est un outil qui permet d'exécuter simplement des scripts NPM.

```bash
npx unModuleNPM
```

- si `unModuleNPM` se trouve dans votre `node_modules`, alors `npx` va chercher le fichier `.js` correspondant et l'exécute
- sinon, `npx` demande à `npm` d'installer temporairement le module, puis l'exécute

> Dans les `scripts` du `package.json`, on peut exécuter un module NPM sans préfixer avec `npx`.

## [Bundlephobia](https://bundlephobia.com/)

Pour obtenir de l'information sur la taille de ses paquets.


---

## À retenir

- NPM permet de gérer la configuration de son projet
- NPM permet d'installer des dépendances externes
- `package.json` est un fichier indispensable dans le développement JS moderne
- On peut automatiser des scripts avec les `scripts`


---

### _À suivre: [Format](./6-4_clean.md)_
