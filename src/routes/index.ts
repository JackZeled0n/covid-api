import express from 'express';
import loadUserRoutes from './user.route';
import loadAuthRoutes from './auth.route';
import loadSyncRoute from './sync.route';
import loadStatisticRoutes from './statistic.route';

export default (app: express.Application) => {
    loadUserRoutes(app);
    loadAuthRoutes(app);
    loadSyncRoute(app);
    loadStatisticRoutes(app);
};
