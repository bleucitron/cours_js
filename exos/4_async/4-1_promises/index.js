console.log('Exos 4-1: Promesses');

/**========================================================================
 *                           Aléatoire
 *========================================================================**/
console.log('*** Aléatoire ***');

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

/**
 * 1) Créer une Promesse qui renvoie au bout de 2s un nombre entier aléatoire
 * - le nombre doit être entre 0 et 9
 * - si ce nombre est pair, le résoudre
 * - sinon le rejeter
 * Utiliser setTimeout().
 * 2) Consommer la Promesse de 1) pour:
 * - afficher le nombre renvoyé quand elle résoud
 * - logguer un message d'erreur quand elle est rejetée
 */

const p = new Promise((res, rej) => {
  setTimeout(() => {
    const n = getRandom(10);
    if (n % 2 === 0) {
      res(n);
    } else {
      rej(n);
    }
  }, 2000);
});

p.then(vp => {
  console.log('VP exo1', vp);
}).catch(err => {
  console.error('Error exo1', err);
});

/**========================================================================
 *                            Calcul aléatoire
 *========================================================================**/
console.log('*** Calcul aléatoire ***');

/**
 * 1) En se servant de l'exercice précédent, créer une fonction getAsyncRandomNb qui renvoie une promesse
 * d'avoir un nombre aléatoire au bout de 2s
 * 2) Créer 3 nombres aléatoires en se servant de getAsyncRandomNb, et calculer leur somme
 */

function getAsyncRandomNb() {
  const p = new Promise(res => {
    setTimeout(() => {
      res(getRandom(10));
    }, 2000);
  });
  return p;
}

const pA = getAsyncRandomNb();
pA.then(vpA => {
  console.log('exo2 vpA', vpA);
  const pB = getAsyncRandomNb();
  pB.then(vpB => {
    console.log('exo2 vpB', vpB);
    const pC = getAsyncRandomNb();
    pC.then(vpC => {
      console.log('exo2 vpC', vpC);
      console.log('exo2 somme', vpA + vpB + vpC);
    });
  });
});

/**========================================================================
 *                           [Bonus] Attente incertaine
 *========================================================================**/
console.log('*** [Bonus] Attente incertaine ***');

/**
 * 1) Créez une Promesse qui:
 * - crée un nombre aléatoire (delay) en 0 et 5000
 * - au bout de 2s, rejeter la Promesse avec le texte 'Trop long...'
 * - au bout de delay ms pour résoudre le nombre delay
 * 2) Consommez la Promesse de sorte que si elle est rejetée,
 * on recommence jusqu'à ce qu'elle résolve
 */

function uncertainWait() {
  const p = new Promise(function (resolve, reject) {
    const delay = getRandom(5000);

    setTimeout(() => {
      reject('Trop long...');
    }, 2000);
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });

  p.then(vp => {
    console.log('[Bonus] ok:', vp);
  }).catch(err => {
    console.error('[Bonus] err:', err);
    uncertainWait();
  });
}

uncertainWait();
