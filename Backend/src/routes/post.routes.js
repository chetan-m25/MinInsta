const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middlewares/auth.middleware");

// Route to create a post with single image upload
postRouter.post(
  "/",
  upload.single("image"), // Upload one image from form field named "image"
  identifyUser,
  postController.createPostController, // Call controller to handle post creation
);

// Route to get all posts of loggedIn user
postRouter.get("/", identifyUser, postController.getPostController);

// Route to get details of a specific post by postId
postRouter.get(
  "/details/:postId",
  identifyUser, // Middleware to identify user from JWT token
  postController.getPostDetailsController,
);

module.exports = postRouter;
