import express, { NextFunction, Request, Response } from 'express';
import logger from '../config/logger';
import { CategoryController } from '../controller/CategoryController';
import { CategoryService } from '../services/categoryService';
import authenticate from '../middleware/authenticate';
import canAccess from '../middleware/canAccess';
import { roles } from '../constants';
import { createCategoryValidator } from '../validators/category/createCategory-validator';
import { updateCategoryValidator } from '../validators/category/updateCategory-validator';
const router = express.Router();

const categoryService = new CategoryService();

const categoryController = new CategoryController(logger, categoryService);

router.post(
    '/',
    authenticate,
    canAccess([roles.ADMIN]),
    createCategoryValidator,
    (req: Request, res: Response, next: NextFunction) =>
        categoryController.createCategory(req, res, next)
);

router.patch(
    '/:id',
    authenticate,
    canAccess([roles.ADMIN]),
    updateCategoryValidator,
    (req: Request, res: Response, next: NextFunction) =>
        categoryController.updateCategory(req, res, next)
);

router.delete(
    '/:id',
    authenticate,
    canAccess([roles.ADMIN]),
    (req: Request, res: Response, next: NextFunction) =>
        categoryController.deleteCategory(req, res, next)
);

router.get('/', authenticate, (req: Request, res: Response, next: NextFunction) =>
    categoryController.getCategoryList(req, res, next)
);

export default router;
