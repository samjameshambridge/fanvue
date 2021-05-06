export interface IPost {
  id: number;
  title: string;
}

export interface IComment {
  id: number;
  comments: string[];
}

export interface IImage {
  id: number;
  url: string;
}

export interface ICommentsState {
  postId: number | null;
  comments: IComment[];
}

export interface IImagesState {
  images: IImage[];
}

export interface IPostsState {
  posts: IPost[] | [];
}

export interface IGlobalState {
  comments: ICommentsState;
  images: IImagesState;
  posts: IPostsState;
}
