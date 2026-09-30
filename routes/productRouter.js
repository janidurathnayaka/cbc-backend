import expres from 'express';
import { createProduct } from '../controllers/productController.js';
import { getproducts } from '../controllers/productController.js';

const ProductRouter = expres.Router();

ProductRouter.post("/", createProduct);
ProductRouter.get("/", getproducts);

export default ProductRouter;
