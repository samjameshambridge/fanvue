import { IComment } from "../../global";

export type PossibleActions = {
  type: "SET_COMMENTS";
  payload: { comments: IComment[]; postId: number };
};

export const SET_COMMENTS = "SET_COMMENTS";

export type TSetComments = (
  posts: IComment[],
  postId: number
) => {
  type: "SET_COMMENTS";
  payload: { comments: IComment[]; postId: number };
};

export const setComments: TSetComments = (comments, postId) => {
  return {
    type: "SET_COMMENTS",
    payload: { comments, postId },
  };
};
