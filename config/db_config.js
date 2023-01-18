const mongoose = require('mongoose');

require('dotenv').config();
mongoose
  .connect(process.env.DBCONNECTION)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

  module.exports = mongoose;
