const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('./config/db_config')
const cors = require('cors');
const userRouters = require("./routers/userRouters.js");
const commentRouters = require("./routers/commentRouters.js");
const answerRouters = require("./routers/answerRouters.js");



const server = express();


server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/api',userRouters);
server.use('/api',commentRouters);
server.use('/api',answerRouters);

require('dotenv').config();
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})