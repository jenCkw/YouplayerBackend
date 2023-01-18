const Comment = require("../models/commentModel.js");

exports.addComment = (req, res) => {
  const comment = new Comment({
    content: req.body.content,
    email: req.body.email,
    videoId: req.body.videoId,
  });
  comment
    .save()
    .then((comment) =>
      res.status(200).json({
        message: "comment added",
        comment: comment,
      })
    )
    .catch((err) => res.status(500).json(err));
};

exports.getAllComments = (req, res) => {
  Comment.find();
  populate({ path: "userId", select: "email" })
    .then((comments) => {
      res.status(200).json({
        comments: comments,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getComment = (req, res) => {
  Comment.findOne({ _id: req.params.id });
  populate({ path: "userId", select: "email" })
    .then((comment) => {
      res.status(200).json({
        comments: comment,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.deleteComment = (req, res) => {
  Comment.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "comment deleted" }))
    .catch((err) => {
      console.log(err);
    });
};

exports.UpdateComment = (req, res) => {
  Comment.UpdateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then((comment) =>
      res.status(200).json({ message: "comment updated", comment: comment })
    )
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllVideoComments = (req, res) => {
  Comment.find({ videoId: req.params.videoId }).sort("-createdAt").then((comments) =>
    res.status(200).json(comments)
  );
};
