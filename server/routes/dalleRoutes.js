// Require Express framework and dalleController for Dalle Images
const express = require("express");
const dalleController = require("../controllers/dalleController");

// Create router instance with Express
const router = express.Router();

// Create endpoint for Dalle Images
router
  .route("/")
  .get(dalleController.getDalleImages) // GET request to get Dalle Images
  .post(dalleController.createDalleImages); // POST request to create Dalle Images

// Export router
module.exports = router;
