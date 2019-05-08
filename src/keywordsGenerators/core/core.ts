import { IKeywordsGenerator } from '../IKeywordsGenerator';
import { ISource } from '../../sources/ISource';
import { IKeyword, KeywordType } from '../../adGroup';

export class Core implements IKeywordsGenerator {
    constructor(private adWord: string, private source: ISource) {}

    positive(): IKeyword[] {
        return [
            {
                word: this.adWord,
                type: KeywordType.phrase
            }
        ];
    }

    negative(): IKeyword[] {
        const negativeKeywords: IKeyword[] = [
            {
                word: this.adWord,
                type: KeywordType.exact
            }
        ];

        const negativePhrases = this.source.coreJobTitles.concat(
            this.source.adjectives,
            this.source.coreExpansions,
            this.source.serviceProviders,
            this.source.transactionals
        );

        const remainingNegativeKeywords: IKeyword[] = negativePhrases.map(
            word =>
                <IKeyword>{
                    word: word,
                    type: KeywordType.phrase
                }
        );

        return negativeKeywords.concat(remainingNegativeKeywords);
    }
}
