import Container from 'typedi';
import express from 'express';
import AuthController from '../controllers/auth.controller';

export default (app: express.Application) => {
    const authController = Container.get(AuthController);

    const router = express.Router();

    router.post('/login', (req, res, next) => authController.login(req, res, next));

    app.use('/auth', router);
};
