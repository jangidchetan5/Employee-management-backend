const express = require("express")
const router = new  express.Router()
const path = require("path")
var multer  = require('multer')
const userController = require('../controllers/userController')
//storage
var storage = multer.diskStorage({
    destination:'public/uploads/',
    filename: function (req, file, cb) {
     return  cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
  })
  var upload = multer({ storage:storage })
//signup route
router.post('/signup',upload.single('profile_image') ,async (req,res) =>{
    userController.user_signup(req, res);
})
//login route
router.post('/login', async (req,res) =>{
    userController.user_login(req, res);
})
module.exports = router 
