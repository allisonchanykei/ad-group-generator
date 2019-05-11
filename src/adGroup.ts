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

    constructor(adGroupGenerator: IAdGroupGenerator) {
        this.name = adGroupGenerator.name();
        this.positiveKeywords = adGroupGenerator.positive();
        this.negativeKeywords = adGroupGenerator.negative();
    }
}
