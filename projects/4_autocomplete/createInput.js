import { search } from './utils.js';
import createSuggestions from './createSuggestions.js';

export default function createInput(target) {
  const input = document.createElement('input');
  input.classList.add('text-input');

  input.addEventListener('input', e => {
    search(e.target.value).then(suggestions => {
      target.replaceWith(createSuggestions(suggestions));
    });
  });

  return input;
}
