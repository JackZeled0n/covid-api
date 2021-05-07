import Container from 'typedi';
import express from 'express';
import SyncController from '../controllers/sync.controller';

export default (app: express.Application) => {
    const syncController = Container.get(SyncController);

    app.get('/sync', (req, request, next) => syncController.sync(req, request, next));
};
