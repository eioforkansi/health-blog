import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>HealthBlog</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};
