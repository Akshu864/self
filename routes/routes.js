const express=require('express')
const userController=require('../controller/controller')

const router=express.Router()


router.post('/create',userController.createUser)

router.get('/get',userController.getUser)

router.put('/user/:userId',userController.updateUser)

router.delete('/user/:userId',userController.deleteUser)

router.post('/login',userController.createLogin)




//get details
















module.exports=router;