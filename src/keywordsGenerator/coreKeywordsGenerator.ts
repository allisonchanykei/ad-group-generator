import { IKeywordsGenerator } from './IKeywordsGenerator';
import { ISource } from '../sources/ISource';
import { IKeyword, KeywordType } from '../adGroup';

export class CoreKeywordsGenerator implements IKeywordsGenerator {
    private source: ISource;
    private adWord: string;

    constructor(adWord: string, source: ISource) {
        this.source = source;
        this.adWord = adWord;
    }

    positive(): IKeyword {
        return {
            word: this.adWord,
            type: KeywordType.phrase
        };
    }

    negative(): IKeyword[] {
        const negativeKeywords: IKeyword[] = [
            {
                word: this.adWord,
                type: KeywordType.exact
            }
        ];

        const remainingNegativeKeywords: IKeyword[] = this.remainingSource().map(
            word =>
                <IKeyword>{
                    word: word,
                    type: KeywordType.phrase
                }
        );

        return negativeKeywords.concat(remainingNegativeKeywords);
    }

    private remainingSource(): String[] {
        return this.source.coreJobTitles.concat(
            this.source.adjectives,
            this.source.coreExpansions,
            this.source.serviceProviders,
            this.source.transactionals
        );
    }
}
