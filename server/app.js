require("dotenv").config();
const express = require("express");
const cors = require("cors");

const postRouter = require("./routes/postRoutes");
const dalleRouter = require("./routes/dalleRoutes");

const app = express();

// Parse JSON request body and limit its size to 10KB
app.use(express.json({ limit: "50mb" }));

// Enable Cross-Origin Resource Sharing (CORS) for all routes
app.use(cors());

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/dalle", dalleRouter);

app.get("/", (req, res) => {
  res.status("200").json({ status: "success", message: "Hello From DALL-E!" });
});

module.exports = app;
