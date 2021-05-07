import { NextFunction, Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import axios from 'axios';
import { Logger } from 'winston';
import SyncService from '../services/sync.service';
import request from '../config/rapid-api-covid';

@Service()
class SyncController {
    constructor(private readonly syncService: SyncService, @Inject('logger') readonly log: Logger) {}

    public async sync(_req: Request, res: Response, next: NextFunction) {
        try {
            const result = await axios.request(request);
            const statistics: any[] = result.data.response;

            const insertedStatistics = await this.syncService.sync(statistics);

            res.send(insertedStatistics);
        } catch (err) {
            next(err);
        }
    }
}

export default SyncController;
