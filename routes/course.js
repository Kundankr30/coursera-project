const {Router}  = require("express");
const courseRouter = Router();
courseRouter.post("/purchase",function(req,res){
    res.json("Purchase endpoint")

})
courseRouter.get("/preview",function(req,res){
    res.json("course preview endpoint")
})
module.exports={
    courseRouter:courseRouter
}