const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{ type:String},
    email:{ type:String},
    phone:{type:String},
    password:{type:String},
    isDeleted:{type:Boolean,default:false},
    resetLink:{data:String,default:''}
},{timestamps:true}
)

module.exports=mongoose.model("user",userSchema)