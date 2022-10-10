# Retour vers le futur

> Écrire le code du futur dans les navigateurs du présent (ou du passé)

## Syntaxe

C'est la façon d'écrire le code, comprise (ou pas) par les navigateurs.

En gros, ce sont les **règles de grammaire**.

Pour utiliser la syntaxe du futur, utiliser [Babel](https://babeljs.io/).

## Sémantique

Les mots nouveaux d'un standard récent ne sont pas compris par des navigateurs anciens.

Pour pouvoir utiliser les nouveaux mots, il faut les définir s'ils ne sont pas reconnus par le navigateur.

On parle alors de **polyfills**.

Si vous utilisez des fonctions du futur sans polyfills, ces fonctions ne seront pas définies sur les vieux navigateurs.

Le fait qu'une fonction ne soit pas implémentée par un navigateur n'est pas une raison pour ne pas utiliser cette fonction.

Il faut définir ces fonctions pour pouvoir s'en servir.

- écrire soi-même ses polyfills

```js
## dans le <head>
<script>
function maFonctionDuFutur() {}
</script>

## dans mes scripts métier
maFonctionDuFuture() // ok
```

- [polyfill.io](https://cdn.polyfill.io/v2/docs/) fait le travail à notre place [(annonce du service)](http://labs.ft.com/2014/09/polyfills-as-a-service/)

```js
 ## dans le <head>
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>

## dans mes scripts métier
maFonctionDuFuture() // ok
```


### _À suivre: [Bundling](./6-1_bundling.md)_
