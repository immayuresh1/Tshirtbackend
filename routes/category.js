const express = require("express")
const router = express.Router()

const {} = require("../controllers/category")
const {isSignedIn,isAdmin,isAuthenticated} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")


module.exports = router