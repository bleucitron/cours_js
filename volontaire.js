const allNames = ['Alexis', 'Mathilde', 'Gaëtan', 'Corentin', 'Antoine'];

let names = allNames;

const n = Math.floor(Math.random() * allNames.length);

const volontaire = allNames[n];
console.log('Next', volontaire);
