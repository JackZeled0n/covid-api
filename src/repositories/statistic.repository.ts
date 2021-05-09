import { Types } from 'mongoose';
import { Inject, Service } from 'typedi';
import { NewCaseDto, NewDeathDto, NewTestDto } from '../dtos/statistic.dto';
import { CovidStatisticDocument, CovidStatisticModel } from '../db/documents/covid-statistic-document';

@Service()
class StatisticRepository {
    constructor(@Inject('covidStatisticModel') private covidStatisticModel: CovidStatisticModel) {}

    async getAllStatistics(): Promise<CovidStatisticDocument[]> {
        const statistics = await this.covidStatisticModel.find();
        return statistics;
    }

    async findById(id: Types.ObjectId): Promise<CovidStatisticDocument | null> {
        const statistic = await this.covidStatisticModel.findById(id);
        return statistic;
    }

    async getStatisticsByCountryName(continentName: string): Promise<CovidStatisticDocument[]> {
        const statistics = await this.covidStatisticModel.find({
            continent: continentName,
        });

        return statistics;
    }

    async addNewDeaths(newDeathDto: NewDeathDto, statistic: CovidStatisticDocument): Promise<CovidStatisticDocument> {
        const { newDeaths } = newDeathDto;
        statistic.deaths.newDeaths += newDeaths;
        statistic.deaths.total += newDeaths;
        return statistic.save();
    }

    async addNewCases(newCaseDto: NewCaseDto, statistic: CovidStatisticDocument): Promise<CovidStatisticDocument> {
        const { active = 0, critical = 0, newCases = 0, recovered = 0 } = newCaseDto;
        statistic.cases.active += active;
        statistic.cases.critical += critical;
        statistic.cases.newCases += newCases;
        statistic.cases.recovered += recovered;

        statistic.cases.total += active + critical + newCases + recovered;

        return statistic.save();
    }

    async addNewTests(newTestDto: NewTestDto, statistic: CovidStatisticDocument): Promise<CovidStatisticDocument> {
        statistic.tests.total += newTestDto.newTests;
        return statistic.save();
    }
}

export default StatisticRepository;
