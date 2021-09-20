const express = require("express")
const router = new  express.Router()
const userController = require('../controllers/userController')
//signup route
router.post('/signup', async (req,res) =>{
    userController.user_signup(req, res);
})
//login route
router.post('/login', async (req,res) =>{
    userController.user_login(req, res);
})
module.exports = router 
