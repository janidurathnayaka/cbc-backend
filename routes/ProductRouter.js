import express from 'express';
import { 
    createProduct, 
    deleteProduct, 
    getProduct, 
    getProductByname 
} from '../controllers/ProductController.js';

const ProductRouter = express.Router();

// GET all products
ProductRouter.get('/', getProduct);

// GET by name
ProductRouter.get('/byname/:name', getProductByname);

// CREATE product
ProductRouter.post('/', createProduct);

// DELETE product by ID
ProductRouter.delete('/:id', deleteProduct);

export default ProductRouter;