const express = require("express")
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")
const app = express();
app.use(express.json());
console.log("reached health")
app.get("/health",function(req,res){
    res.status(200).json({
        message:"Server is working fine"
    })
})
console.log("Passed health")
app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);
app.listen(4000,()=>{
    console.log("Server is running at port 4000")
});