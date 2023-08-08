const express = require("express");
const bodyParser = require("body-parser");
const feedRoutes = require("./routes/feed");
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");
const authRoutes = require("./routes/auth");

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);

app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use("/feed", feedRoutes);
app.use("/auth", authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    "mongodb+srv://abuvbu:abuVBU_1988@cluster0.0w7u0to.mongodb.net/messages",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(result => {
    const server = app.listen(8080);
    // const io = require("./socket")(server, {
    //    cors: {
    //       origin: "http://localhost:3000",
    //       methods: ["GET", "POST"],
    //    },
    // });
    const io = require("./socket").init(server);
    io.on("connection", socket => {
      console.log("client connected");
    });
  })
  .catch(err => {
    console.log(err);
  });
