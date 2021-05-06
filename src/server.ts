import http from 'http';
import { variables } from './environment/variables';

export default (app: Express.Application) => {
    const httpServer = new http.Server(app);
    httpServer.listen(variables.SERVER_PORT, () => {
        console.log('Start server covid API');
    });
    process.on('SIGTERM', () => {
        httpServer.close(() => {
            process.exit(0);
        });
    });
};
