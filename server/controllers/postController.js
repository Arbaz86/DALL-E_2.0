const express = require("express");
const Post = require("../models/postModel");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ status: "success", data: posts });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(201).json({ status: "success", data: newPost });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};
