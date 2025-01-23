import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";

export const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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
            {currentUser ? (
              <Link to="/write">Write</Link>
            ) : (
              <Link to="/login">Write</Link>
            )}
          </span>
          {currentUser ? (
            <span onClick={handleLogout}>Logout</span>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
          <Link to="/profile">
            {currentUser?.username && (
              <img src={`../upload/${currentUser?.img}`} alt="" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
