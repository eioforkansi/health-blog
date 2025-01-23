import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import noAvatar from "../img/noAvatar.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "../components/Menu";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/authContext";
import axios from "axios";
import moment from "moment";

export const Single = () => {
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log("Error fetching posts", error);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log("Error fetching posts", error);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          <img src={`../upload/${post?.userImg}`} alt="" />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to="/write?edit=2" state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {getText(post.desc)}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};
