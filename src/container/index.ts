import Container from 'typedi';
import UserModel from '../db/models/user';
import CovidStatisticModel from '../db/models/covid-statistic';
import Logger from '../lib/logger';

export default () => {
    try {
        Container.set('userModel', UserModel);
        Container.set('covidStatisticModel', CovidStatisticModel);
        Container.set('logger', Logger);

        Logger.info('The container has been loaded sucessfully');
    } catch (err) {
        Logger.error(err);
        throw err;
    }
};
