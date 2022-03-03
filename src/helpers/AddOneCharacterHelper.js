import { addOneCharacter } from "../Actions";

const deleteOneCharacterHelper =
  (names, jobs, avatars, ids, about) => (dispatch) => {
    dispatch(addOneCharacter(names, jobs, avatars, ids, about));
  };

export default deleteOneCharacterHelper;
