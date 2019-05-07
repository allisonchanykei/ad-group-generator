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
        return ['coreJobTitle1', 'coreJobTitle2'];
    }
    private getServiceExpansions() {
        return ['core1expansion', 'core2expansion'];
    }
    private getServiceProviders() {
        return ['company', 'service'];
    }
    private getTransactionals() {
        return ['location1', 'location2'];
    }
}
