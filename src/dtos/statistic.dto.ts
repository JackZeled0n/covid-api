import { Types } from 'mongoose';

export interface NewCaseDto {
    statisticId: Types.ObjectId;
    active?: number;
    critical?: number;
    newCases?: number;
    recovered?: number;
}

export interface NewDeathDto {
    statisticId: Types.ObjectId;
    newDeaths: number;
}

export interface NewTestDto {
    statisticId: Types.ObjectId;
    newTests: number;
}
