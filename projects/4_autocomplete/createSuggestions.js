function makeSuggestion({ city, name, postcode }) {
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
    console.log('NAME', name, postcode, city);
  });

  return li;
}

export default function createSuggestions(suggestions) {
  const ul = document.createElement('ul');
  ul.classList.add('suggestions');

  const lis = suggestions.map(makeSuggestion);
  ul.append(...lis);

  return ul;
}
