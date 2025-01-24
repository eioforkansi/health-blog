import express from "express";
import { login, logout, register } from "../controllers/auth.js";
import { deleteUser } from "../controllers/user.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.delete("/:id", deleteUser);

export default router;
