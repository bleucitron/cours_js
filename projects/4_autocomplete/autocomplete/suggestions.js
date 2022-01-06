function makeSuggestion(suggestion, addTodo) {
  const { city, name, postcode } = suggestion;

  const li = document.createElement('li');
  const labelDiv = document.createElement('div');
  const cityDiv = document.createElement('div');

  li.classList.add('suggestion');
  labelDiv.classList.add('label');
  cityDiv.classList.add('city');

  labelDiv.textContent = name;
  cityDiv.textContent = `${postcode} ${city}`;

  li.append(labelDiv, cityDiv);

  li.addEventListener('click', () => {
    addTodo(suggestion);
  });

  return li;
}

export function clearSuggestions() {
  const ul = document.getElementById('suggestions');
  ul.innerHTML = '';
}

export function updateSuggestions(suggestions, addTodo) {
  const lis = suggestions.map(s => makeSuggestion(s, addTodo));

  const ul = document.getElementById('suggestions');
  ul.innerHTML = '';
  ul.append(...lis);

  return ul;
}
