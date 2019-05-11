import { ISource } from '../../sources/ISource';
import { AandB } from '../aAndB';

export class AdjectiveCore extends AandB {
    constructor(core: string, adjective: string, source: ISource) {
        super(adjective, core);
        this.negativePhrases = source.serviceProviders.concat(source.transactionals);
    }
}
