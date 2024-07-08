import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import Header from "../Header";
import PostItem from "../PostItem";
import "./index.css";

const PostsDisplay = (props) => {
  const { history } = props;
  const postDetails = useContext(PostContext);
  const { postList } = postDetails;
  const onClickCreatePostButton = () => history.push("/create-post");

  return (
    <>
      <Header />
      <div className="posts-display">
        <h1>All Posts</h1>
        <ul className="posts-list">
          {postList.map((eachPost) => (
            <PostItem eachPost={eachPost} key={eachPost.id} />
          ))}
        </ul>
        <button
          className="navbar-create-button"
          type="button"
          onClick={onClickCreatePostButton}
        >
          Create Post
        </button>
      </div>
    </>
  );
};

export default PostsDisplay;
