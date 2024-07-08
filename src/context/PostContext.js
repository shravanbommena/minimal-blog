import React from "react";

export const PostContext = React.createContext({
  postList: [],
  setPostList: () => {},
  currentEditId: "-1",
  setCurrenEditId: () => {},
});
