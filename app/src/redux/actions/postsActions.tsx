import { IPost } from "../../global";

export type PossibleActions = { type: "SET_POSTS"; payload: IPost[] };

export const SET_POSTS = "SET_POSTS";

export type TSetPosts = (
  posts: IPost[]
) => { type: "SET_POSTS"; payload: IPost[] };

export const setPosts: TSetPosts = (posts) => {
  return {
    type: "SET_POSTS",
    payload: posts,
  };
};
