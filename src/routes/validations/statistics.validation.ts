import { body, query } from 'express-validator';
import { validateStatisticId } from './utils';

const newCasesValidation = [
    validateStatisticId(),
    body('newCases')
        .optional()
        .isInt({ gt: 0 })
        .toInt()
        .withMessage('The number of new cases must be greater than zero'),
    body('active').optional().isInt({ gt: 0 }).toInt().withMessage('The number of active must be greater than zero'),
    body('recovered')
        .optional()
        .isInt({ gt: 0 })
        .toInt()
        .withMessage('The number of recovered must be greater than zero'),
    body('critical')
        .optional()
        .isInt({ gt: 0 })
        .toInt()
        .withMessage('The number of critical must be greater than zero'),
];

const newTestsValidation = [
    validateStatisticId(),
    body('newTests', 'The newTest is required')
        .exists()
        .isInt({ gt: 0 })
        .toInt()
        .withMessage('The number of new tests must be greater than zero'),
];

const newDeathsValidation = [
    validateStatisticId(),
    body('newDeaths', 'The newDeaths is required')
        .exists()
        .isInt({ gt: 0 })
        .toInt()
        .withMessage('The number of new deaths must be greater than zero'),
];

const statisticsByCountryNameValidation = [query('countryName', 'The countryName is required').isString().exists()];

export { newDeathsValidation, newCasesValidation, newTestsValidation, statisticsByCountryNameValidation };
