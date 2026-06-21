import express from 'express';
import mongoose from 'mongoose';
import StudentRouter from "./routes/StudentRouter.js";
import ProductRouter from "./routes/ProductRouter.js";
import userRouter from './routes/userRouter.js';
import jwt from "jsonwebtoken";
import bodyParser from 'body-parser';

const app = express();

const mongourl = "mongodb+srv://admin:J123@cluster0.evw1sxh.mongodb.net/?appName=Cluster0";

mongoose.connect(mongourl);

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
        jwt.verify(token,"cbc-secret-key-7973",(error,
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

app.use("/api/products", ProductRouter);

app.use("/api/students",StudentRouter);

app.use("/api/users",userRouter);

app.listen(5000, () => {
    console.log('server is running on port 5000');
});


