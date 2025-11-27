import { checkSchema } from 'express-validator';

export const addToCartValidator = checkSchema({
    productId: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'productId is required',
        },
        isInt: {
            errorMessage: 'productId must be a valid integer',
        },
        toInt: true,
    },

    quantity: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'quantity is required',
        },
        isInt: {
            errorMessage: 'quantity must be a number',
        },
        toInt: true,
        custom: {
            options: (value) => value > 0,
            errorMessage: 'quantity must be greater than 0',
        },
    },

    PriceAtAdd: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'PriceAtAdd is required',
        },
        isFloat: {
            errorMessage: 'PriceAtAdd must be a valid number',
        },
        toFloat: true,
        custom: {
            options: (value) => value > 0,
            errorMessage: 'PriceAtAdd must be greater than 0',
        },
    },
});
