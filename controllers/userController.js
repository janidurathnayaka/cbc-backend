import User from "../models/user.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connect } from "mongoose";

export function createUser(req,res){

    const newUserData = req.body 
    newUserData.password  = bcrypt.hashSync(newUserData.password, 10)

    const user = new User (newUserData)

    user.save ().then(()=>{
        res.json({
            message : "User create"

        })   
}).catch (()=>{
    res.json({
        message : "user not created"
    })
})

}

export function loginUser(req,res){
    User.find({email: req.body.email}).then(
        (users)=>{
           if (users.length == 0){
            res.json({
                message: "user not found"
            })
           }else {
               const  user = users[0]
                const ispasswordCorrect = bcrypt.compareSync
               (req.body.password,user.password)

              if (ispasswordCorrect){

                const token  = jwt.sign({
                    email:user.email,
                    firstName :user.firstName,
                    lastName:user.lastName,
                    isBlock: user.isBlock,
                    type :user.type,
                    profilePicture:user.profilepicture,

                },"cbc-secret-key-7973")

                res.json({
                    message:"user logged in",
                    token:token
                })


                    
             }else{
                res.json({
                message:"user not logged"
                 })
                }
             }



        }
    )
}








