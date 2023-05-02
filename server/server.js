// Require the Express app and the connectDB function
const app = require("./app");
const connectDB = require("./mongodb/connect");

// Set the port to 8080 or use the value specified in the environment variable PORT
const PORT = 8080 || process.env.PORT;

// Start the app and connect to the MongoDB database
app.listen(PORT, async () => {
  try {
    // Call the connectDB function and pass the MongoDB URL
    await connectDB(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error.message);
  }

  // Log a message to indicate the server is running
  console.log(`> Server running on port http://localhost:${PORT}`);
});
