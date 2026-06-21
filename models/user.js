import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email :{
        type : String,
        required : true,
        unique  : true
    },

 firstName :{
    type : String,
    required : true
 },

 lasrtName  : {
   type : String,
   requered : true,
 },


 password : {
   type : String ,
   required : true,
 },
 isBlocked :{
    type : Boolean,
    default :false
 },

 type : {
    type :String,
    default : "customer"
 
 },

 profilepicture : {
    type : String,
    default : "https://pixabay.com/illustrations/profile-profile-pic-human-face-2398783/"
 }



})



const user = mongoose.model("users",userSchema)

export default user ; 