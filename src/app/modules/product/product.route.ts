import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

router.post('/', productController.createProduct);

router.get('/', productController.getAllProductsOrGetSearchedProduct);

router.get('/:productId', productController.getSpecificProduct);

router.put('/:productId', productController.updateProduct);

router.delete('/:productId', productController.deleteProduct);

export const ProductRoute = router;
