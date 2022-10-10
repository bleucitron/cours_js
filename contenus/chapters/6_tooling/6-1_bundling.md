# Bundling

> Transpiler son code


## Bundling ?

On a déjà vu que dans l'ancien temps, avant les modules, on découpait son code de cette manière là.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="code1.js"></script>
    <script src="code2.js"></script>
    <script src="code3.js"></script>
    <script src="code4.js"></script>
    <script src="code5.js"></script>
    <script src="code6.js"></script>
  </head>
  <body></body>
</html>
```

Cela posait un **problème majeur: les dépendances implicites**. Il fallait être certain de l'ordre de l'import de ses fichiers pour ne pas avoir de problèmes de variables non définies.

> Un deuxième problème était qu'avec le standard HTTP 1.1, les scripts étaient chargés un par un, avec un maximum de requêtes parallèles de 6, ce qui ralentissait considérablement la latence des pages. Ce n'est plus le cas avec HTTP/2

Sur des gros projets, le faire à la main est impensable. C'est notamment la raison d'être de projets comme [CommonJS](https://requirejs.org/docs/commonjs), à l'origine des modules ES6. L'idée est donc de définir explicitement un arbre de dépendances (à l'époque via `require`), puis de construire programmatiquement un seul et unique fichier (souvent `bundle.js`), qui garantit la bonne organisation de notre code.

C'est ce qu'on appelle le **bundling**. Il ne reste alors plus qu'à **importer ce seul et unique fichier** pour profiter de notre application.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="bundle.js"></script>
  </head>
  <body></body>
</html>
```

Avec les modules ES6, le besoin de bien organiser les dépendances de son code n'existe plus, et on pourrait supposer que cela réduit l'intérêt du bundling. Mais le bundling reste encore pertinent.

### Tree-shaking

Souvent, **on laisse trainer sans s'en rendre compte du code mort**. Ce code existant mais inutilisé alourdit notre page pour aucune raison.
Les bundlers modernes sont capables de détecter ces morceaux de code mort, et de ne pas les intégrer au fichier final. On appelle ça du **tree-shaking**.

> Il serait impossible de faire du tree-shaking sans avoir une vision globale du code, ce qui ravive l'intérêt des bundlers

### Minifier

L'étape du bundle permet aussi de minifier. Le but est de **réduire la taille de son code au maximum** sans rien perdre en fonctionnalités:
- supprimer les retours chariot
- changer les noms des variables

> Un code minifié n'a bien sûr aucun intérêt pour un être humain.


### Transpilation

Transpiler, c'est juste un mot prétentieux pour dire: *compiler dans une version du même langage*.

C'est notamment nécessaire lorsque l'on veut **utiliser les nouvelles syntaxes ECMAScript sans pénaliser les usagers** n'ayant pas encore mis à jour leurs navigateurs.
Au moment de la transpilation, on va ainsi transformer notre syntaxe moderne en syntaxe ancienne strictement équivalente.
[Babel](https://babeljs.io/) est le transpilateur le plus connu.
Mais transpiler sert également à **utiliser des syntaxes qu'aucun navigateur ne connait**, comme par exemple le [JSX](https://fr.wikipedia.org/wiki/JSX_(JavaScript)), qui sera donc transformé en vrai Javascript à la transpilation.

### Et toujours plus

Les bundlers modernes sont également capables de gérer toutes les ressources généralement utilisées dans un projet web front-end: styles, images, fonts...
On va ainsi importer du style ou des images dans du script, compiler des versions pimpées de CSS (SASS, POSTCSS, ...)en CSS classique, créer des alias de path, ...

```js
import './monStyle.css' // impossible en vrai, possible avec un bundler moderne
import monSVG from './monSVG.svg' // impossible en vrai, possible avec un bundler moderne
```


## Exemples de bundlers
- [Browserify](https://browserify.org/)
- [Webpack](https://webpack.js.org/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Parcel](https://parceljs.org/)
- [Snowpack](https://www.snowpack.dev/)
- [Vite](https://vitejs.dev/)


---

## À retenir

- Bundler permet de réduire la taille du code effectivement envoyé au navigateur
- Bundler permet de bénéficier des dernières syntaxes sans pénaliser les usagers
- Bundler permet de modifier plein de ressources de son projet avant de les déployer
- Bundler est aujourd'hui une étape indispensable

---

## Exercices

TODO

---

### _À suivre: [DX](./6-2_dx.md)_
