import { MockSource } from './sources/mockSource';
import { ISource } from './sources/ISource';
import { AdGroup } from './adGroup';
import { Core } from './keywordsGenerator/core';
import { AdjectiveCore } from './keywordsGenerator/adjectiveCore';

function myFunction() {
    const source: ISource = new MockSource();
    const adGroups: AdGroup[] = [];
    source.cores.map(core => {
        adGroups.push(new AdGroup(new Core(core, source)));

        source.adjectives.map(adjective => {
            adGroups.push(new AdGroup(new AdjectiveCore(core, adjective, source)));
        });
    });
    return;
}
