const express=require('express')
const router=express.Router();
const cont=require('../controller/controller')
const authftn=require("../middlewares/authmiddle")

router.route('/').get(cont.home)
router.route('/login').post(cont.login)
router.route('/signup').post(cont.signup)
router.route('/user').get(authftn,cont.user)

module.exports=router;