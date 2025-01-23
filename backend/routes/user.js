import express from "express";
import { getUser, updateImg, updateProfile } from "../controllers/user.js";
const router = express.Router();

router.get("/:id", getUser);
router.put("/:id", updateImg);
router.put("/update/:id", updateProfile);

export default router;
