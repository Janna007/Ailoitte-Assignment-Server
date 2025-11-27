import { checkSchema } from 'express-validator';

export const createProductValidator = checkSchema({
    name: {
        in: ['body'],
        notEmpty: { errorMessage: 'Product name is required' },
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
        notEmpty: { errorMessage: 'Price is required' },
        isFloat: { errorMessage: 'Price must be a number' },
        toFloat: true,
        custom: {
            options: (value) => value > 0,
            errorMessage: 'Price must be greater than 0',
        },
    },

    stock: {
        in: ['body'],
        notEmpty: { errorMessage: 'Stock is required' },
        isInt: { errorMessage: 'Stock must be an integer' },
        toInt: true,
        custom: {
            options: (value) => value >= 0,
            errorMessage: 'Stock cannot be negative',
        },
    },

    categoryId: {
        in: ['body'],
        notEmpty: { errorMessage: 'categoryId is required' },
        isInt: { errorMessage: 'categoryId must be a valid integer' },
        toInt: true,
    },
});
