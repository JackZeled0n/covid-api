import Container from 'typedi';
import express from 'express';
import StatisticController from '../controllers/statistic.controller';

export default (app: express.Application) => {
    const statisticController = Container.get(StatisticController);

    const router = express.Router();

    router.get('/', (req, res, next) => statisticController.getAllStatistics(req, res, next));
    router.put('/new-deaths', (req, res, next) => statisticController.addNewDeaths(req, res, next));
    router.put('/new-cases', (req, res, next) => statisticController.addNewCases(req, res, next));
    router.put('/new-tests', (req, res, next) => statisticController.addNewTests(req, res, next));

    app.use('/statistics', router);
};
