import { updateSuggestions } from './suggestions.js';
import { search } from './utils.js';

export default function createInput(addTodo) {
  const input = document.createElement('input');
  input.classList.add('text-input');

  function trigger(e) {
    const value = e.target?.value;

    if (value) {
      search(value).then(suggestions => {
        updateSuggestions(suggestions, addTodo);
      });
    }
  }

  input.addEventListener('input', trigger);
  input.addEventListener('focus', trigger);

  return input;
}
