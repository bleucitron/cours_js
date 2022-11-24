const url = `https://pokeapi.co/api/v2`;

function getJson(url) {
  return fetch(url).then(r => r.json());
}

async function getPokemons(numero = 1, lang = 'en') {
  try {
    const generation = await getJson(`${url}/generation/${numero}`);

    const allDataP = generation.pokemon_species.map(async s => {
      const id = s.url.split('/').at(-2);

      const pokemonP = getJson(`${url}/pokemon/${id}`).catch(() => null);
      const speciesP = getJson(s.url).catch(() => null);

      try {
        const [pokemon, species] = await Promise.all([pokemonP, speciesP]);

        const nameObj = species.names.find(n => n.language.name === lang);
        const name = nameObj?.name ?? species.name;

        const pokemonData = {
          id: pokemon.id,
          name,
          image: pokemon.sprites?.front_default,
        };

        return pokemonData;
      } catch (e) {
        console.error(e);
        return null;
      }
    });

    return Promise.all(allDataP);
  } catch (e) {
    return null;
  }
}

getPokemons(6, 'fr').then(pokemons => {
  console.log('Pokemons', pokemons);
});
