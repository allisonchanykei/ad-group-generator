import { ISource } from '../../sources/ISource';
import { AandB } from '../aAndB';

export class AdjectiveCoreJobTitle extends AandB {
    constructor(coreJobTitle: string, adjective: string, source: ISource) {
        super(adjective, coreJobTitle);
        this.negativePhrases = source.transactionals;
    }
}
