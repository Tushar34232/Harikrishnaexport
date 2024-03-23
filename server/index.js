import dotenv from 'dotenv'
import express, { request, response } from 'express';
import bodyparser from 'body-parser'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose'
import Authrouter from './Routes/auth.route.js'
import Userrouter from './Routes/user.route.js'
dotenv.config();

const app = express()
app.use(cors())


mongoose
.connect(process.env.Mongo)  
.then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });


   app.use(express.json())
  app.use(cookieParser());

app.use('/auth',Authrouter);
app.use('/user',Userrouter);




app.listen ( process.env.PORT , ()=>{
    console.log("Server is running on port " + process.env.PORT)
})




  