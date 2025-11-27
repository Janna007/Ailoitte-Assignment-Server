import createHttpError from 'http-errors';
import { CategoryInput } from '../types';
import Category from '../models/Category';

export class CategoryService {
    async create({ name, description }: CategoryInput) {
        try {
            return await Category.create({
                name,
                description,
            });
        } catch {
            const error = createHttpError(500, 'Error while saving data to the database');
            throw error;
        }
    }

    async update({ name, description }: CategoryInput, categoryId: number) {
        try {
            console.log('catid', categoryId);
            const category = await Category.findByPk(categoryId);
            console.log(category);
            if (!category) {
                throw createHttpError(404, 'Category not found');
            }

            category.name = name ?? category.name;
            category.description = description ?? category.description;

            await category.save();

            return category;
        } catch {
            const error = createHttpError(500, 'Error while saving data to the database');
            throw error;
        }
    }
}
