const mongoose = require("mongoose");

// Create schema (structure) for posts collection
const postSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      required: [true, "Image url is required to create a post"],
    },
    user: {
      type: String,
      required: [true, " User name is required to create a post"],
    },
  },

  { timestamps: true }, // Automatically adds createdAt and updatedAt
);

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
