import http from 'http';

export default (app: Express.Application) => {
    const httpServer = new http.Server(app);
    httpServer.listen(+(process.env.PORT || 3000), () => {
        console.log('Start server covid API');
    });
    process.on('SIGTERM', () => {
        httpServer.close(() => {
            process.exit(0);
        });
    });
};
