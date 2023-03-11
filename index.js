const express=require('express')
const { mongo, default: mongoose } = require('mongoose')
const bodyParser=require('body-parser')
const route=require('./routes/routes')
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


mongoose.connect("mongodb+srv://Akshu12:Akshay123@cluster0.eqljz.mongodb.net/Group110-DataBase",{useNewUrlParser: true})

.then(()=>{
    console.log("mongodb is connected")
})
.catch(err => console.log(err))
app.use('/',route)



app.listen(3000,()=>{
    console.log("server is running at port 3000")
})