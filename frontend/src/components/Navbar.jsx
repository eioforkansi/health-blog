import { Link } from "react-router-dom";

export const Navbar = () => {
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
          <span>Emeka</span>
          <span>Logout</span>
          <span className="user">
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
