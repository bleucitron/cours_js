import { checkFr } from './utils.js';
import createOl from './createOl.js';

let isFr = false;

export default function (twts, target) {
  const button = document.createElement('button');
  button.textContent = 'Fr';

  button.addEventListener('click', () => {
    isFr = !isFr;

    button.textContent = isFr ? 'Tous' : 'Fr';

    let tweetsToDisplay = twts;

    if (isFr) {
      tweetsToDisplay = twts.filter(checkFr);
    }

    const newOl = createOl(tweetsToDisplay);
    target.replaceWith(newOl);
    target = newOl;
  });

  return button;
}
