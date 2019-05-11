import { IAdGroupGenerator } from './IAdGroupGenerator';
import { IKeyword, KeywordType } from '../adGroup';

export abstract class AandB implements IAdGroupGenerator {
    protected negativePhrases: string[] = [];

    constructor(private first: string, private second: string) {}

    name(): string {
        return `${this.first} ${this.second}`;
    }

    positive(): IKeyword[] {
        const word = `${this.first} ${this.second}`;
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
