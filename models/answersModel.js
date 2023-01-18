const mongoose = require("../config/db_config");

const answerSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  likes: {
    type: Number,
  },
  dislikes: {
    type: Number,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Answer", answerSchema);
