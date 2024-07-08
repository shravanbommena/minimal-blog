import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { withRouter } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";

import "./index.css";

const PostItem = (props) => {
  const postDetails = useContext(PostContext);
  const { setCurrentEditId } = postDetails;
  // console.log(setCurrentEditId);
  const { eachPost, history } = props;
  const { id, title, content } = eachPost;

  const onClickEditPost = () => {
    setCurrentEditId(id);
    history.push("/create-post");
  };

  return (
    <li className="post-item">
      <h2>{title}</h2>
      <p>{content}</p>
      <button
        type="button"
        className="post-edit-button"
        onClick={onClickEditPost}
      >
        <FaPencilAlt />
      </button>
    </li>
  );
};

export default withRouter(PostItem);
