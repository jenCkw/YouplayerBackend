const User = require("../models/userModel.js");

exports.addUser = (req, res) => {
  const user = new User({
    email: req.body.email,
  })
   user
     .save()
     .then((user) => {
       res.status(201).json({
         message: "User added successfully",
         success: true,
         user: user,
       });
     })
     .catch((err) => {
       console.log(err);
       res.status(400).json({
         message: "Something went wrong ",
         error: err,
       });
     });
}

exports.getAllUsers = (req, res) => {
  User.find()
  .then((users)=>{
    res.status(200).json({
      users:users})
  })
  .catch(err=>{
    console.log(err);
  })

   }

exports.getUser = (req, res) => {
  User.findOne({_id : req.params.id})
    .then((user) => {
      res.status(200).json({
        users: user,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
