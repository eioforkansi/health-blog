import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // Check existing user
  const script = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(script, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!");

    // Secure user password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;

    // Insert into database
    const script =
      "INSERT INTO users(`username`, `email`,`password`) VALUES(?)";
    const values = [req.body.username, req.body.email, req.body.password];

    db.query(script, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User created!");
    });
  });
};

export const login = (req, res) => {
  // Check for user
  const script = "SELECT * FROM users WHERE username = ?";
  db.query(script, req.body.username, (err, data) => {
    if (err) return res.json(err);
    if (data.length == 0) return res.status(404).json("User unavailable");

    // Check password
    const isPassword = bcrypt.compareSync(req.body.password, data[0].password);
    if (!isPassword) return res.status(400).json("Wrong credentials");

    const token = jwt.sign({ id: data[0].id }, "secretkey");
    const { password, ...info } = data;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(info);
  });
};

export const logout = (req, res) => {
  res.json("");
};
