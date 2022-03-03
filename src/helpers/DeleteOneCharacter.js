import { deleteOneCharacter } from "../Actions";

const deleteOneCharacterHelper = (names, jobs, avatars, ids) => (dispatch) => {
  dispatch(deleteOneCharacter(names, avatars, jobs, ids));
};

export default deleteOneCharacterHelper;
