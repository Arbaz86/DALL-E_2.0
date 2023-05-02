const mongoose = require("mongoose");

// Create a new schema for the 'posts' collection in the database
const postSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please tell us your name!"] }, // Define a 'name' field that is a string and required
  prompt: { type: String, required: [true, "Prompt should not be Empty!"] }, // Define a 'prompt' field that is a string and required
  photo: { type: String, required: [true, "Must have photo"] }, // Define a 'photo' field that is a string and required
});

// Create a new model for the 'posts' collection using the schema defined above
const Post = mongoose.model("Post", postSchema);

// Export the Post model so that it can be used in other parts of the application
module.exports = Post;
