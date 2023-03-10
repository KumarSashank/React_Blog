import express from "express";
import authRoutes from "./routes/auth.js";
import { db } from "./db.js";
// import userRoutes from "./routes/users.js";
// import postRoutes from "./routes/posts.js";
// import cookieParser from "cookie-parser";
// import multer from "multer";

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use(cookieParser());
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../client/public/upload");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });

// const upload = multer({ storage });

// app.post("/api/upload", upload.single("file"), function (req, res) {
//   const file = req.file;
//   res.status(200).json(file.filename);
// });

app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);

// app.listen(8800, () => {
//   console.log("Connected!");
// });

app.listen(8800, () => {
  console.log("Server is running on port 8800");

  db.connect((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Database connected");
    }
  });
});
