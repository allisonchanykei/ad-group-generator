import { IKeywordsGenerator } from '../IKeywordsGenerator';
import { ISource } from '../../sources/ISource';
import { IKeyword, KeywordType } from '../../adGroup';

export class CoreJobTitle implements IKeywordsGenerator {
    constructor(private adWord: string, private source: ISource) {}

    positive(): IKeyword[] {
        const word = this.adWord;
        return [
            {
                word,
                type: KeywordType.phrase
            },
            {
                word,
                type: KeywordType.exact
            }
        ];
    }

    negative(): IKeyword[] {
        const negativeKeywords: IKeyword[] = this.source.cores.map(
            core =>
                <IKeyword>{
                    word: core,
                    type: KeywordType.exact
                }
        );

        const negativePhrases = this.source.adjectives.concat(
            this.source.coreExpansions,
            this.source.serviceProviders,
            this.source.transactionals
        );

        const remainingNegativeKeywords: IKeyword[] = negativePhrases.map(
            word =>
                <IKeyword>{
                    word,
                    type: KeywordType.phrase
                }
        );

        return negativeKeywords.concat(remainingNegativeKeywords);
    }
}
