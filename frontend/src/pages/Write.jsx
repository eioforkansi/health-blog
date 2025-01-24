import axios from "axios";
import moment from "moment";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

export const Write = () => {
  const state = useLocation().state;

  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [img, setImg] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const navigate = useNavigate();

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
      console.log(imgUrl);
      state
        ? await axios.put(`/api/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: img ? imgUrl : "",
          })
        : await axios.post(`/api/posts/`, {
            title,
            desc: value,
            cat,
            img: img ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="write">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Post title here"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <p>
              <b>Status: </b>Draft
            </p>
          </span>
          <span>
            <p>
              <b>Visibility: </b>Public
            </p>
          </span>
          <input
            type="file"
            name=""
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload image
          </label>
          <div className="buttons">
            <button>Save as draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat == "meditation"}
              name="cat"
              value="meditation"
              id="meditation"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="meditation">Meditation</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat == "wellness"}
              name="cat"
              value="wellness"
              id="wellness"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="wellness">Wellness</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={cat == "nutrition"}
              name="cat"
              value="nutrition"
              id="nutrition"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="nutrition">Nutrition</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={cat == "fitness"}
              name="cat"
              value="fitness"
              id="fitness"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="fitness">Fitness</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={cat == "yoga"}
              name="cat"
              value="yoga"
              id="yoga"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="yoga">Yoga</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={cat == "cancer"}
              name="cat"
              value="cancer"
              id="cancer"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cancer">Cancer</label>
          </div>
        </div>
      </div>
    </div>
  );
};
