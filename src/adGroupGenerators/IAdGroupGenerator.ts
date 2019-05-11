import { IKeyword } from '../adGroup';

export interface IAdGroupGenerator {
    name(): string;
    positive(): IKeyword[];
    negative(): IKeyword[];
}
