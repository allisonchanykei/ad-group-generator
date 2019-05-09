import { ISource } from '../sources/ISource';
import { AdGroup } from '../adGroup';
import { CoreJobTitle } from '../keywordsGenerators/coreJobTitle/coreJobTitle';
import { AdjectiveCoreJobTitle } from '../keywordsGenerators/coreJobTitle/adjectiveCoreJobTitle';
import { CoreJobTitleTransactional } from '../keywordsGenerators/coreJobTitle/coreJobTitleTransactional';
import { AdjectiveCoreJobTitleTransactional } from '../keywordsGenerators/coreJobTitle/adjectiveCoreJobTitleTransactional';

export function getCoreJobTitleRelatedAdGroups(source: ISource): AdGroup[] {
    const adGroups: AdGroup[] = [];
    source.coreJobTitles.map(coreJobTitle => {
        adGroups.push(new AdGroup(new CoreJobTitle(coreJobTitle, source)));

        source.adjectives.map(adjective => {
            adGroups.push(new AdGroup(new AdjectiveCoreJobTitle(coreJobTitle, adjective, source)));

            source.transactionals.map(transactional => {
                adGroups.push(new AdGroup(new AdjectiveCoreJobTitleTransactional(coreJobTitle, adjective, transactional)));
            });
        });

        source.transactionals.map(transactional => {
            adGroups.push(new AdGroup(new CoreJobTitleTransactional(coreJobTitle, transactional, source)));
        });
    });
    return adGroups;
}