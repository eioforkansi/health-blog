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
          <Link to="/?cat=meditation">
            <h6>MEDITATION</h6>
          </Link>
          <Link to="/?cat=wellness">
            <h6>WELLNESS</h6>
          </Link>
          <Link to="/?cat=nutrition">
            <h6>NUTRITION</h6>
          </Link>
          <Link to="/?cat=fitness">
            <h6>FITNESS</h6>
          </Link>
          <Link to="/?cat=yoga">
            <h6>YOGA</h6>
          </Link>
          <Link to="/?cat=cancer">
            <h6>CANCER</h6>
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
