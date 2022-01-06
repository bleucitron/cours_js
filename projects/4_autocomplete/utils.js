const BASE_URL = 'https://api-adresse.data.gouv.fr/search/';

function makeSearchUrl(value) {
  return `${BASE_URL}?q=${value}&type=housenumber&autocomplete=1`;
}

export function search(value) {
  return fetch(makeSearchUrl(value))
    .then(r => r.json())
    .then(results => results.features.map(f => f.properties));
}
