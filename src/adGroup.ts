import { IAdGroupGenerator } from './adGroupGenerators/IAdGroupGenerator';

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
    name: string;
    positiveKeywords: IKeyword[];
    negativeKeywords: IKeyword[];

    constructor(keywordsGenerator: IAdGroupGenerator) {
        this.name = keywordsGenerator.name();
        this.positiveKeywords = keywordsGenerator.positive();
        this.negativeKeywords = keywordsGenerator.negative();
    }
}
