import { IKeywordsGenerator } from './IKeywordsGenerator';
import { IKeyword, KeywordType } from '../adGroup';

export abstract class AandBandC implements IKeywordsGenerator {
    constructor(private first: string, private second: string, private third: string) {}

    positive(): IKeyword[] {
        const word = this.first + this.second + this.third;
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
                word,
                type: KeywordType.broad
            }
        ];
    }

    negative(): IKeyword[] {
        return [];
    }
}
