import { AdGroup, KeywordType } from './adGroup';

export interface MaxCPC {
    phrase: number;
    exact: number;
    broad: number;
}

export interface Result {
    adGroupSheet: string;
    postiveKeywords: string;
    negativeKeywords: string;
}

export class Print {
    static newLine: string = '\n';
    constructor(private campaignName: string, private adGroup: AdGroup, private maxCPC: MaxCPC) {}

    static positiveKeywordHeader(): string {
        return `Campaign Name, Ad Group, Combination, Keyword, Keyword Type, Max CPC ${Print.newLine}`;
    }
    positiveKeywords(): string {
        let output = '';
        this.adGroup.positiveKeywords.forEach(keyword => {
            const maxCPC = this.getMaxCPC(keyword.type);
            output += `${this.campaignName}, ${this.adGroup.name}, ${this.adGroup.type}, ${keyword.word}, ${
                keyword.type
            }, ${maxCPC}${Print.newLine}`;
        });
        return output;
    }

    static negativeKeywordHeader(): string {
        return `Campaign Name, Ad Group, Combination, Keyword, Criterion Type ${Print.newLine}`;
    }

    negativeKeywords(): string {
        let output = '';
        this.adGroup.negativeKeywords.forEach(keyword => {
            output += `${this.campaignName}, ${this.adGroup.name}, ${this.adGroup.type}, ${keyword.word}, Negative ${
                keyword.type
            }${Print.newLine}`;
        });
        return output;
    }

    static adGroupHeader(): string {
        return `Campaign Name, Ad Group, Combination, Status ${Print.newLine}`;
    }

    adGroupRow(): string {
        return `${this.campaignName}, ${this.adGroup.name}, ${this.adGroup.type}, Active ${Print.newLine}`;
    }

    private getMaxCPC(type: KeywordType): number {
        switch (type) {
            case KeywordType.phrase:
                return this.maxCPC.phrase;
            case KeywordType.exact:
                return this.maxCPC.exact;
            case KeywordType.broad:
                return this.maxCPC.broad;
        }
    }
}
