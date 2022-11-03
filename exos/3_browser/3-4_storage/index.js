'use strict';
console.log('Exos 3-4: Stockage');

/**========================================================================
 *                           Who are you  ?
 *========================================================================**/
console.log('*** Who are you ? ***');

/**
 * 1) Utilisez l'input pour stocker votre nom dans le localStorage
 * 2) Affichez dans le <span> de l'élément #hello le nom lu depuis le localStorage
 * 3) Modifiez votre code pour également stocker le nom de famille, le tout devant être stocké dans un même objet {name, familyName}
 */

const input = document.getElementById('name');
const inputFamily = document.getElementById('familyName');
const hello = document.getElementById('hello');

const infos = JSON.parse(localStorage.getItem('infos')) ?? {
  nom: '',
  familyName: '',
};

function updateH1(infos) {
  const { nom, familyName } = infos;
  hello.textContent = `Bonjour ${nom ?? ''} ${familyName ?? ''}`;
}

updateH1(infos);

input.addEventListener('input', event => {
  const value = event.target.value;
  infos.nom = value;
  localStorage.setItem('infos', JSON.stringify(infos));

  updateH1(infos);
});

inputFamily.addEventListener('input', event => {
  const value = event.target.value;
  infos.familyName = value;
  localStorage.setItem('infos', JSON.stringify(infos));

  updateH1(infos);
});

/**========================================================================
 *                           [Bonus] Contrôle parental
 *========================================================================**/
console.log('*** [Bonus] Contrôle parental ***');

/**
 * 1) Affichez le temps total passé sur la page
 */
