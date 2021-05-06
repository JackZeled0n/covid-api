import { Document } from 'mongoose';

export interface Case {
    pop_1M: string;
    active: number;
    critical: number;
    new: number;
    recovered: number;
    total: number;
}

export interface Death {
    pop_1M: string;
    new: number;
    total: number;
}

export interface Test {
    pop_1M: string;
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
