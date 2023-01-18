const { populate } = require("../models/answersModel.js");
const Answer = require("../models/answersModel.js");

exports.AddAnswer = (req, res) => {
  const answer = new Answer({
    content: req.body.content,
    likes: req.body.likes,
    comments: req.body.comments,
    dislikes: req.body.dislikes,
    userId: req.body.userId,
  });
  answer.save()
    .then((answer) =>
      res.status(200).json({
        message: "answer added",
        answer: answer,
      })
    )
    .catch((err) => res.status(500).json(err));
};

exports.getAllAnswers = (req, res) => {
  Answer.find();
  populate({ path: "userId", select: "email" })
    .then((answers) => {
      res.status(200).json({
        answers: answers,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAnswer = (req, res) => {
  Answer.findOne({ _id: req.params.id });
  populate({ path: "userId", select: "email" })
    .then((answer) => {
      res.status(200).json({
        answer: answer,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteAnswer = (req, res) => {
  Answer.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "answer deleted" }))
    .catch((err) => {
      console.log(err);
    });
};

exports.UpdateAnswer = (req, res) => {
  Answer.UpdateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then((answer) =>
      res.status(200).json({ message: "answer updated", answer: answer})
    )
    .catch((err) => {
      console.log(err);
    });
};
