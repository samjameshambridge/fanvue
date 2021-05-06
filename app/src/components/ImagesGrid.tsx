import { connect } from "react-redux";
import { IGlobalState, IImage } from "../global";

import styled from "styled-components";

interface IProps {
  images: IImage[];
}

const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  width: 50vw;

  img {
    height: auto;
    width: 100%;
  }
`;

function ImagesGrid({ images }: IProps) {
  //
  // container needs to be a grid of 3x3
  // every nthChild(odd) aligned to right
  // every nthChild(even) aligned to left
  // do this by passing in props to a StyledComponent
  //
  return (
    <Container>
      {images.map(({ id, url }) => (
        <img src={url} key={id} />
      ))}
    </Container>
  );
}

const mapStateToProps = ({ images }: IGlobalState) => {
  return {
    images: images.images,
  };
};

export default connect(mapStateToProps)(ImagesGrid);
