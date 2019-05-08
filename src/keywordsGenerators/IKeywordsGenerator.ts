import { IKeyword } from '../adGroup';

export interface IKeywordsGenerator {
    positive(): IKeyword[];
    negative(): IKeyword[];
}
