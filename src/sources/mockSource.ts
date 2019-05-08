import { ISource } from './ISource';

export class MockSource implements ISource {
    adjectives: string[];
    cores: string[];
    coreJobTitles: string[];
    coreExpansions: string[];
    serviceProviders: string[];
    transactionals: string[];

    constructor() {
        this.adjectives = this.getAdjectives();
        this.cores = this.getCores();
        this.coreJobTitles = this.getCoreJobTitles();
        this.coreExpansions = this.getServiceExpansions();
        this.serviceProviders = this.getServiceProviders();
        this.transactionals = this.getTransactionals();
    }

    private getAdjectives() {
        return ['ad1', 'ad2'];
    }
    private getCores() {
        return ['core1', 'core2'];
    }
    private getCoreJobTitles() {
        return ['jobTitle1', 'jobTitle2'];
    }
    private getServiceExpansions() {
        return ['expansion1', 'expansion2'];
    }
    private getServiceProviders() {
        return ['sp1', 'sp2'];
    }
    private getTransactionals() {
        return ['location1', 'location2'];
    }
}
