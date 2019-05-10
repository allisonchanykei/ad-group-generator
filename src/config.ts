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

    static createFromForm(form) {
        const config: Config = new Config();
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
        return config;
    }
}
