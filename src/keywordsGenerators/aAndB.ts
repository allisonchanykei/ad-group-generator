import { IKeywordsGenerator } from './IKeywordsGenerator';
import { IKeyword, KeywordType } from '../adGroup';

export class AandB implements IKeywordsGenerator {
    protected negativePhrases: string[];

    constructor(private first: string, private second: string) {}

    positive(): IKeyword[] {
        const word = this.first + this.second;
        return [
            {
                word,
                type: KeywordType.exact
            },
            {
                word,
                type: KeywordType.phrase
            }
        ];
    }

    negative(): IKeyword[] {
        return this.negativePhrases.map(
            word =>
                <IKeyword>{
                    word: word,
                    type: KeywordType.phrase
                }
        );
    }
}
