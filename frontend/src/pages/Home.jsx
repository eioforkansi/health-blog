import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/authContext";

export const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(`/api/posts${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log("Error fetching posts", error);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>

              {currentUser ? (
                <button>
                  <Link to={`/post/${post.id}`}>Read More</Link>
                </button>
              ) : (
                <button>
                  <Link to="/login">Read More</Link>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
