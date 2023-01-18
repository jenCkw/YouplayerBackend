const express = require("express");
const answerController = require("../controlers/answerController.js");

const router = express.Router();

router.post("/addAnswer", answerController.AddAnswer);
router.get("/getAnswer", answerController.getAllAnswers);
router.get("/getAnswer/:id", answerController.getAnswer);
router.delete("/deleteAnwer/:id", answerController.deleteAnswer);

module.exports = router;
