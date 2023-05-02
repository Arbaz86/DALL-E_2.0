// Load environment variables from .env file
require("dotenv").config();

// Import required packages
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Import routes
const postRouter = require("./routes/postRoutes");
const dalleRouter = require("./routes/dalleRoutes");

// Create an instance of express application
const app = express();

// Parse incoming JSON request body and limit its size to 50mb
app.use(express.json({ limit: "50mb" }));

// Enable Cross-Origin Resource Sharing (CORS) for all routes
app.use(cors());

// Log HTTP requests in dev mode
app.use(morgan("dev"));

// Register postRouter and dalleRouter as middleware for their respective endpoints
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/dalle", dalleRouter);

// Define a root route handler that returns a success message
app.get("/", (req, res) => {
  res.status("200").json({ status: "success", message: "Hello From DALL-E!" });
});

// Export the express application for use in other modules
module.exports = app;
