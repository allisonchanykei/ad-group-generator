import { MaxCPC } from './print';

interface Columns {
    adjective: string;
    core: string;
    coreJobTitle: string;
    coreExpansion: string;
    serviceProvider: string;
    transactional: string;
}

export class Config {
    numberOfHeaderRows: number;
    spreadSheetId: string;
    sourceSheetName: string;
    columns: Columns;
    campaignName: string;
    maxCPC: MaxCPC;

    static createFromForm(form) {
        const config: Config = new Config();
        config.campaignName = form.campaignName;
        config.numberOfHeaderRows = form.numberOfHeaderRows;
        config.spreadSheetId = form.spreadSheetId;
        config.sourceSheetName = form.sourceSheetName;
        config.columns = {
            adjective: form.adjective,
            core: form.core,
            coreJobTitle: form.coreJobTitle,
            coreExpansion: form.coreExpansion,
            serviceProvider: form.serviceProvider,
            transactional: form.transactional
        };
        config.maxCPC = {
            phrase: form.phraseMaxCPC,
            exact: form.exactMaxCPC,
            broad: form.broadMaxCPC
        };
        return config;
    }
}
