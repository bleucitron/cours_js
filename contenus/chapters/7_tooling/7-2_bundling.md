## Aller plus loin

Le développement web moderne s'appuie énormément sur le concept de "bundling",
dont le principe est le suivant:

On "compile" tout le code en 1 seul (gros) fichier bien construit pour le
charger dans le Html.

Pour mettre en place du bundling, il y a plusieurs alternatives disponibles.

- [`browserify`](http://browserify.org/)
- [`webpack`](https://webpack.js.org/)
- [`rollup`](https://rollupjs.org/guide/en)
- [`parcel`](https://parceljs.org/)

Ces outils nécessitent de travailler dans un environnement Node, puis de
transformer le code Node en un code compatible navigateur.

Pour utiliser ces outils, il est donc nécessaire
d'[installer Node](https://nodejs.org/en/) et un gestionnaire de paquets,
[NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/en/).

Toutes ces techniques sortent largement du cadre de ce cours, mais sont
intéressantes à étudier si l'on veut aller plus loin dans le développement web
avec Javascript.

#### _La suite: [NPM](./7-3_npm.md)_
