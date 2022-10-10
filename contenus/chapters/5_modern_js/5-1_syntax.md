# Syntaxes modernes

> Écrire du JS neuf

## Pour commencer

### Séparateurs

```js
1_000_000_000; // au lieu de 1000000000
```

### Exponentiel

```js
2 ** 4; // 16
```

### Virgules qui trainent

```js
{
  a: 1,
  b: 2,
}

function (
  arg1,
  arg2,
)

[
  1,
  2,
  3,
]
```

### Template string literals

```js
const nom = 'Youpi';
const prenom = 'Popo';
const s = `Nom: ${nom} | Prénom: ${prenom}`
```
### Paramètres par défaut

```js
function (a, b = 0){}
```

### Optional Chaining

```js
a == null ? undefined : a.b;
a?.b;

a == null ? undefined : a[x];
a?.[x];

a == null ? undefined : a.b();
a?.b();

a == null ? undefined : a();
a?.();
```

### Null coalescing

```js
const a = b || 1; // avant on faisait ça
const a = b ?? 1; // renvoie 1 si b est null ou undefined, b sinon
```

## Fonctions fléchées

On peut également définir des fonctions en utilisant la syntaxe
fléchée.

```js
const saluer = () => {
  console.log("Salut !");
};
```

Les fonctions flèches ont des arguments tout comme les fonctions normales.

```js
const saluer = (nom) => {
  console.log("Je suis ", nom);
};

const saluer = (prenom, nom) => {
  console.log("Je suis ", prenom + " " + nom);
};

// si un seul argument, pas besoin des parenthèses
const saluer = nom => {
  console.log("Je suis ", nom);
};
```

Si la fonction flèche n'a qu'une seule instruction, alors on peut se passer du block. La fonction renvoie automatiquement alors le résultat de l'instruction.

```js
const additioner = (a, b) => a + b;
const getObject = (a, b) => ({a, b}); // pour renvoyer directement un objet
```


## Spreading / Destructuring

Pour les objets:

```js
const o = { a: 1, b: 2, c: 3, d: 4 };

const { a, b, ...rest } = o;

// a => 1
// b => 2
// rest => {c: 3, d:4}

const o2 = { ...o }; // copie de o
const o3 = { ...o, e: 5 }; // {a:1, b:2, c:3, d:4, e:5}
```

Pour les tableaux:

```js
const l = [1, 2, 3, 4, 5];

const [a, b, ...leReste] = l; // a <= 1, leReste <= [2, 3]

const l2 = [...l]; // crée une copie de l
const l3 = [...l, ...l2]; // fusionne 2 listes
```

## Classes

Les `class` sont des fonctions en toile de fond, qui cherchent à mimer les classes de la Programmation Orientée Objet.

```js
class Humain {
  constructor(name) {
    this.name = name
  }

  sayName() {
    console.log(this.name)
  }
}

const moi = new Humain('Romain');
moi.sayName();
```

## Et bien d'autres

Un petit aperçu plus complet de ce qui est possible est disponible [ici](./5-X_es6%2B.md).

---

## Exercices

- Ouvrir le dossier `/exos/5_modern_js/5-1_syntax`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur


---

### _À suivre: [Scripts](./5-2_scripts.md)_
