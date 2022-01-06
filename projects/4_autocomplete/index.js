import createInput from './createInput.js';

document.addEventListener('DOMContentLoaded', () => {
  const searchSection = document.createElement('section');
  searchSection.id = 'search';
  const todoSection = document.createElement('section');
  todoSection.id = 'todo';

  const suggestionsUl = document.createElement('ul');
  suggestionsUl.classList.add('suggestions');

  const input = createInput(suggestionsUl);

  searchSection.append(input, suggestionsUl);

  document.body.append(searchSection, todoSection);
});
