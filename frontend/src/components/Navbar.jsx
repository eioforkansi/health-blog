import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext";

export const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>HealthBlog</h1>
          </Link>
        </div>
        <div className="links">
          <Link to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span className="write-navbar">
            <Link to="/write">Write</Link>
          </span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <span>{currentUser?.username}</span>
        </div>
      </div>
    </div>
  );
};
