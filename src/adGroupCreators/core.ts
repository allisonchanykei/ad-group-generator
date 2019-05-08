import { ISource } from '../sources/ISource';
import { AdGroup } from '../adGroup';
import { Core } from '../keywordsGenerators/core/core';
import { AdjectiveCore } from '../keywordsGenerators/core/adjectiveCore';
import { AdjectiveCoreTransactional } from '../keywordsGenerators/core/adjectiveCoreTransactional';
import { AdjectiveCoreServiceProvider } from '../keywordsGenerators/core/adjectiveCoreServiceProvider';
import { CoreServiceProvider } from '../keywordsGenerators/core/coreServiceProvider';
import { CoreServiceProviderTransactional } from '../keywordsGenerators/core/coreServiceProviderTransactional';
import { CoreTransactional } from '../keywordsGenerators/core/coreTransactional';

export function getCoreRelatedAdGroups(source: ISource): AdGroup[] {
    const adGroups: AdGroup[] = [];
    source.cores.map(core => {
        adGroups.push(new AdGroup(new Core(core, source)));

        source.adjectives.map(adjective => {
            adGroups.push(new AdGroup(new AdjectiveCore(core, adjective, source)));

            source.transactionals.map(transactional => {
                adGroups.push(new AdGroup(new AdjectiveCoreTransactional(core, adjective, transactional)));
            });

            source.serviceProviders.map(serviceProvider => {
                adGroups.push(new AdGroup(new AdjectiveCoreServiceProvider(core, adjective, serviceProvider)));
            });
        });

        source.serviceProviders.map(serviceProvider => {
            adGroups.push(new AdGroup(new CoreServiceProvider(core, serviceProvider, source)));

            source.transactionals.map(transactional => {
                adGroups.push(new AdGroup(new CoreServiceProviderTransactional(core, serviceProvider, transactional)));
            });
        });

        source.transactionals.map(transactional => {
            adGroups.push(new AdGroup(new CoreTransactional(core, transactional, source)));
        });
    });
    return adGroups;
}
