const postModel = require("../models/post.model");
const Imagekit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

// Create ImageKit instance using private key from .env file
const imagekit = new Imagekit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

// Controller to create a new post
async function createPostController(req, res) {
  // Upload image file to ImageKit
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Image",
    folder: "insta-project/posts",
  });

  // Create new post in database
  const post = await postModel.create({
    caption: req.body.caption,
    imageUrl: file.url,
    username: req.user.username,
  });

  res.status(201).json({
    message: "Post Created Successfully",
    post,
  });
}

// Get all posts of loggedIn user after verifying JWT token
async function getPostController(req, res) {
  // Extract user ID from decoded token
  const username = req.user.username;

  // Find all posts created by this user
  const posts = await postModel.find({
    username: username,
  });

  res.status(200).json({
    message: "Posts Fetched Successfully",
    posts,
  });
}

// Get single post details if user is authorized
async function getPostDetailsController(req, res) {
  const username = req.user.username;
  const postId = req.params.postId;

  // Find post by its ID
  const post = await postModel.findById(postId);

  // If post does not exist, return 404 error
  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  // Allow only if post belongs to loggedIn user
  const isValidUser = post.username === username;
  if (!isValidUser) {
    return res.status(403).json({
      message: "Forbidden Content",
    });
  }

  res.status(200).json({
    message: "Post Fetched Successfully",
    post,
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
};
