import { checkSchema } from 'express-validator';

export const updateProductValidator = checkSchema({
    id: {
        in: ['params'],
        notEmpty: { errorMessage: 'Product ID is required' },
        isInt: { errorMessage: 'Product ID must be a valid integer' },
        toInt: true,
    },

    name: {
        in: ['body'],
        optional: true,
        isString: { errorMessage: 'Product name must be a string' },
        trim: true,
    },

    description: {
        in: ['body'],
        optional: true,
        isString: { errorMessage: 'Description must be a string' },
        trim: true,
    },

    price: {
        in: ['body'],
        optional: true,
        isFloat: { errorMessage: 'Price must be a number' },
        toFloat: true,
        custom: {
            options: (value) => value > 0,
            errorMessage: 'Price must be greater than 0',
        },
    },

    stock: {
        in: ['body'],
        optional: true,
        isInt: { errorMessage: 'Stock must be an integer' },
        toInt: true,
        custom: {
            options: (value) => value >= 0,
            errorMessage: 'Stock cannot be negative',
        },
    },

    categoryId: {
        in: ['body'],
        optional: true,
        isInt: { errorMessage: 'categoryId must be an integer' },
        toInt: true,
    },
});
