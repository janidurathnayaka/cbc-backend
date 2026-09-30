import Product from "../models/product.js";





 export function createProduct(req,res){

    if (!isAdmin(req)){
        res.json({
            message:"user not authorized"
        })
        return
    }

  const newProductData = req.body;

  const product = new Product(newProductData);   
  
  product.save().then(()=>{
    res.json({
        message : "product created"
    })
  }).catch((error)=>{
    res.json({
        message : "error "
    })
  })
 

 }





 export function getproducts(req,res){

    Product.find({}).then((products)=>{

        res.json(products)     
 })
 }

