var mongoose=require("mongoose")
var userSchema=mongoose.Schema
(
    {
        name:String,
        email:String,
        password:String,
        image:String
    }
)
module.exports =mongoose.model("users",userSchema)