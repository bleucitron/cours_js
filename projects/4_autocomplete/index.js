import createInput from './autocomplete/createInput.js';
import { clearSuggestions } from './autocomplete/suggestions.js';
import { createTodos } from './todo.js';

let all = true;

document.addEventListener('DOMContentLoaded', () => {
  const searchSection = document.createElement('section');
  searchSection.id = 'search';
  const todoSection = document.createElement('section');
  todoSection.id = 'todo';

  // Suggestions
  const suggestionUl = document.createElement('ul');
  suggestionUl.id = 'suggestions';
  const input = createInput(add);

  searchSection.append(input, suggestionUl);

  // Todos
  let todos = [];
  let displayedTodos = todos;

  function add({ name, city, postcode }) {
    clearSuggestions();
    todos.unshift({ label: `${name} ${postcode} ${city}`, done: false });

    const ul = createTodos(todos, remove, toggle);
    todoUl.replaceWith(ul);
    todoUl = ul;
  }

  function remove(position) {
    todos = todos.filter((_, i) => i !== position);

    const ul = createTodos(todos, remove, toggle);
    todoUl.replaceWith(ul);
    todoUl = ul;
  }

  function toggle(position) {
    const toComplete = displayedTodos.find((_, i) => i == position);
    toComplete.done = !toComplete.done;

    displayedTodos = all ? todos : todos.filter(todo => !todo.done);

    const ul = createTodos(displayedTodos, remove, toggle);
    todoUl.replaceWith(ul);
    todoUl = ul;
  }

  const button = document.createElement('button');
  button.textContent = 'Tous';

  button.addEventListener('click', () => {
    all = !all;
    button.textContent = all ? 'Tous' : 'À faire';

    displayedTodos = all ? todos : todos.filter(todo => !todo.done);

    const displayedUl = createTodos(displayedTodos, remove, toggle);
    todoUl.replaceWith(displayedUl);
    todoUl = displayedUl;
  });

  let todoUl = createTodos(todos, remove, toggle);

  todoSection.append(button, todoUl);
  document.body.append(searchSection, todoSection);
});
