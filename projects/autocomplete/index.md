# Autocomplete

On va utiliser l'API [Découpage administratif](https://geo.api.gouv.fr/decoupage-administratif).

Faire un autocomplete permettant de lister en même temps:
- les communes
- les départements
- les régions

Détails:
- Les options de commune doivent être affichées avec le numéro du département, et triées par population décroissante (option `boost`)
- Prévoir 3 styles différents (3 couleurs par ex.) pour différencier communes, départements et régions dans les options
- Au clic sur une option, afficher en grand dans la page les informations du choix, et fermer l'autocomplete
