import { model, Schema } from 'mongoose';
import { CovidStatisticDocument } from '../documents/covid-statistic-document';

const covidStatistic = new Schema<CovidStatisticDocument>({
    continent: {
        type: String,
    },
    country: {
        type: String,
        unique: true,
        index: true,
    },
    population: {
        type: Number,
    },
    cases: {
        pop_1M: String,
        active: Number,
        critical: Number,
        new: Number,
        recovered: Number,
        total: Number,
    },
    deaths: {
        pop_1M: String,
        new: Number,
        total: Number,
    },
    tests: {
        pop_1M: String,
        total: Number,
    },
});

export default model<CovidStatisticDocument>('covidStatistic', covidStatistic);
