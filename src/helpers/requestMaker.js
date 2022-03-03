import { apiUrl } from "./variables";
import {
  fetchAllCharactersBeginning,
  fetchAllCharactersSuccess,
  fetchAllCharactersFailure,
} from "../Actions";
import axios from "axios";

const requestMaker = () => (dispatch) => {
  dispatch(fetchAllCharactersBeginning());

  (async function getReq() {
    try {
      const result = await axios.get(apiUrl);
      dispatch(
        fetchAllCharactersSuccess(
          result.data.map((element) => element.name),
          result.data.map((element) => element.avatar),
          result.data.map((element) => element.job),
          result.data.map((element) => element.id),
          result.data.map((element) => element.name)
        )
      );
      return result;
    } catch (error) {
      dispatch(fetchAllCharactersFailure(error));
      return error;
    }
  })();
};

export default requestMaker;
