import { NextFunction, Response } from 'express';
import { Logger } from 'winston';
import { CategoryService } from '../services/categoryService';
import { CreateCategoryInput } from '../types';

export class CategoryController {
    constructor(
        private logger: Logger,
        private categoryService: CategoryService
    ) {}
    async createCategory(req: CreateCategoryInput, res: Response, next: NextFunction) {
        //validation

        const { name, description } = req.body;

        this.logger.debug('data recieved from request body', {
            name,
            description,
        });

        try {
            const categoryCreated = await this.categoryService.create({ name, description });
            this.logger.info('category created successfully', {
                id: categoryCreated.id,
            });

            res.status(201).json({ id: categoryCreated.id });
        } catch (error) {
            next(error);
            return;
        }
    }

    async updateCategory(req: CreateCategoryInput, res: Response, next: NextFunction) {
        const categoryId = req.params.id;

        const { name, description } = req.body;

        try {
            await this.categoryService.update({ name, description }, Number(categoryId));
            this.logger.info('category updated successfully', {
                id: categoryId,
            });

            res.status(201).json({ id: categoryId });
        } catch (error) {
            next(error);
            return;
        }
    }
}
