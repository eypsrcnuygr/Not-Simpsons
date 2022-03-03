import { combineReducers } from "redux";
import FetchAllCharactersReducer from "./FetchAllCharactersReducer";

const rootReducer = combineReducers({
  FetchAllCharactersReducer,
});

export default rootReducer;
