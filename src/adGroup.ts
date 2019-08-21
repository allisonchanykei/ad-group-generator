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
    type: string;

    constructor(adGroupGenerator: IAdGroupGenerator) {
        this.name = adGroupGenerator.name();
        this.positiveKeywords = adGroupGenerator.positive();
        this.negativeKeywords = adGroupGenerator.negative();
        this.type = adGroupGenerator.constructor.name;
    }
}
