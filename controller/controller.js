const { update } = require('../model/model')
const userModel=require('../model/model')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const createUser=async function(req,res){
    let data=req.body
    let{password}=data
    data.password=await bcrypt.hash(data.password,10)


    const newCreate=await userModel.create(data)
    res.status(201).send({msg:"true",data:newCreate})
    console.log(newCreate)
}

//get

const getUser=async function(req,res){
    let data=req.query

    const getNewUser=await userModel.find(data)
   return  res.status(200).send({msg:true,data:getNewUser})
}

//update

const updateUser=async function(req,res){
    let userId=req.params.userId

    let data=req.body
    const{name,email,phone}=data

    let finalUpdate=await userModel.findOneAndUpdate({_id:userId},{$set:{name:name,email:email,phone:phone}},{new:true,upsert:true})
    return res.status(200).send({status:true,msg:"sucss",data:finalUpdate})
}


//delete

const deleteUser=async function(req,res){
    let data=req.params.userId

    let update=await userModel.findOneAndUpdate({_id:data},{$set:{isDeleted:true,deletedAt:Date.now()}},{new:true,upsert:true})
    res.status(200).send({status:true,data:update,message:"sucss",})
}


//login api

const createLogin=async function(req,res){
    let data=req.body
    let checkDetail=await userModel.findOne({name:data.name})
    if(!checkDetail){
        return res.status(404).send({status:false,msg:"could not find the details"})
    }

    let checkPassword=await bcrypt.compare(data.password,checkDetail.password)
  

    let name=checkDetail.name
    let token=jwt.sign({
        name:name
    },"akshay-1",{expiresIn:"36000s"})
    return res.status(200).send({status:true,msg:"user logined",user:checkDetail})
}

const forgotPassword=async function(req,res){
    const{email}=re.body;

    userModel.findOne({email},{err,})
}




module.exports={createUser,getUser,updateUser,deleteUser,createLogin}