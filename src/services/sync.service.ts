import { Inject, Service } from 'typedi';
import { Logger } from 'winston';
import { CovidStatisticDocument } from '../db/documents/covid-statistic-document';
import SyncRepository from '../repositories/sync.repository';

@Service()
class SyncService {
    constructor(private readonly syncRepository: SyncRepository, @Inject('logger') private readonly log: Logger) {}

    async sync(statistics: any[]): Promise<CovidStatisticDocument[]> {
        try {
            statistics.forEach((statistic) => {
                statistic.cases.newCases = Number(statistic.cases.new?.replace('+', '') || 0);
                statistic.deaths.newDeaths = Number(statistic.deaths.new?.replace('+', '') || 0);
            });

            const result = await this.syncRepository.sync(statistics);
            return result;
        } catch (err) {
            this.log.error('An error has been occurred  in the sync service');
            throw err;
        }
    }
}

export default SyncService;
