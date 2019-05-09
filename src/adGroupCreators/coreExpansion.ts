import { ISource } from '../sources/ISource';
import { AdGroup } from '../adGroup';
import { CoreExpansionServiceProvider } from '../keywordsGenerators/coreExpansion/coreExpansionServiceProvider';
import { CoreExpansionTransactional } from '../keywordsGenerators/coreExpansion/coreExpansionTransactional';
import { AdjectiveCoreExpansionServiceProvider } from '../keywordsGenerators/coreExpansion/adjectiveCoreExpansionServiceProvider';

export function getCoreExpansionRelatedAdGroups(source: ISource): AdGroup[] {
    const adGroups: AdGroup[] = [];
    source.coreExpansions.map(coreExpansion => {
        source.serviceProviders.map(serviceProvider => {
            adGroups.push(new AdGroup(new CoreExpansionServiceProvider(coreExpansion, serviceProvider, source)));

            source.adjectives.map(adjective => {
                adGroups.push(new AdGroup(new AdjectiveCoreExpansionServiceProvider(coreExpansion, adjective, serviceProvider)));
            });
        });

        source.transactionals.map(transactional => {
            adGroups.push(new AdGroup(new CoreExpansionTransactional(coreExpansion, transactional)));
        });
    });
    return adGroups;
}
