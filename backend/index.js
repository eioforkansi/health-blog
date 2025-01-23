import express from "express";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const file = req.file;
  res.status(200).json(file.filename);
  console.log("File upload");
});

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(3000, () => {
  console.log("Backend serving!");
});
