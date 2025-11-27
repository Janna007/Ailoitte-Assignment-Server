import createHttpError from 'http-errors';
import { Category, Product } from '../models';
import { ProductInput } from '../types';

export class ProductService {
    async create({ name, description, price, stock, categoryId, imageUrl }: ProductInput) {
        try {
            return await Product.create({
                name,
                description,
                price,
                stock,
                categoryId,
                imageUrl,
            });
        } catch (err) {
            console.log(err);
            const error = createHttpError(500, 'Error while saving data to the database');
            throw error;
        }
    }

    async getList(query: any, pageLimit: number, offset: number) {
        try {
            return await Product.findAndCountAll({
                where: query,
                limit: pageLimit,
                offset,
                include: [
                    {
                        model: Category,
                        attributes: ['id', 'name', 'description'],
                    },
                ],
                order: [['createdAt', 'DESC']],
            });
        } catch (err) {
            console.error('product listing error:', err);
            const error = createHttpError(500, 'Error while listing  products');
            throw error;
        }
    }

    async delete(productId: number) {
        try {
            const product = await Product.findByPk(productId);
            // console.log(category);
            if (!product) {
                throw createHttpError(404, 'Category not found');
            }

            await product.destroy();
        } catch (err) {
            console.error('product delete error:', err);
            const error = createHttpError(500, 'Error while deleting  product');
            throw error;
        }
    }

    async update(
        { name, description, price, stock, categoryId, imageUrl }: ProductInput,
        productId: number
    ) {
        try {
            const product = await Product.findByPk(productId);

            if (!product) {
                throw createHttpError(404, 'Product not found');
            }

            product.name = name ?? product.name;
            product.price = price ?? product.price;
            product.stock = stock ?? product.stock;
            product.categoryId = categoryId ?? product.categoryId;

            if (description) {
                product.description = description ?? product.description;
            }
            product.imageUrl = imageUrl ?? product.imageUrl;

            await product.save();

            return product;
        } catch (err) {
            console.error('Category update error:', err);
            const error = createHttpError(500, 'Error while saving data to the database');
            throw error;
        }
    }
}
