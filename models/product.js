import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  productId: {
    type: String,
    required: true,
    unique: true
  },
  productName: {
    type: String,
    required: true  
  },
  altName: [{
    type: String
  }],

  image: {
    type: String,
  },
price: {
    type: Number,
    required: true  
},  

lastprice: {
    type: Number,
    required: true  
},
Stock: {
    type: Number,
    required: true  
},
description: {
    type: String,
    required: true  
},

})


const Product = mongoose.model("Product", productSchema);
export default Product;