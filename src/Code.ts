import { MockSource } from './sources/mockSource';
import { ISource } from './sources/ISource';
import { AdGroup } from './adGroup';
import { getCoreRelatedAdGroups } from './adGroupCreators/core';
import { getCoreJobTitleRelatedAdGroups } from './adGroupCreators/coreJobTitle';
import { getCoreExpansionRelatedAdGroups } from './adGroupCreators/coreExpansion';

function myFunction() {
    const source: ISource = new MockSource();
    const adGroups: AdGroup[] = getCoreRelatedAdGroups(source)
        .concat(getCoreJobTitleRelatedAdGroups(source))
        .concat(getCoreExpansionRelatedAdGroups(source));

    return;
}
