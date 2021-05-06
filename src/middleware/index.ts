import Express from 'express';
import helmet from 'helmet';

export default (app: Express.Application) => {
    app.use(helmet());
    app.use(Express.json());
};
