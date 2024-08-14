//step 1: create a server when we setup a backend
//const express = require('express') // this is required when we are not importing/exporting the components/modules 
import express from 'express' //as we are not using the above syntax to import, we will be using this one
import dotenv from 'dotenv'
import databaseConnection from './utils/database.js'
import cookieParser from 'cookie-parser'
import userRoute from './routes/userRoute.js'



databaseConnection();

dotenv.config({
    path:'.env'
})


const app = express()
//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())


//api
app.use("/api/v1/user", userRoute);
//https://localhost:8080/api/v1/user/register



app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`)
})
