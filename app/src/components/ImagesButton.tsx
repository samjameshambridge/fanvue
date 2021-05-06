import { Dispatch, SetStateAction } from "react";
import { connect } from "react-redux";
import { IImage } from "../global";
import { setImages, TSetImages } from "../redux/actions/imagesActions";

interface IProps {
  setCurrentView: Dispatch<SetStateAction<"" | "posts" | "images">>;
  setImages: TSetImages;
}

function ImagesButton({ setCurrentView, setImages }: IProps) {
  function handleClick() {
    setCurrentView("images");

    getImages();
  }

  async function getImages() {
    const req = await fetch("/images");
    const images: IImage[] = await req.json();

    setImages(images);
  }

  return <button onClick={handleClick}>Get Pictures</button>;
}

export default connect(null, { setImages })(ImagesButton);
