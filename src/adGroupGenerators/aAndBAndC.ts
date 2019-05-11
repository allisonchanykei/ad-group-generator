import { IAdGroupGenerator } from './IAdGroupGenerator';
import { IKeyword, KeywordType } from '../adGroup';

export abstract class AandBandC implements IAdGroupGenerator {
    constructor(private first: string, private second: string, private third: string) {}

    name(): string {
        return `${this.first} ${this.second} ${this.third}`;
    }

    positive(): IKeyword[] {
        const word = `${this.first} ${this.second} ${this.third}`;
        return [
            {
                word,
                type: KeywordType.exact
            },
            {
                word,
                type: KeywordType.phrase
            },
            {
                word: `+${this.first} +${this.second} +${this.third}`,
                type: KeywordType.broad
            }
        ];
    }

    negative(): IKeyword[] {
        return [];
    }
}
