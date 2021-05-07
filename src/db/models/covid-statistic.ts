import { model, Schema } from 'mongoose';
import { CovidStatisticDocument } from '../documents/covid-statistic-document';

const covidStatistic = new Schema<CovidStatisticDocument>(
    {
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
            default: 0,
        },
        cases: {
            active: { type: Number, default: 0 },
            critical: { type: Number, default: 0 },
            newCases: { type: Number, default: 0 },
            recovered: { type: Number, default: 0 },
            total: { type: Number, default: 0 },
        },
        deaths: {
            newDeaths: { type: Number, default: 0 },
            total: { type: Number, default: 0 },
        },
        tests: {
            total: { type: Number, default: 0 },
        },
    },
    { versionKey: false },
);

export default model<CovidStatisticDocument>('covidStatistic', covidStatistic);
