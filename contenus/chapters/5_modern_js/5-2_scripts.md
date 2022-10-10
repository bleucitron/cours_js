# Scripts

> Charger efficacement ses scripts

Il y a une vieille habitude de mettre les scripts à la fin du `<body>`. Pourquoi ?

## Le hack

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="light.js"></script>
  </head>
  <body>
    <h1>Coucou</h1>
    <p>Contenu</p>
    <script src="heavy.js"></script>
  </body>
</html>
```

## Defer

`defer` permet de dire au navigateur de différer le téléchargement du script.

Le navigateur va alors attendre d'avoir lu tout le HTML et d'avoir construit le DOM avant de télécharger le script `defer`.

L'ordre des scripts déclarés avec `defer` est conservé.

L'évènement `DOMContentLoaded` ne sera généré que lorsque tous les scripts `defer` auront été chargés et exécutés.

Il est intéressant d'utiliser `defer` lorsque vous avez besoin de conserver l'ordre des scripts, ou d'utiliser de faire appel au DOM.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="code1.js" defer></script>
    <script src="code2.js" defer></script>
  </head>
  <body></body>
</html>
```

## Async

`async` permet de télécharger et d'exécuter un script sans bloquer la suite de l'analyse du HTML.

Les scripts `async` seront donc chargés et exécutés en parallèle.

Néanmoins, un script `async` s'éxecutera dès qu'il sera téléchargé, ce qui signifie que l'ordre des scripts ne sera pas garanti.

Il est intéressant d'utiliser `async` lorsque vous avez des scripts qui fonctionnent en autonomie, comme des scripts d'analytics par exemple.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="code1.js" async></script>
    <script src="code2.js" async></script>
  </head>
  <body></body>
</html>
```

---

## À retenir

- mettre des `<script>` en fin de `<body>` ne sert plus à rien
- utiliser `async` pour les `<script>` autonomes
- utiliser `defer` pour tous les autres `<script>`

---

### _À suivre: [Modules](./5-3_modules.md)_
