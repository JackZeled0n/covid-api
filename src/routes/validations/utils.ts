import { body } from 'express-validator';

export const getMessageLenght = (fieldName: string, min: number, max: number) => {
    return `The length of the ${fieldName} must be between ${min} and ${max} characters`;
};

export const validateStatisticId = () => {
    return body('statisticId', 'The statistic id is required')
        .exists()
        .isMongoId()
        .withMessage('The statistic id must be a valid mongo id');
};
