import type { UuidType } from './util';

export interface GPTInfoType {
	displayname: string;
	sortname: string;
	authorname: string;
	authorurl: string;
	description: string;
	tags: string[];
	added: string;
	updated: string;
	id: UuidType;
	slug: string;
	image: string;
}
