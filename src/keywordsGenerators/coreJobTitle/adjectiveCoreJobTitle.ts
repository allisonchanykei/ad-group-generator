import { ISource } from '../../sources/ISource';
import { AandB } from '../aAndB';

export class AdjectiveCoreJobTitle extends AandB {
    constructor(coreJobTitle: string, adjective: string, source: ISource) {
        super(coreJobTitle, adjective);
        this.negativePhrases = source.transactionals;
    }
}
