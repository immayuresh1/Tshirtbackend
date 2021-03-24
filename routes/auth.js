var express = require("express");
var router = express.Router();
const {signup,signout,signin, isSignedIn}= require("../controllers/auth")
const {check,validationResult} = require("express-validator")

router.post("/signup",[
    check("name","name should be at least 3 char").isLength({min:3}),
    check("email","email is required").isEmail(),
    check("password","password should be atleast 3 chat").isLength({min:3})
],signup)


router.post("/signin",[
    check("email","email is required").isEmail(),
    check("password","password field is required").isLength({min:3})
],signin)

router.get("/signout", signout);

router.get("/testroute",isSignedIn,(req,res)=>{
    res.send("a protected route")
})

module.exports = router;
