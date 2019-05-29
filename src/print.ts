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
        return `Campaign Name, Ad Group, Keyword, Keyword Type, Max CPC ${Print.newLine}`;
    }
    positiveKeywords(): string {
        let output = '';
        this.adGroup.positiveKeywords.map(keyword => {
            const maxCPC = this.getMaxCPC(keyword.type);
            output += `${this.campaignName}, ${this.adGroup.name}, ${keyword.word}, ${keyword.type}, ${maxCPC}${Print.newLine}`;
        });
        return output;
    }

    static negativeKeywordHeader(): string {
        return `Campaign Name, Ad Group, Keyword, Criterion Type ${Print.newLine}`;
    }

    negativeKeywords(): string {
        let output = '';
        this.adGroup.negativeKeywords.map(keyword => {
            output += `${this.campaignName}, ${this.adGroup.name}, ${keyword.word}, Negative ${keyword.type}${Print.newLine}`;
        });
        return output;
    }

    static adGroupHeader(): string {
        return `Campaign Name, Ad Group, Status ${Print.newLine}`;
    }

    adGroupRow(): string {
        return `${this.campaignName}, ${this.adGroup.name}, Active ${Print.newLine}`;
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
