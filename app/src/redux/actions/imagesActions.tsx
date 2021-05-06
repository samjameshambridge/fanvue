import { IImage } from "../../global";

export type PossibleActions = {
  type: "SET_IMAGES";
  payload: IImage[];
};

export const SET_IMAGES = "SET_IMAGES";

export type TSetImages = (
  images: IImage[]
) => {
  type: "SET_IMAGES";
  payload: IImage[];
};

export const setImages: TSetImages = (images) => {
  return {
    type: "SET_IMAGES",
    payload: images,
  };
};
