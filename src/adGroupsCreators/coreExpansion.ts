import { ISource } from '../sources/ISource';
import { AdGroup } from '../adGroup';
import { CoreExpansionServiceProvider } from '../adGroupGenerators/coreExpansion/coreExpansionServiceProvider';
import { CoreExpansionTransactional } from '../adGroupGenerators/coreExpansion/coreExpansionTransactional';
import { AdjectiveCoreExpansionServiceProvider } from '../adGroupGenerators/coreExpansion/adjectiveCoreExpansionServiceProvider';

export function getCoreExpansionRelatedAdGroups(source: ISource): AdGroup[] {
    const adGroups: AdGroup[] = [];
    source.coreExpansions.forEach(coreExpansion => {
        source.serviceProviders.forEach(serviceProvider => {
            adGroups.push(new AdGroup(new CoreExpansionServiceProvider(coreExpansion, serviceProvider, source)));

            source.adjectives.forEach(adjective => {
                adGroups.push(new AdGroup(new AdjectiveCoreExpansionServiceProvider(coreExpansion, adjective, serviceProvider)));
            });
        });

        source.transactionals.forEach(transactional => {
            adGroups.push(new AdGroup(new CoreExpansionTransactional(coreExpansion, transactional)));
        });
    });
    return adGroups;
}
