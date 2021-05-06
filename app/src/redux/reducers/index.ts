import { combineReducers } from "redux";

import comments from "./commentsReducer";
import images from "./imagesReducer";
import posts from "./postsReducer";

export default combineReducers({
  comments,
  images,
  posts,
});
