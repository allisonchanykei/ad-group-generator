import { ISource } from '../sources/ISource';
import { AandB } from './aAndB';

export class CoreTransactional extends AandB {
    constructor(core: string, transactional: string, source: ISource) {
        super(core, transactional);
        this.negativePhrases = source.adjectives.concat(source.serviceProviders);
    }
}
