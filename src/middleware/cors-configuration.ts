import Express, { NextFunction } from 'express';
import { variables } from '../environment/variables';

export default (app: Express.Application) => {
    app.use((_req: Express.Request, res: Express.Response, next: NextFunction) => {
        res.header('Access-Control-Allow-Origin', variables.URL_WEBSITE);
        res.header(
            'Access-Control-Allow-Headers',
            'Authorization, X-API-KEY, Origin, ' +
                'X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
        );
        res.header('Access-Control-Allow-Methods', 'POST, PUT');
        res.header('Allow', 'POST, PUT');
        next();
    });
};
