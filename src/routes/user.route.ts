import Container from 'typedi';
import express from 'express';
import UserController from '../controllers/user.controller';

export default (app: express.Application) => {
    const userController = Container.get(UserController);

    const router = express.Router();

    router.post('/', (req, res, next) => userController.createUser(req, res, next));

    app.use('/users', router);
};
