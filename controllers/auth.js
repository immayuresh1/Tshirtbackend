const User = require("../models/user");
const uuid= require('uuid/v4');
exports.signup = (req, res) => {
    const user  = new User(req.body)
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err: "Not able to save in database"
            })
        }
        res.json({
            name:user.name,
            email:user.email,
            id:user._id
        })
    })
};

exports.signout = (req, res) => {
  res.json({ message: "user signout" });
};
