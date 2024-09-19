require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./connection/db')
const router=require('./Router/router')


const DailyCartServer = express()
DailyCartServer.use(cors())
DailyCartServer.use(express.json())
DailyCartServer.use(router)

const PORT = 3000 || process.env.PORT

DailyCartServer.listen(PORT,()=>{
    console.log(`DailyCart Server Running at port ${PORT}..Waiting for client request`);
})

DailyCartServer.get('/',(req,res)=>{
    res.send('<h1>DailyCart Server Started</h1>')
})