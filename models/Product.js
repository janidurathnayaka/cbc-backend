import mongoose from "mongoose";
const ProductSchama = mongoose.Schema({
    name :String,
    price :Number,
    description : String
})


const Product =mongoose.model("Products",ProductSchama)

 export default Product;