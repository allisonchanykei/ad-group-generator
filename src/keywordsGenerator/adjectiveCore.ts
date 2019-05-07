import { ISource } from '../sources/ISource';
import { AandB } from './aAndB';

export class AdjectiveCore extends AandB {
    constructor(core: string, adjective: string, source: ISource) {
        super(core, adjective);
        this.negativePhrases = source.serviceProviders.concat(source.transactionals);
    }
}
