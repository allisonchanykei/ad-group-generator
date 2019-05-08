import { MockSource } from './sources/mockSource';
import { ISource } from './sources/ISource';
import { AdGroup } from './adGroup';
import { Core } from './keywordsGenerator/core';
import { AdjectiveCore } from './keywordsGenerator/adjectiveCore';
import { CoreServiceProvider } from './keywordsGenerator/coreServiceProvider';
import { CoreTransactional } from './keywordsGenerator/coreTransactional';
import { AdjectiveCoreTransactional } from './keywordsGenerator/adjectiveCoreTransactional';
import { CoreServiceProviderTransactional } from './keywordsGenerator/coreServiceProviderTransactional';
import { AdjectiveCoreServiceProvider } from './keywordsGenerator/adjectiveCoreServiceProvider';

function myFunction() {
    const source: ISource = new MockSource();
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
    return;
}
