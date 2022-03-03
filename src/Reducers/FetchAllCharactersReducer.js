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
        error: "",
      };
    case "FETCH_ALL_CHARACTERS_FAILURE":
      return {
        isFetching: false,
        name: null,
        avatar: null,
        job: null,
        id: null,
        error: action.payload,
      };
    case "DELETE_ONE_CHARACTER":
      console.log(action.payload.name);
      return {
        isFetching: false,
        name: action.payload.name,
        avatar: action.payload.avatar,
        job: action.payload.job,
        id: action.payload.id,
        error: "",
      };
    default:
      return state;
  }
};

export default FetchAllCharactersReducer;
