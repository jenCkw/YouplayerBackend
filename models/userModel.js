const mongoose = require('../config/db_config');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: false,
  },
  firstname: {
    type: String,
    required: false,
    default: "",
  },
  lastname: {
    type: String,
    required: true,
  },
  linkdln: {
    type: String,
    required: false,
  },
  facebook: {
    type: String,
    required: false,
  },
  instagram: {
    type: String,
    required: false,
  },
});


module.exports = mongoose.model('User', userSchema);
