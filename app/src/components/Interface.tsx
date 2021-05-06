import { useState } from "react";
import styled from "styled-components";

import ImagesButton from "./ImagesButton";
import ImagesGrid from "./ImagesGrid";
import PostList from "./PostList";
import PostsButton from "./PostsButton";

const InterfaceContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

function Interface() {
  const [currentView, setCurrentView] = useState<"posts" | "images" | "">("");

  return (
    <InterfaceContainer>
      <div>
        <PostsButton setCurrentView={setCurrentView} />
        <ImagesButton setCurrentView={setCurrentView} />
      </div>
      {currentView === "posts" ? (
        <PostList />
      ) : currentView === "images" ? (
        <ImagesGrid />
      ) : (
        <></>
      )}
    </InterfaceContainer>
  );
}

export default Interface;
