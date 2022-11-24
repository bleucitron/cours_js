const url = `https://pokeapi.co/api/v2`;

function getJson(url) {
  return fetch(url).then(r => r.json());
}

function getPokemons(numero = 1, lang = 'en') {
  return getJson(`${url}/generation/${numero}`)
    .then(generation => {
      const allDataP = generation.pokemon_species.map(s => {
        const id = s.url.split('/').at(-2);

        const pokemonP = getJson(`${url}/pokemon/${id}`).catch(() => null);
        const speciesP = getJson(s.url).catch(() => null);

        return Promise.all([pokemonP, speciesP]).then(([pokemon, species]) => {
          const nameObj = species.names.find(n => n.language.name === lang);
          const name = nameObj?.name ?? species.name;

          const pokemonData = {
            id: pokemon.id,
            name,
            image: pokemon.sprites?.front_default,
          };

          return pokemonData;
        });
      });

      return Promise.all(allDataP);
    })
    .then(data => {
      data.sort((d1, d2) => d1.id - d2.id);

      return data;
    })
    .catch(e => {
      console.error('Oups...', e);
    });
}

getPokemons(6, 'fr').then(pokemons => {
  console.log('Pokemons', pokemons);
});
