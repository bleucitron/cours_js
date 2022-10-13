'use strict';

const age = Math.floor(Math.random() * 90);

// [1] créer une variable name, et lui assigner un nom

let name = 'Romain';

// [2] si age est plus grand que 18, afficher le message suivant
const msg1 = 'Bravo pour le permis';

if (age >= 18) {
  console.log(msg1);
}

// [3] si age n'est pas entre 12 et 25, afficher le message suivant:
const msg2 = "Vous n'avez pas le droit à la carte 12-25";

if (!(age >= 12 && age <= 25)) {
  console.log(msg2);
}

// [4] si age est plus grand que 20, réassigner name en lui ajoutant 'Mr' (ou 'Mme') devant
if (age >= 20) {
  name = 'M. ' + name;
}
