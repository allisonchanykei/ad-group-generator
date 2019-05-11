import { ISource } from '../../sources/ISource';
import { AandB } from '../aAndB';

export class CoreExpansionServiceProvider extends AandB {
    constructor(coreExpansion: string, serviceProvider: string, source: ISource) {
        super(coreExpansion, serviceProvider);
        this.negativePhrases = source.adjectives;
    }
}
