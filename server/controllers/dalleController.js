// Require necessary modules
const cloudinary = require("cloudinary").v2;
const Post = require("../models/postModel");
const { Configuration, OpenAIApi } = require("openai");

// Set up OpenAI configuration using API key stored in environment variable
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create new OpenAI instance using configuration
const openai = new OpenAIApi(configuration);

// Controller function to get DALL-E images
exports.getDalleImages = async (req, res) => {
  // Return success message
  res.status(200).json({ status: "success", message: "Hello from DALL-E" });
};

// Controller function to create DALL-E images
exports.createDalleImages = async (req, res) => {
  try {
    // Get prompt from request body
    const { prompt } = req.body;

    // Use OpenAI API to create DALL-E image based on prompt
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    // Log the response from the OpenAI API
    // console.log(aiResponse);

    // Get the base64 encoded image data from the OpenAI API response
    const image = aiResponse.data.data[0].b64_json;

    // Return success message and image data
    res.status(201).json({
      status: "success",
      data: {
        photo: image,
      },
    });
  } catch (error) {
    // Log any errors and return error message to client
    // console.log(error.message);
    res
      .status(500)
      .json({ status: "fail", message: error?.response?.data.error.message });
  }
};
