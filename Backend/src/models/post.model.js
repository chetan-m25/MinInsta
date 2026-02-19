const mongoose = require("mongoose");

// Create schema (structure) for posts collection
const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    default: "",
  },
  imageUrl: {
    type: String,
    required: [true, "Image url is required to create post"],
  },
  username: {
    type: String,
    required: [true, " User name is required to create post"],
  },
});

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
