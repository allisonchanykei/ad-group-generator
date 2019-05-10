import { MockSource } from './sources/mockSource';
import { ISource } from './sources/ISource';
import { AdGroup } from './adGroup';
import { getCoreRelatedAdGroups } from './adGroupCreators/core';
import { getCoreJobTitleRelatedAdGroups } from './adGroupCreators/coreJobTitle';
import { getCoreExpansionRelatedAdGroups } from './adGroupCreators/coreExpansion';
import { GoogleSheetSource } from './sources/googleSheetSource';
import { Config } from './config';

function doGet() {
    return HtmlService.createHtmlOutputFromFile('index');
}

function processForm(form) {
    return generateAdGroups(Config.createFromForm(form));
}

function generateAdGroups(config: Config) {
    const source: ISource = new GoogleSheetSource(config);
    // const source: ISource = new MockSource();
    const adGroups: AdGroup[] = getCoreRelatedAdGroups(source)
        .concat(getCoreJobTitleRelatedAdGroups(source))
        .concat(getCoreExpansionRelatedAdGroups(source));
    return adGroups;
}
