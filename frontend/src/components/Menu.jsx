import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log("Error fetching posts", error);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>
            <Link to={`/post/${post.id}`}>Read More</Link>
          </button>
        </div>
      ))}
    </div>
  );
};
