import { checkSchema } from 'express-validator';

export const productQueryValidator = checkSchema({
    minPrice: {
        in: ['query'],
        optional: true,
        isFloat: { errorMessage: 'minPrice must be a number' },
        toFloat: true,
    },

    maxPrice: {
        in: ['query'],
        optional: true,
        isFloat: { errorMessage: 'maxPrice must be a number' },
        toFloat: true,
    },

    categoryId: {
        in: ['query'],
        optional: true,
        isInt: { errorMessage: 'categoryId must be an integer' },
        toInt: true,
    },

    search: {
        in: ['query'],
        optional: true,
        isString: { errorMessage: 'search must be a string' },
        trim: true,
    },

    page: {
        in: ['query'],
        optional: true,
        isInt: { errorMessage: 'page must be an integer' },
        toInt: true,
    },

    limit: {
        in: ['query'],
        optional: true,
        isInt: { errorMessage: 'limit must be an integer' },
        toInt: true,
    },
});
