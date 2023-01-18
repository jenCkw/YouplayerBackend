const mongoose = require("../config/db_config");

const commentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
    email: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
