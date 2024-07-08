import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { PostContext } from "../../context/PostContext";
import Header from "../Header";

import "./index.css";

const CreatePost = (props) => {
  // import context
  const postDetails = useContext(PostContext);
  const { postList, setPostList, currentEditId, setCurrentEditId } =
    postDetails;

  const currentEditPostDetails = postList.filter(
    (eachPost) => eachPost.id === currentEditId
  );

  // setting title, content based on currentEditId
  const [title, setTitle] = useState(
    currentEditId !== "-1" ? currentEditPostDetails[0].title : ""
  );
  const [content, setContent] = useState(
    currentEditId !== "-1" ? currentEditPostDetails[0].content : ""
  );

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const onSubmitPost = (event) => {
    event.preventDefault();
    const newPost = {
      id: uuidv4(),
      title,
      content,
    };

    // checking currentId to see whether update previous list or
    // add new item.
    if (currentEditId !== "-1") {
      setPostList((previousList) =>
        previousList.map((eachPost) => {
          if (currentEditId === eachPost.id) {
            return { ...eachPost, title, content };
          }
          return eachPost;
        })
      );
    } else {
      setPostList((previousList) => [...previousList, newPost]);
    }
    setTitle("");
    setContent("");
    setCurrentEditId("-1");
  };

  return (
    <>
      <Header />
      <div className="create-post-page">
        <h2>Create Post</h2>
        <form className="form-container" onSubmit={onSubmitPost}>
          <div className="input-container">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={onChangeTitle}
              placeholder="Enter Title"
              className="title-input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={onChangeContent}
              placeholder="Enter Content"
              className="content-input"
              rows={12}
            />
          </div>
          <button className="create-post-button" type="submit">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
