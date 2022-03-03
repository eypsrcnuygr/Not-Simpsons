export const fetchAllCharactersBeginning = () => ({
  type: "FETCH_ALL_CHARACTERS_BEGINNING",
});

export const fetchAllCharactersSuccess = (name, avatar, job, id, about) => ({
  type: "FETCH_ALL_CHARACTERS_SUCCESS",
  payload: { name, avatar, job, id, about },
});

export const fetchAllCharactersFailure = (error) => ({
  type: "FETCH_ALL_CHARACTERS_FAILURE",
  payload: error,
});

export const deleteOneCharacter = (name, avatar, job, id, about) => ({
  type: "DELETE_ONE_CHARACTER",
  payload: { name, avatar, job, id, about },
});

export const addOneCharacter = (name, avatar, job, id, about) => ({
  type: "ADD_ONE_CHARACTER",
  payload: { name, avatar, job, id, about },
});
