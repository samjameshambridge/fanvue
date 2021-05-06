import { IPostsState } from "../../global";
import { SET_POSTS, PossibleActions } from "../actions/postsActions";

const initialState: IPostsState = {
  posts: [],
};

function postsReducer(state = initialState, action: PossibleActions) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };

    default:
      return {
        ...state,
      };
  }
}
export default postsReducer;
