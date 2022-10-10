# [CSS](https://developer.mozilla.org/fr/docs/Web/CSS)

C'est le **maquillage** d'une page web.

## Sélecteurs CSS

```css
mon-selecteur-css {
  ma-regle: 'ma-valeur';
}
```

### Base

Tous les éléments d'un certain type

- `span`, `div`, `p`, `body`, `*`, etc.

Tous les éléments avec la classe `azerty`

- `.azerty`

L'élément avec l'id `tabs`

- `#tabs`

Les éléments avec un certain attribut

- `a[href]`
- `input[type="email"]`
- `input[disabled]`

### Composition

- `E, F`: E et F
- `E F`: les F contenus dans E
- `E > F` les F directement enfants de E

### [Pseudo-classes](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes)

- `x:hover`, `x:visited`
- [n-ième élément](https://developer.mozilla.org/fr/docs/Web/CSS/:nth-child)
  - `x:nth-of-type(3)`
  - `x:nth-child(even)`
  - `x:nth-child(odd)`
  - `x:nth-of-type(2n+1)`
  - `x:first-child`, `x:last-child`

```css
ul li {
  background-color: white;
}
li:nth-child(odd) div {
  background-color: grey;
}

button:hover {
  color: blue;
}

a:visited {
  color: yellow;
}
```

## Quelques règles CSS utiles

```css
p {
  /* relatives au texte */
  color: blue;
  font-size: 30px;
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;

  /* relatives au bloc */
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 30px;
  cursor: pointer;
  background-color: grey;
  box-shadow: 5px 10px 4px 7px black;
}
```

## [Box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)

- `width`/`height`
- `padding`: marge interne
- `border`: bordure
- `margin`: marge externe

(montrer devtools)

- [box-sizing](https://developer.mozilla.org/fr/docs/Web/CSS/box-sizing) : gérer la définition de la taille

## [La Cascade](https://developer.mozilla.org/fr/docs/Apprendre/CSS/Introduction_%C3%A0_CSS/La_cascade_et_l_h%C3%A9ritage)

Le style d'un document HTML est appliqué selon la logique d'une cascade.

Les éléments se positionnent les uns par rapport aux autres en fonction du `box-model` de chacun.

### [`display`](https://developer.mozilla.org/fr/docs/Web/CSS/display)

Le `display` permet de controller comment l'élément est influencé par la cascade.
Les éléments HTML sont en général soit `block`, soit `inline` par défaut.

```css
div {
  display: block;
}
```

- `block`: prend toute la largeur du parent
- `inline`: se comporte comme un mot dans un texte
- `inline-block`: un `block` qui ne prend pas toute la place
- [`flex`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/): permet de facilement gérer les éléments de manière verticale ou horizontale
  - `flex-direction`
  - `justify-content`
  - `align-items`
- [`grid`](https://css-tricks.com/snippets/css/complete-guide-grid/): permet de facilement gérer les éléments sur une grille
- `table` (utiliser plutôt `flex` ou `grid`)
- `none`: l'élément n'est plus affiché

### [`position`](https://developer.mozilla.org/fr/docs/Web/CSS/position)

En modifiant la `position` d'un élément, on le "sort" de la cascade.

```css
div {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

- `relative` : se positionne relativement à sa position initiale dans la cascade
- `absolute`: se positionne relativement à son plus proche parent **positionné**
- `fixed`: se positionne relativement au `body`
- `sticky`: se positionne en `relative` jusqu'à un certain seuil, puis en `absolute`

## [Unités](https://developer.mozilla.org/en-US/docs/Web/CSS/length#rem)

`px` ou `pt`, c'est le mal !

Utiliser `rem` ou `%`.

## Polices

S'ajoutent via [`@font-face`](https://www.paulirish.com/2009/bulletproof-font-face-implementation-syntax/)

```css
@font-face {
  font-family: 'Graublau Web';
  src: url('GraublauWeb.eot?');
}
```

Où trouver des polices:

- [DaFont](https://www.dafont.com/fr/)
- [GoogleFonts](https://fonts.google.com/)

## [Couleurs](https://fr.wikipedia.org/wiki/Couleur_du_Web)

Hexadécimal: `#123456`

RGB: `rgb(255, 33, 21);`

RGB transparent: `rgba(255, 33, 21, 0.1);`

[HSL](http://fr.wikipedia.org/wiki/Teinte_Saturation_Luminosit%C3%A9#Mod.C3.A8les_colorim.C3.A9triques): `hsl(204, 27%, 24%)`

## Want more ?

Les navigateurs ne traitent pas toujours les règles exactement de la même façon. [Il est possible de normaliser ces comportements](http://necolas.github.io/normalize.css/).

### Des bonnes astuces CSS

[CSS-Tricks](https://css-tricks.com/guides/), [Kevin Powell](https://www.youtube.com/kepowob)

### Des frameworks CSS tout prêts

[Bootstrap](http://getbootstrap.com/), [Tailwind](https://tailwindcss.com/)

### Font d'icônes

[FontAwesome](http://fortawesome.github.io/Font-Awesome/), [Ionicons](https://ionicons.com/)

[Quelles sont les règles CSS les plus populaires ?](https://www.chromestatus.com/metrics/css/popularity)

---

## À retenir

- Le CSS sert à donner du style à une page
- C'est un langage de sélecteurs
- Les éléments se positionnent naturellement dans la Cascade, en fonction de leurs parents
- Il est possible de sortir les éléments de la Cascade

---

## Exos

- Ouvrir le fichier `/exos/0_prologue/style.css`
- Donner du style à votre page, pour la rendre belle (ou moche, selon vos envies)

---

## À suivre: [Javascript](./0-3_javascript.md)
