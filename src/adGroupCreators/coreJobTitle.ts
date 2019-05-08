import { ISource } from '../sources/ISource';
import { AdGroup } from '../adGroup';
import { CoreJobTitle } from '../keywordsGenerators/coreJobTitle/coreJobTitle';

export function getCoreJobTitleRelatedAdGroups(source: ISource): AdGroup[] {
    const adGroups: AdGroup[] = [];
    source.coreJobTitles.map(coreJobTitle => {
        adGroups.push(new AdGroup(new CoreJobTitle(coreJobTitle, source)));
    });
    return adGroups;
}
