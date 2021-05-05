import Express from 'express';
import http from 'http';

const app = Express();
const httpServer = new http.Server(app);

httpServer.listen(3000, () => {
    console.log('Start server covid API');
});
