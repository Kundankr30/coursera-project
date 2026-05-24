// use bcrypt 
//take Router form express
// all db models
//userrouter
//jwt
//middle ware
const {JWT_USER_PASSWORD}  = require("../config")
const bcrypt = require('bcrypt')
const{Router} = require('express')
const jwt = require("jsonwebtoken")
const userRouter = Router()
const {userMiddleware} = require("../middlewares/user")
const {userModel} = require("../db")
userRouter.post("/signup",async function(req,res){
    const{email,password,firstname,lastname} = req.body;
    const user = await userModel.findOne({
        email:email
    })
    if(user){
        res.json({
            message:"User Already exists , try to signin"
        })
    }
    else{
        const hashedpass = await bcrypt.hash(password,5)
        userModel.create({
            email:email,
            password:hashedpass,
            firstname:firstname,
            lastname:lastname
        })
        res.status(200).json({
        message:"Signup sucessfull"
        })
    }
})
userRouter.post("/signin",async function(req,res){
    const {email,password} = req.body
    const uesr  = userModel.findOne({
        email:email
    })
    if(user){
        const pass = await bcrypt.compare(password,user.password)
        if(pass){
            const token = jwt.sign({id:user._id},JWT_USER_PASSWORD)
            res.json({
                Token:token
            })
             res.json({
            message:"Sign in Sucessfull"
            })
        }
        else{
            res.json({message:"Incorrect Password"})
        }  
    }
    else{
        res.status(400).json({
            message:"User Do not Exist"
        })
    }

 })
module.exports = {
    userRouter
};