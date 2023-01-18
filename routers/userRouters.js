const express = require('express');
const userControler = require("../controlers/userControlers.js");

const router = express.Router();

router.post('/addUser', userControler.addUser);
router.get('/getUsers', userControler.getAllUsers);
router.get("/getUser/:id", userControler.getUser);

module.exports = router;