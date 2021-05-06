import Express, { Request, Response } from 'express';

import dotenv from 'dotenv';

import loadMiddlewares from './middleware/index';
import startServer from './server';

dotenv.config();
const app = Express();

loadMiddlewares(app);
startServer(app);

app.get('/', (_req: Request, res: Response) => {
    res.send('<h1>Covid API!</h1>');
});
