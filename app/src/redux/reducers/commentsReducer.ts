import { ICommentsState } from "../../global";
import { SET_COMMENTS, PossibleActions } from "../actions/commentsActions";

const initialState: ICommentsState = {
  postId: null,
  comments: [],
};

function commentsReducer(state = initialState, action: PossibleActions) {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        postId: action.payload.postId,
        comments: [...action.payload.comments],
      };

    default:
      return {
        ...state,
      };
  }
}
export default commentsReducer;
