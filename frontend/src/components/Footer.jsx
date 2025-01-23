import { Link } from "react-router-dom";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Tiktok from "../img/tiktok.png";
import Youtube from "../img/youtube.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>HealthBlog</h1>
          </Link>
        </div>
        <div className="contact">
          <div className="links">
            <Link>About us</Link>
            <Link>Contact us</Link>
          </div>
          <div className="socials">
            <img src={Facebook} alt="" />
            <img src={Tiktok} alt="" />
            <img src={Instagram} alt="" />
            <img src={Youtube} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
