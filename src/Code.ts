import { MockSource } from './sources/mockSource';
import { ISource } from './sources/ISource';
import { AdGroup } from './adGroup';
import { getCoreRelatedAdGroups } from './adGroupsCreators/core';
import { getCoreJobTitleRelatedAdGroups } from './adGroupsCreators/coreJobTitle';
import { getCoreExpansionRelatedAdGroups } from './adGroupsCreators/coreExpansion';
import { GoogleSheetSource } from './sources/googleSheetSource';
import { Config } from './config';
import { Print, Result } from './print';

function doGet() {
    return HtmlService.createHtmlOutputFromFile('index');
}

function processForm(form) {
    const config = Config.createFromForm(form);
    const adGroups = generateAdGroups(config);
    // return adGroups;
    const results = printResults(adGroups, config);
    return createFiles(config, results);
}

function createFiles(config: Config, results: Result) {
    const folder = DriveApp.createFolder(`${config.campaignName} Output`);

    folder.createFile(`${config.campaignName} Ad Groups`, results.adGroupSheet, 'text/csv');
    folder.createFile(`${config.campaignName} Positive Keywords`, results.postiveKeywords, 'text/csv');
    folder.createFile(`${config.campaignName} Negative Keywords`, results.negativeKeywords, 'text/csv');

    return folder.getUrl();
}

function generateAdGroups(config: Config): AdGroup[] {
    const source: ISource = new GoogleSheetSource(config);
    // const source: ISource = new MockSource();
    const adGroups: AdGroup[] = getCoreRelatedAdGroups(source)
        .concat(getCoreJobTitleRelatedAdGroups(source))
        .concat(getCoreExpansionRelatedAdGroups(source));
    return adGroups;
}

function printResults(adGroups: AdGroup[], config: Config): Result {
    let adGroupSheet = Print.adGroupHeader();
    let postiveKeywords = Print.positiveKeywordHeader();
    let negativeKeywords = Print.negativeKeywordHeader();

    adGroups.forEach(adGroup => {
        const print = new Print(config.campaignName, adGroup, config.maxCPC);
        adGroupSheet += print.adGroupRow();
        postiveKeywords += print.positiveKeywords();
        negativeKeywords += print.negativeKeywords();
    });

    return { adGroupSheet, postiveKeywords, negativeKeywords };
}
