import axios from "axios";
import { comments, posts } from "./data";
import { IImage } from "../global";

export const getPosts = () => {
  return posts;
};

export const getComments = (id: number) => {
  return comments.filter((c) => c.id === id)[0];
};

export const getImages = async () => {
  const images: { data: IImage[] } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );

  return images.data.splice(0, 10);
};
