import { Document, Model } from 'mongoose';

export interface Case {
    active: number;
    critical: number;
    newCases: number;
    recovered: number;
    total: number;
}

export interface Death {
    newDeaths: number;
    total: number;
}

export interface Test {
    total: number;
}

export interface CovidStatisticDocument extends Document {
    continent: string;
    country: string;
    population: number;
    cases: Case;
    deaths: Death;
    tests: Test;
    day: Date;
    time: string;
}

export type CovidStatisticModel = Model<CovidStatisticDocument>;
