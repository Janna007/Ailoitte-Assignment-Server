import express, { NextFunction, Request, Response } from 'express';
import logger from '../config/logger';
import authenticate from '../middleware/authenticate';
import canAccess from '../middleware/canAccess';
import { ProductController } from '../controller/ProductController';
import { upload } from '../middleware/multer';
import { ProductService } from '../services/productService';


const router = express.Router();

const productService=new ProductService()

const productController = new ProductController(logger,productService);

router.post(
    '/',
    authenticate,
    canAccess(['admin']),
    upload.fields([
        {
            name:"product",
            maxCount:5
        },
    ])  ,
    (req: Request, res: Response, next: NextFunction) =>
        productController.createProduct(req, res, next)
);

// router.patch(
//     '/:id',
//     authenticate,
//     canAccess(['admin']),
//     (req: Request, res: Response, next: NextFunction) =>
//         categoryController.updateCategory(req, res, next)
// );

// router.delete(
//     '/:id',
//     authenticate,
//     canAccess(['admin']),
//     (req: Request, res: Response, next: NextFunction) =>
//         categoryController.deleteCategory(req, res, next)
// );

router.get('/', authenticate, (req: Request, res: Response, next: NextFunction) =>
    productController.getProducts(req, res, next)
);

export default router;
