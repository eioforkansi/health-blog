import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const script = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";
  db.query(script, [req.query.cat], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const script =
    "SELECT u.username, u.img AS userImg, p.id, p.title, p.desc, p.img, p.cat, p.date FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?";
  db.query(script, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};
export const addPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token not valid");

    const script =
      "INSERT INTO posts(title, `desc`, img, cat, `date`, uid) VALUES (?)";
    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];
    db.query(script, [values], (err, data) => {
      if (err) return res.status(403).json("Error creating your post");
      return res.status(200).json("Post created");
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token not valid");
    const postId = req.params.id;
    const script = "DELETE FROM posts WHERE id = ? AND uid = ?";
    db.query(script, [postId, userInfo.id], (err, data) => {
      if (data.affectedRows === 0 || err)
        return res.status(403).json("You can only delete your post");
      return res.status(200).json("Your post has been deleted");
    });
  });
};
export const updatePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token not valid");
    const postId = req.params.id;
    const script =
      "UPDATE posts SET title=?, `desc`=?, img=?, cat=? WHERE id =? AND uid=?";
    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];
    db.query(script, [...values, postId, userInfo.id], (err, data) => {
      console.log(err);
      console.log(postId, userInfo.id);
      if (err) return res.status(403).json("Error creating your post");
      return res.status(200).json("Post updated");
    });
  });
};
