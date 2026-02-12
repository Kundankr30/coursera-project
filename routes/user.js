// use bcrypt 
const { Router } = require("express");
const {userModel,couserModel,purchasemodel} = require("../db")
const userRouter= Router();
const jwt  = require("jsonwebtoken");
const {userMiddleware} = require("../middlewares/user")
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
        const user = jwt.sign({
            id:user._id,
        },JWT_USER_PASSWORD);
        res.json({
            token:token
        })

    }
    else{
        res.status(403).json({
            message:"Email or password is incorrect"
        })
    }

})
userRouter.get("/purchases",userMiddleware,async function(req,res){
    const userId = req.userId;
    const purchases = await purchasemodel.find({
        userId,
    })
    let purchasedCourseIds = [];
    for(let i=0;i<purchases.length;i++){
        purchasedCourseIds.push(purchases[i].courseId)
    }
    const coursesData = await couserModel.find({
        _id:{$in:purchasedCourseIds}
    })
    res.json({
        purchases,coursesData
    })
})
module.exports ={
    userRouter: userRouter
}