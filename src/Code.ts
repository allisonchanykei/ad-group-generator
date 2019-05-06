import { MocksSource } from './sources/mockSource';
import { ISource } from './sources/ISource';
import { AdGroup } from './adGroup';
import { CoreKeywordsGenerator } from './keywordsGenerator/coreKeywordsGenerator';

function myFunction() {
    const source: ISource = new MocksSource();
    const adGroups: AdGroup[] = [];
    source.cores.map(core => {
        adGroups.push(new AdGroup(new CoreKeywordsGenerator(core, source)));
    });
}
