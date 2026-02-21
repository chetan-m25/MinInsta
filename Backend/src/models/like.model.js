const mongoose = require("mongoose");

// Create schema (Structure) for likes collection
const likeSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      required: [true, "Post id is required to like a post"],
    },
    user: {
      type: String,
      required: [true, "User name is required to like a post"],
    },
  },

  { timestamps: true }, // Automatically adds createdAt and updatedAt
);

// Prevent duplicate likes (same user cannot like same post twice)
likeSchema.index({ post: 1, user: 1 }, { unique: true });

const likeModel = mongoose.model("likes", likeSchema);

module.exports = likeModel;
