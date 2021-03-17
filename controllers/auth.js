const User = require("../models/user");
const uuid = require("uuid/v4");
const { check, validationResult } = require("express-validator");


exports.signup = (req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()){
  return res.status(422).json({
    error:errors.array()[0].msg
  })
} 

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "Not able to save in database",
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};

exports.signout = (req, res) => {
  res.json({ message: "user signout" });
  if (!errors.isEmpty()){
    return res.status(422).json({
      error:errors.array()[0].msg
    })
  } 
  
User.findOne({email},(err,user)=>{
  if(err){
    res.status(400).json({
      error:"USER email does not exit"
    })
  }
  if (user.authenticate(password ))
})



};

exports.signin = (req,res)=>{
const {email,password} = req.body

}