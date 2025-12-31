const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://surajleadsoft_db_user:LeadSoft%40123@products.8jetvbj.mongodb.net/')
        console.log('Database connected !!')
    }catch(error){
        console.log(error)
        console.log('Failed to connect !!')
    }
}

module.exports = connectDB
