import { Dispatch, SetStateAction } from "react";
import { connect } from "react-redux";
import { IPost } from "../global";

import { setPosts, TSetPosts } from "../redux/actions/postsActions";

interface IProps {
  setCurrentView: Dispatch<SetStateAction<"" | "posts" | "images">>;
  setPosts: TSetPosts;
}

function PostsButton({ setCurrentView, setPosts }: IProps) {
  function handleClick() {
    setCurrentView("posts");

    getPosts();
  }

  async function getPosts() {
    const req = await fetch("/posts");
    const posts: IPost[] = await req.json();

    setPosts(posts);
  }

  return <button onClick={handleClick}>Get Posts</button>;
}

export default connect(null, { setPosts })(PostsButton);
