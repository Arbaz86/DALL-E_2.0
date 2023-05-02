const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please tell us your name!"] },
  prompt: { type: String, required: [true, "Prompt should not be Empty!"] },
  photo: { type: String, required: [true, "Must have photo"] },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
