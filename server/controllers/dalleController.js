const cloudinary = require("cloudinary").v2;
const Post = require("../models/postModel");
const { Configuration, OpenAIApi, Configuration } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
