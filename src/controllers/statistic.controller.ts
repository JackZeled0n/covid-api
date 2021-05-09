import { NextFunction, Request, Response } from 'express';
import { matchedData } from 'express-validator';
import { Service } from 'typedi';
import StatisticService from '../services/statistic.service';

@Service()
class StatisticController {
    constructor(private readonly statisticService: StatisticService) {}

    public async getAllStatistics(_req: Request, res: Response, next: NextFunction) {
        try {
            const statistics = await this.statisticService.getAllStatistics();

            res.send(statistics);
        } catch (err) {
            next(err);
        }
    }

    public async getStatisticsByContinentName(req: Request, res: Response, next: NextFunction) {
        try {
            const queryData = matchedData(req, { locations: ['query'] });
            const statistics = await this.statisticService.getStatisticsByContinentName(queryData.continentName);

            res.send(statistics);
        } catch (err) {
            next(err);
        }
    }

    public async addNewCases(req: Request, res: Response, next: NextFunction) {
        try {
            const statisticUpdated = await this.statisticService.addNewCases(req.body);

            res.send(statisticUpdated);
        } catch (err) {
            next(err);
        }
    }

    public async addNewTests(req: Request, res: Response, next: NextFunction) {
        try {
            const statisticUpdated = await this.statisticService.addNewTests(req.body);

            res.send(statisticUpdated);
        } catch (err) {
            next(err);
        }
    }

    public async addNewDeaths(req: Request, res: Response, next: NextFunction) {
        try {
            const statisticUpdated = await this.statisticService.addNewDeaths(req.body);

            res.send(statisticUpdated);
        } catch (err) {
            next(err);
        }
    }
}

export default StatisticController;
