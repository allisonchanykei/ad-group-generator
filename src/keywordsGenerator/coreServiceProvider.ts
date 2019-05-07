import { ISource } from '../sources/ISource';
import { AandB } from './aAndB';

export class CoreServiceProvider extends AandB {
    constructor(core: string, serviceProvider: string, source: ISource) {
        super(core, serviceProvider);
        this.negativePhrases = source.adjectives.concat(source.transactionals);
    }
}
