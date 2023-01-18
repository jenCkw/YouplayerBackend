const express = require("express");
const commentControlers = require("../controlers/commentControlers.js");

const router = express.Router();

router.post("/addComment", commentControlers.addComment);
router.get("/getComments", commentControlers.getAllComments);
router.get("/getComment/:id", commentControlers.getComment);
router.delete("/deleteComment/:id", commentControlers.deleteComment);
router.put("/updateComment/:id", commentControlers.UpdateComment);
router.get("/getAllVideoComments/:videoId", commentControlers.getAllVideoComments);



module.exports = router;
