import express, { NextFunction, Request, Response } from 'express';
import logger from '../config/logger';
import authenticate from '../middleware/authenticate';
import canAccess from '../middleware/canAccess';
import { ProductController } from '../controller/ProductController';
import { upload } from '../middleware/multer';
import { ProductService } from '../services/productService';
import { roles } from '../constants';
import { createProductValidator } from '../validators/product/createProduct-validator';
import { updateProductValidator } from '../validators/product/updateProduct-validator';
import { productQueryValidator } from '../validators/product/productQuery-validator';

const router = express.Router();

const productService = new ProductService();

const productController = new ProductController(logger, productService);

router.post(
    '/',
    authenticate,
    canAccess([roles.ADMIN]),
    upload.fields([
        {
            name: 'product',
            maxCount: 5,
        },
    ]),
    createProductValidator,
    (req: Request, res: Response, next: NextFunction) =>
        productController.createProduct(req, res, next)
);

router.patch(
    '/:id',
    authenticate,
    canAccess([roles.ADMIN]),
    upload.fields([
        {
            name: 'product',
            maxCount: 5,
        },
    ]),
    updateProductValidator,
    (req: Request, res: Response, next: NextFunction) =>
        productController.updateProduct(req, res, next)
);

router.delete(
    '/:id',
    authenticate,
    canAccess([roles.ADMIN]),
    (req: Request, res: Response, next: NextFunction) =>
        productController.deleteProduct(req, res, next)
);

router.get(
    '/',
    authenticate,
    productQueryValidator,
    (req: Request, res: Response, next: NextFunction) =>
        productController.getProducts(req, res, next)
);

export default router;
