// Améliorez ce code

var argent = 1000;

var nbGlaces = 8;
var prixGlace = 2;

argent = argent - nbGlaces * prixGlace;
nbGlaces = 0;

var inflation = 0.04;

prixGlace = prixGlace * (1 + inflation);

var argentDePoche = 100;
var nbMois = 12;

argent = argent + argentDePoche * 12;

var crashBancaire = 5;

argent = argent / crashBancaire;

console.log('Argent', argent);
