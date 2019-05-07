import { MockSource } from './sources/mockSource';
import { ISource } from './sources/ISource';
import { AdGroup } from './adGroup';
import { Core } from './keywordsGenerator/core';

function myFunction() {
    const source: ISource = new MockSource();
    const adGroups: AdGroup[] = [];
    source.cores.map(core => {
        adGroups.push(new AdGroup(new Core(core, source)));
    });
}
