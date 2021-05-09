import { Types } from 'mongoose';
import { Inject, Service } from 'typedi';
import { Logger } from 'winston';
import HttpException from '../exceptions/http.exception';
import { NewCaseDto, NewDeathDto, NewTestDto } from '../dtos/statistic.dto';
import { CovidStatisticDocument } from '../db/documents/covid-statistic-document';
import StatisticRepository from '../repositories/statistic.repository';

@Service()
class StatisticService {
    constructor(
        private readonly statisticRepository: StatisticRepository,
        @Inject('logger') private readonly log: Logger,
    ) {}

    async getAllStatistics(): Promise<CovidStatisticDocument[]> {
        try {
            const statistics = await this.statisticRepository.getAllStatistics();
            return statistics;
        } catch (err) {
            this.log.error('An error has been ocurred in getAllStatistics service');
            throw err;
        }
    }

    async getStatisticsByCountryName(continentName: string): Promise<CovidStatisticDocument[]> {
        try {
            const statistics = await this.statisticRepository.getStatisticsByCountryName(continentName);
            return statistics;
        } catch (err) {
            this.log.error('An error has been ocurred in getStatisticsByCountryName service');
            throw err;
        }
    }

    async addNewCases(newCaseDto: NewCaseDto): Promise<CovidStatisticDocument> {
        try {
            const statistic = await this.getStatisticById(newCaseDto.statisticId);

            const result = await this.statisticRepository.addNewCases(newCaseDto, statistic);
            return result;
        } catch (err) {
            this.log.error('An error has been occurred in the add new cases service');
            throw err;
        }
    }

    async addNewTests(newTestDto: NewTestDto): Promise<CovidStatisticDocument> {
        try {
            const statistic = await this.getStatisticById(newTestDto.statisticId);

            const result = await this.statisticRepository.addNewTests(newTestDto, statistic);
            return result;
        } catch (err) {
            this.log.error('An error has been occurred in the add new tests service');
            throw err;
        }
    }

    async addNewDeaths(newDeathDto: NewDeathDto): Promise<CovidStatisticDocument> {
        try {
            const statistic = await this.getStatisticById(newDeathDto.statisticId);

            const result = await this.statisticRepository.addNewDeaths(newDeathDto, statistic);
            return result;
        } catch (err) {
            this.log.error('An error has been occurred in the add new deaths service');
            throw err;
        }
    }

    async getStatisticById(statisticId: Types.ObjectId): Promise<CovidStatisticDocument> {
        const statistic = await this.statisticRepository.findById(statisticId);

        if (!statistic) throw new HttpException(404, 'The statistic was not found.');

        return statistic;
    }
}

export default StatisticService;
