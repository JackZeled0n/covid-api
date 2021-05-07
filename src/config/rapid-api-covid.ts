import { AxiosRequestConfig } from 'axios';
import { variables } from '../environment/variables';

const request: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    headers: {
        'x-rapidapi-key': `${variables.X_RAPIDAPI_KEY}`,
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    },
};

export default request;
