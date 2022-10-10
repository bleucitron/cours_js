'use strict';
console.log('Exos 1-4: Fonctions');

/**========================================================================
 *                           Bonjour
 *========================================================================**/
console.log('*** Bonjour ***');

/**
 * 1) Créer une fonction 'direBonjour' qui:
 * - prend un 'nom' en entrée
 * - renvoie une chaine de caractère de type Bonjour personnalisé (ex: Bonjour Romain).
 *
 * 2) Utiliser cette fonction avec votre prénom en logguant son résultat
 */

/**========================================================================
 *                           Somme
 *========================================================================**/
console.log('*** Somme ***');

/**
 * 1) Créer une fonction 'somme' qui:
 * - prend 2 nombres en arguments
 * - renvoie la somme des deux nombres.
 *
 * 2) Utiliser cette fonction sur deux nombres de votre choix
 */

/**========================================================================
 *                           Pourcentage
 *========================================================================**/
console.log('*** Pourcentage ***');

/**
 * 1) Créez une fonction "calculer" qui:
 * - prend un nombre en entrée
 * - renvoie ce nombre augmenté de 13%
 *
 * 2) Utilisez cette fonction sur un nombre de votre choix,
 * et afficher son résultat dans la console
 */

/**
 * 3) Modifier la fonction "calculer" pour pouvoir choisir également le pourcentage appliqué
 */

/**========================================================================
 *                           1000
 *========================================================================**/
console.log('*** 1000 ***');

/**
 * Créer une fonction qui:
 * - prend en arguments deux nombres entiers, min et max,
 * - renvoie la somme de tous les entiers entre ces 2 nombres (min et max inclus)
 * - utiliser une boucle for
 */

/**========================================================================
 *                           [Bonus] Limite
 *========================================================================**/
console.log('*** [Bonus] Limite ***');

/**
 * 1) Créer une fonction 'limit' qui:
 * - prend en entrée un nombre de départ
 * - divise ce nombre par 2 jusqu'à ce que le nombre soit plus petit que 1 / 1_000_000
 * - renvoie le nombre de fois où on a divisé.
 */

/**
 * Dans la question précédente, la limite était 0, et la tolérance 1 / 1_000_000
 * 2) Modifier la fonction 'limit' pour pouvoir fournir en entrée:
 * - une limite
 * - une tolérance
 */

/**
 * 3) Modifier la fonction "limit" pour faire la même chose sans aucune boucle.
 */

/**========================================================================
 *                           [Bonus] Say Hello
 *========================================================================**/
console.log('*** [Bonus] Say Hello ***');

const languages = ['fr', 'es', 'de', 'it', 'jp'];

/**
 * 1) Créer une fonction 'prepareHello' qui prend en entrée une langue 'lang' ('fr', 'it', 'es', 'de', ...)
 * et qui, en fonction de la langue, renvoie une fonction anonyme.
 * - la fonction anonyme doit prendre en entrée un 'name'
 * - la fonction anonyme doit renvoyer une string de type "Bonjour [name]"
 * - si on ne passe pas de langue, ou si la langue n'est pas reconnue, utiliser l'anglais par défaut
 * 2) Utiliser "prepareHello" pour créer plusieurs fonctions pour dire bonjour dans plusieurs langues
 * 3) Tester les fonctions créées
 */
