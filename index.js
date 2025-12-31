const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./utils/connection')
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')

const server = express()
server.use(bodyParser.json())
server.use(cors())
server.use('/product',productRoute)
server.use('/api',userRoute)

connectDB()

server.listen(8055,()=>{
    console.log('Server started listening on port 8055')
})