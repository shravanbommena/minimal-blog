import { v4 as uuidv4 } from "uuid";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import { PostContext } from "./context/PostContext";
import PostsDisplay from "./components/PostsDisplay";

import "./App.css";
import CreatePost from "./components/CreatePost";
import { useState } from "react";

const samplePostList = [
  {
    id: uuidv4(),
    title: "HTML Basics: Understanding Semantic HTML",
    content:
      "In this article, we'll explore the basics of HTML and how it's used to structure and organize content on the web. We'll cover the importance of semantic HTML, how to use HTML tags, and best practices for writing clean and readable code.",
  },
  {
    id: uuidv4(),
    title: "CSS Grid Layout: A Beginner's Guide",
    content:
      "CSS Grid Layout is a powerful tool for creating responsive and flexible layouts. In this article, we'll cover the basics of CSS Grid, how to create a grid container, and how to use grid items and grid tracks to create a custom layout.",
  },
  {
    id: uuidv4(),
    title: "JavaScript Fundamentals: Understanding Variables and Data Types",
    content:
      "In this article, we'll explore the basics of JavaScript and how it's used to add interactivity to web pages. We'll cover the different data types in JavaScript, how to declare and use variables, and best practices for writing clean and readable code.",
  },
  {
    id: uuidv4(),
    title: "HTML5 Canvas: A Beginner's Guide to Drawing and Animation",
    content:
      "HTML5 Canvas is a powerful tool for creating interactive and dynamic graphics. In this article, we'll cover the basics of HTML5 Canvas, how to create a canvas element, and how to use JavaScript to draw shapes, animate, and interact with the canvas.",
  },
  {
    id: uuidv4(),
    title: "CSS Flexbox: A Beginner's Guide to Creating Responsive Layouts",
    content:
      "CSS Flexbox is a powerful tool for creating responsive and flexible layouts. In this article, we'll cover the basics of CSS Flexbox, how to create a flex container, and how to use flex items and flexbox properties to create a custom layout.",
  },
];

function App() {
  const [postList, setPostList] = useState([...samplePostList]);
  const [currentEditId, setCurrentEditId] = useState("-1");
  console.log(setCurrentEditId);

  return (
    <BrowserRouter>
      <PostContext.Provider
        value={{
          postList,
          setPostList: setPostList,
          currentEditId,
          setCurrentEditId: setCurrentEditId,
        }}
      >
        <Switch>
          <Route exact path="/" component={PostsDisplay} />
          <Route path="/create-post" component={CreatePost} />
        </Switch>
      </PostContext.Provider>
    </BrowserRouter>
  );
}

export default App;
