import { IImagesState } from "../../global";
import { SET_IMAGES, PossibleActions } from "../actions/imagesActions";

const initialState: IImagesState = {
  images: [],
};

function imagesReducer(state = initialState, action: PossibleActions) {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: [...action.payload],
      };

    default:
      return {
        ...state,
      };
  }
}
export default imagesReducer;
