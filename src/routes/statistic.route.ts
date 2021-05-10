import Container from 'typedi';
import express, { NextFunction, Request, Response } from 'express';
import verifyAuth from '../middleware/auth.middleware';
import validateFieldsMiddleware from '../middleware/validate-fields.middleware';
import StatisticController from '../controllers/statistic.controller';
import {
    newCasesValidation,
    newDeathsValidation,
    newTestsValidation,
    statisticsByContinentValidation,
} from './validations/statistics.validation';

export default (app: express.Application) => {
    const statisticController = Container.get(StatisticController);

    const router = express.Router();

    router.get('/', (req, res, next) => statisticController.getAllStatistics(req, res, next));
    router.put(
        '/new-deaths',
        newDeathsValidation,
        validateFieldsMiddleware,
        (req: Request, res: Response, next: NextFunction) => statisticController.addNewDeaths(req, res, next),
    );
    router.put(
        '/new-cases',
        newCasesValidation,
        validateFieldsMiddleware,
        (req: Request, res: Response, next: NextFunction) => statisticController.addNewCases(req, res, next),
    );
    router.put(
        '/new-tests',
        newTestsValidation,
        validateFieldsMiddleware,
        (req: Request, res: Response, next: NextFunction) => statisticController.addNewTests(req, res, next),
    );

    router.get(
        '/by-continent-name',
        statisticsByContinentValidation,
        validateFieldsMiddleware,
        (req: Request, res: Response, next: NextFunction) =>
            statisticController.getStatisticsByContinentName(req, res, next),
    );

    app.use('/statistics', verifyAuth, router);
};
