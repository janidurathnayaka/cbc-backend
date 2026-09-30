import express from 'express';
import mongoose from 'mongoose';

import userRouter from './routes/userRouter.js';
import ProductRouter from './routes/productRouter.js';
import jwt from "jsonwebtoken";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

   
const app = express();


const mongourl = process.env.Mongo_DB_URL

mongoose.connect(mongourl,{});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("database connected");
});


app.use(bodyParser.json());

app.use(
    (req,res,next)=>{
      const token = req.header("Authorization")?.replace
      ("Bearer ","")
      console.log(token)  

      if (token != null){
        jwt.verify(token,process.env.SECRET_KEY,(error,
            decoded)=>{
                if(!error){

                    req.user = decoded

                
                }
            }
        )

        
      }

     next()

    }
)

// ✅ FIXED HERE



app.use("/api/users",userRouter);
app.use("/api/products",ProductRouter);

app.listen(5000, () => {
    console.log('server is running on port 5000');
});


