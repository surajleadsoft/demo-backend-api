const Users = require('../models/user')
const bcrypt = require('bcrypt')

exports.register=async(req,res)=>{
    try{

        const { fullName,emailAddress,mobileNo,password } = req.body
        const existingUsers = await Users.find({emailAddress})
        if(existingUsers.length !=0){
            return res.json({status:false,message:'Account already exists !!'})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await Users.create({
            fullName:fullName,
            emailAddress:emailAddress,
            mobileNo:mobileNo,
            password:hashedPassword
        })
        res.json({status:true,message:'User registered successfully !!'})
    }catch(error){
        console.log(error)
        res.json({status:false,message:'Internal server error'})
    }
}

exports.login=async(req,res)=>{
    try{
        const {emailAddress,password} = req.body
        const user = await Users.findOne({emailAddress})
        if(!user){
            return res.json({status:false,message:'User not found !!'})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({status:false,message:'Wrong password !!'})
        }
        res.json({status:true,message:'Login successfull !!'})

    }catch(error){
        console.log(error)
        res.json({status:false,message:'Internal server error'})
    }
}