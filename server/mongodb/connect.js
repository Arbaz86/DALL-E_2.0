const mongoose = require("mongoose");

// A function that connects to a MongoDB database using the provided url
const connectDB = (url) => {
  // Set strict mode on queries
  mongoose.set("strictQuery", true);

  // Connect to the database
  mongoose
    .connect(url)
    .then(() => {
      console.log("> MongoDB successfully connected!"); // Log successful connection
    })
    .catch((err) => {
      console.log(err.message); // Log error message if there is an error
    });
};

module.exports = connectDB; // Export the connectDB function
