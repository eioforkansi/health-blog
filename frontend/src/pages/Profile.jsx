import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";

export default function Profile() {
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [user, setUser] = useState({});
  const { currentUser, setCurrentUser, logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (currentUser?.id) {
          const res = await axios.get(`/api/users/${currentUser.id}`);
          setUser(res.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUser();
  }, [currentUser?.id]);

  console.log(user);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", img);
      const res = await axios.post("/api/upload", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      await axios.put(`/api/users/${currentUser.id}`, {
        img: img ? imgUrl : "",
      });
      setCurrentUser((prev) => ({
        ...prev,
        img: imgUrl,
      }));
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/users/${currentUser.id}`);
      logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile">
      <div className="container">
        <div className="profileImage">
          <img src={`../upload/${user?.img}`} alt="" />
          <input
            type="file"
            name=""
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Select image
          </label>
          <Link onClick={handleSubmit}>
            <span>Upload</span>
          </Link>
        </div>
        <div className="profileInfo">
          <span className="profileItem">
            <b>Name: </b>
            {user.username}
          </span>
          <span className="profileItem">
            <b>Email: </b>
            {user?.email}
          </span>
          <span className="profileItem">
            <b>Date of birth: </b>
            {user?.dob}
          </span>
          <span className="profileItem">
            <b>Country: </b>
            {user?.country}
          </span>
          <span className="profileItem">
            <b>City: </b>
            {user?.city}
          </span>
          <span className="profileItem">
            <b>Profession: </b>
            {user?.profession}
          </span>
          <div className="buttons">
            <Link onClick={handleDelete}>Delete</Link>
            <Link to={`/update/${currentUser.id}`}>Update</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
