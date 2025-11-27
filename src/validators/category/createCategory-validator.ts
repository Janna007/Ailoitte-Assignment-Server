import { checkSchema } from 'express-validator';

export const createCategoryValidator = checkSchema({
    name: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'Category name is required',
        },
        isString: {
            errorMessage: 'Category name must be a string',
        },
        trim: true,
    },

    description: {
        in: ['body'],
        optional: true,
        isString: {
            errorMessage: 'Description must be a string',
        },
        trim: true,
    },
});
