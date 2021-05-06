import { useCallback } from "react";
import { connect } from "react-redux";
import { IGlobalState, IPost, IComment } from "../global";

import { setComments, TSetComments } from "../redux/actions/commentsActions";

interface IProps {
  comments: IComment[];
  posts: IPost[];
  postId: number | null;
  setComments: TSetComments;
}

function PostList({ comments, postId, posts, setComments }: IProps) {
  const handleClick = useCallback(async (id: number) => {
    const comments = await getComments(id);

    setComments(comments, id);
  }, []);

  async function getComments(id: number) {
    const req = await fetch(`/comments/${id}`);
    const comments: { comments: IComment[] } = await req.json();

    return comments.comments;
  }

  return (
    <div>
      {posts &&
        posts.map(({ id, title }) => {
          return (
            <div>
              <p>{title}</p>
              <button onClick={() => handleClick(id)} disabled={postId === id}>
                Show Comments
              </button>
              {postId === id && (
                <div>
                  {comments.map((c) => (
                    <p>{c}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

const mapStateToProps = ({ comments, posts: { posts } }: IGlobalState) => ({
  comments: comments.comments,
  postId: comments.postId,
  posts,
});

export default connect(mapStateToProps, { setComments })(PostList);
