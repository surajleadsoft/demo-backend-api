const Product = require('../models/products')

exports.addProduct = async(req,res)=>{
    try{
        const { name,price,category } = req.body
        const product = await Product.create({name,price,category})
        res.json({status:true,message:'Product added successfully !!'})
    }catch(error){
        console.log('Error:',error)
        res.json({status:false,message:'Internal server error'})
    }
}

exports.getProducts = async(req,res)=>{
    try{
        const products = await Product.find()
        res.json({status:true,message:products})
    }catch(error){
        console.log('Error:',error)
        res.json({status:false,message:'Internal server error'})
    }
}

exports.updateProduct = async (req,res)=>{
    try{
        const id = req.params.id
        const { name,price,category } = req.body
        await Product.findByIdAndUpdate(id,{name,price,category},{new:true})
        res.json({status:true,message:'Product updated successfully !!'})
    }catch(error){
        console.log('Error:',error)
        res.json({status:false,message:'Internal server error'})
    }
}

exports.deleteProduct = async (req,res)=>{
    try{
        const id = req.params.id
        await Product.findByIdAndDelete(id)
        res.json({status:true,message:'Product deleted successfully !!'})
    }catch(error){
        console.log('Error:',error)
        res.json({status:false,message:'Internal server error'})
    }
}