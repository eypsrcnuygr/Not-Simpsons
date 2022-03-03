export const fetchAllCharactersBeginning = () => ({
  type: "FETCH_ALL_CHARACTERS_BEGINNING",
});

export const fetchAllCharactersSuccess = (name, avatar, job, id) => ({
  type: "FETCH_ALL_CHARACTERS_SUCCESS",
  payload: { name, avatar, job, id },
});

export const fetchAllCharactersFailure = (error) => ({
  type: "FETCH_ALL_CHARACTERS_FAILURE",
  payload: error,
});

//   export const fetchPokemon = url => ({
//     type: 'FETCH_POKEMON',
//     payload: url,
//   });

//   export const fetchPokemonLoading = () => ({
//     type: 'FETCH_POKEMON_LOADING',
//   });
