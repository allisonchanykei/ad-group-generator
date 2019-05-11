import { AandBandC } from '../aAndBAndC';

export class CoreServiceProviderTransactional extends AandBandC {
    constructor(core: string, serviceProvider: string, transactional: string) {
        super(core, serviceProvider, transactional);
    }
}
