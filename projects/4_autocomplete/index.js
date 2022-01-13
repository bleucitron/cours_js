import createInput from './autocomplete/createInput.js';
import {
  clearSuggestions,
  updateSuggestions,
} from './autocomplete/suggestions.js';
import { search } from './autocomplete/utils.js';
import { initTodos, updateTodos } from './todo.js';

// Variables d'état
let all = true;
let todos = [];
let displayedTodos = todos;

// Fonctions de mises à jour
function add({ name, city, postcode }) {
  clearSuggestions();
  todos.unshift({ label: `${name} ${postcode} ${city}`, done: false });

  updateTodos(todos, remove, toggle);
}

function remove(position) {
  todos = todos.filter((_, i) => i !== position);

  updateTodos(todos, remove, toggle);
}

function toggle(position) {
  const toComplete = displayedTodos.find((_, i) => i == position);
  toComplete.done = !toComplete.done;

  displayedTodos = all ? todos : todos.filter(todo => !todo.done);

  updateTodos(displayedTodos, remove, toggle);
}

function switchView() {
  all = !all;
  document.getElementById('switch').textContent = all ? 'Tous' : 'À faire';

  displayedTodos = all ? todos : todos.filter(todo => !todo.done);

  updateTodos(displayedTodos, remove, toggle);
}

function trigger(e) {
  const value = e.target?.value;

  if (value) {
    search(value).then(suggestions => {
      updateSuggestions(suggestions, add);
    });
  }
}

// Main code
document.addEventListener('DOMContentLoaded', () => {
  const searchSection = document.createElement('section');
  searchSection.id = 'search';
  const todoSection = document.createElement('section');
  todoSection.id = 'todo';

  // Suggestions
  const suggestionUl = document.createElement('ul');
  suggestionUl.id = 'suggestions';
  const input = createInput();
  input.addEventListener('input', trigger);
  input.addEventListener('focus', trigger);

  searchSection.append(input, suggestionUl);

  // Todos
  const todoUl = initTodos(todos, remove, toggle);

  const button = document.createElement('button');
  button.id = 'switch';
  button.textContent = 'Tous';

  button.addEventListener('click', switchView);

  todoSection.append(button, todoUl);
  document.body.append(searchSection, todoSection);
});
