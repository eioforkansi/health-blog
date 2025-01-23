import express from "express";
import jwt from "jsonwebtoken";
import { db } from "../connect.js";
const router = express.Router();

export const updateImg = (req, res) => {
  console.log(req.params.id);
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token not valid");
    const { id } = req.params;
    const { img } = req.body;
    const script = "UPDATE users SET img = ? WHERE id = ?";
    const values = [img, id];
    db.query(script, values, (err, data) => {
      console.log(err);
      if (err) return res.status(403).json("Error uploading your image");
      return res.status(200).json("Image uploaded");
    });
  });
};

export const updateProfile = (req, res) => {
  console.log(req.params.id);
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token not valid");
    const { id } = req.params;
    const { username, email, dob, country, city, profession } = req.body;
    const script =
      "UPDATE users SET username = ?, email = ?, dob = ?, country = ?, city = ?, profession = ? WHERE id = ?";
    const values = [username, email, dob, country, city, profession, id];
    db.query(script, values, (err, data) => {
      console.log(err);
      if (err) return res.status(403).json("Error updating your profile");
      return res.status(200).json("Profile updated");
    });
  });
};

export const getUser = (req, res) => {
  const script = "SELECT * FROM users  WHERE id = ?";
  db.query(script, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

export default router;
