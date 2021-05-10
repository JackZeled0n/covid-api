export interface EnvVariables {
    SERVER_PORT: number;
    X_RAPIDAPI_KEY: string;
    NODE_ENV: string;
    MONGO_USER_PWD: string;
    MONGO_USERNAME: string;
    MONGO_DATABASE_NAME: string;
    MONGO_CLUSTER_URL: string;
    URL_WEBSITE: string;
}

export const variables: EnvVariables = {
    SERVER_PORT: +(process.env.PORT || 3000),
    X_RAPIDAPI_KEY: process.env.X_RAPIDAPI_KEY || '',

    // MONGO VARIABLES
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_USER_PWD: process.env.MONGO_DB_USER_PWD || 'Covid2021!',
    MONGO_USERNAME: process.env.MONGO_USERNAME || 'coviduser',
    MONGO_DATABASE_NAME: process.env.MONGO_DATABASE_NAME || 'statistics-covid19',
    MONGO_CLUSTER_URL: process.env.MONGO_CLUSTER_URL || 'cluster-api-covid.hqtb5.mongodb.net',
    URL_WEBSITE: process.env.URL_WEBSITE || '',
};
