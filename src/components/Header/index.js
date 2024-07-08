import { withRouter } from "react-router-dom";
import "./index.css";

const Header = (props) => {
  const { history, location } = props;

  const onClickCreatePostButton = () => history.push("/create-post");

  const onClickNavTitle = () => history.push("/");

  const showCreatePostButton = location.pathname !== "/create-post";

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title" onClick={onClickNavTitle}>
          Minimal Blog
        </h1>
        {showCreatePostButton && (
          <button
            className="navbar-create-button"
            type="button"
            onClick={onClickCreatePostButton}
          >
            Create Post
          </button>
        )}
      </div>
    </nav>
  );
};

export default withRouter(Header);
