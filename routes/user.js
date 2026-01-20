// use bcrypt 
const { Router } = require("express");
const {userModel,couserModel,purchasemodel} = require("../db")
const userRouter= Router();
const jwt  = require("jsonwebtoken");
userRouter.post("/signup",async function(req,res){
    const{email,password,firstname,lastname} = req.body;
    await userModel.create({
        email:email,
        password:password,
        firstname:firstname,
        lastname:lastname
    })
    res.json({
        message:"Signup sucessful"
    })

})
userRouter.post("/signin",async function(req,res){
    const {email,password} = req.body;
    const user = await userModel.findOne({
        email:email,
        password:password
    })
    if(user){

    }
    else{
        res.status(403).json({
            message:"Email or password is incorrect"
        })
    }

})
module.exports ={
    userRouter: userRouter
}