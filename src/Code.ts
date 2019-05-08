import { MockSource } from './sources/mockSource';
import { ISource } from './sources/ISource';
import { AdGroup } from './adGroup';
import { getCoreRelatedAdGroups } from './adGroupCreators/core';
import { getCoreJobTitleRelatedAdGroups } from './adGroupCreators/coreJobTitle';

function myFunction() {
    const source: ISource = new MockSource();
    let adGroups: AdGroup[] = [];

    // adGroups = adGroups.concat(getCoreRelatedAdGroups(source));
    adGroups = adGroups.concat(getCoreJobTitleRelatedAdGroups(source));

    return;
}
