import { IKeywordsGenerator } from './keywordsGenerators/IKeywordsGenerator';

export enum KeywordType {
    phrase = 'phrase',
    broad = 'broad',
    exact = 'exact'
}

export interface IKeyword {
    word: string;
    type: KeywordType;
}

export class AdGroup {
    positiveKeywords: IKeyword[];
    negativeKeywords: IKeyword[];

    constructor(keywordsGenerator: IKeywordsGenerator) {
        this.positiveKeywords = keywordsGenerator.positive();
        this.negativeKeywords = keywordsGenerator.negative();
    }
}
