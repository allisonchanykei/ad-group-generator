import { ISource } from './ISource';
import { Config } from '../config';

export class GoogleSheetSource implements ISource {
    adjectives: string[];
    cores: string[];
    coreJobTitles: string[];
    coreExpansions: string[];
    serviceProviders: string[];
    transactionals: string[];
    private sourceSheet: GoogleAppsScript.Spreadsheet.Sheet;

    constructor(private config: Config) {
        this.sourceSheet = SpreadsheetApp.openById(config.spreadSheetId).getSheetByName(config.sourceSheetName);
        this.adjectives = this.getAdjectives();
        this.cores = this.getCores();
        this.coreJobTitles = this.getCoreJobTitles();
        this.coreExpansions = this.getCoreExpansions();
        this.serviceProviders = this.getServiceProviders();
        this.transactionals = this.getTransactionals();
    }

    private getAdjectives() {
        return this.getColumn(this.config.columns.adjective);
    }
    private getCores() {
        return this.getColumn(this.config.columns.core);
    }
    private getCoreJobTitles() {
        return this.getColumn(this.config.columns.coreJobTitle);
    }
    private getCoreExpansions() {
        return this.getColumn(this.config.columns.coreExpansion);
    }
    private getServiceProviders() {
        return this.getColumn(this.config.columns.serviceProvider);
    }
    private getTransactionals() {
        return this.getColumn(this.config.columns.transactional);
    }

    private getColumn(column: string): string[] {
        const range = this.sourceSheet.getRange(`${column}:${column}`);
        const headerRow = this.config.numberOfHeaderRows;
        const col = range
            .getValues()
            .filter(String)
            .map(arr => <string>arr[0]);
        return col.slice(headerRow);
    }
}
