import { Inject, Service } from 'typedi';
import { CovidStatisticDocument, CovidStatisticModel } from '../db/documents/covid-statistic-document';

@Service()
class SyncRepository {
    constructor(@Inject('covidStatisticModel') private covidStatisticModel: CovidStatisticModel) {}

    async sync(statistics: CovidStatisticDocument[]): Promise<CovidStatisticDocument[]> {
        await this.covidStatisticModel.deleteMany();
        return this.covidStatisticModel.insertMany(statistics);
    }
}

export default SyncRepository;
