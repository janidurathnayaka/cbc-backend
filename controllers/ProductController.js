import Product from "../models/product.js";

// GET all
export function getProduct(req, res) {
    Product.find()
        .then((ProductList) => {
            res.status(200).json({
                list: ProductList
            });
        })
        .catch(() => {
            res.status(500).json({
                message: "error"
            });
        });
}

// CREATE
export function createProduct(req, res) {

    console.log (req.user)

    if (req.user ==null){
        res.json({
            message :"you are not log in"

        })
        return
    }

    if (req.user.type != "admin"){
        res.json({
            message : "you are not an admin"
        })
        return
    }



    const newProduct = new Product(req.body);

    newProduct.save() .then(() => {
            res.json({
                message: "Product Created"
            });
        })
        .catch(() => {
            res.json({
                message: "Product not Created"
            });
        });
}

// GET by name
export function getProductByname(req, res) {
    const name = req.params.name;

    Product.find({ name: name })
        .then((ProductList) => {
            res.json({
                list: ProductList
            });
        })
        .catch(() => {
            res.json({
                message: "error"
            });
        });
}

// DELETE
export function deleteProduct(req, res) {
    const id = req.params.id;

    Product.findByIdAndDelete(id)
        .then(() => {
            res.json({
                message: "Product deleted"
            });
        })
        .catch(() => {
            res.json({
                message: "Delete failed"
            });
        });
}