const initialState = {
  name: null,
  avatar: null,
  job: null,
  id: null,
  isFetching: false,
  error: "",
};

const FetchAllCharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_CHARACTERS_BEGINNING":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_ALL_CHARACTERS_SUCCESS":
      return {
        isFetching: false,
        name: action.payload.name,
        avatar: action.payload.avatar,
        job: action.payload.job,
        id: action.payload.id,
        about: action.payload.about,
        error: "",
      };
    case "FETCH_ALL_CHARACTERS_FAILURE":
      return {
        isFetching: false,
        name: null,
        avatar: null,
        job: null,
        id: null,
        about: null,
        error: action.payload,
      };
    case "DELETE_ONE_CHARACTER":
      return {
        isFetching: false,
        name: action.payload.name,
        avatar: action.payload.avatar,
        job: action.payload.job,
        id: action.payload.id,
        about: action.payload.about,
        error: "",
      };
    case "ADD_ONE_CHARACTER":
      return {
        isFetching: false,
        name: action.payload.name,
        avatar: action.payload.avatar,
        job: action.payload.job,
        id: action.payload.id,
        about: action.payload.about,
        error: "",
      };
    default:
      return state;
  }
};

export default FetchAllCharactersReducer;
