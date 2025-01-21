import { db } from "../connect.js";

export const getPosts = (req, res) => {
  const script = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";
  db.query(script, [req.query.cat], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const script =
    "SELECT u.username, u.img AS userImg, p.title, p.desc, p.img, p.cat, p.date FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?";
  db.query(script, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data[0]);
  });
};
export const addPost = (req, res) => {};
export const deletePost = (req, res) => {};
export const updatePost = (req, res) => {};
