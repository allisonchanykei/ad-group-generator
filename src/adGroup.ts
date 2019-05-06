import { IKeywordsGenerator } from './keywordsGenerator/IKeywordsGenerator';

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
    positiveKeyword: IKeyword;
    negativeKeywords: IKeyword[];

    constructor(keywordsGenerator: IKeywordsGenerator) {
        this.positiveKeyword = keywordsGenerator.positive();
        this.negativeKeywords = keywordsGenerator.negative();
    }
}
