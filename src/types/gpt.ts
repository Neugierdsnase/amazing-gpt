import type { UuidType } from './util';

export type AuthorType = {
	name: string;
	url: string;
};

export interface GPTInfoType {
	name: string;
	sortName?: string;
	author: AuthorType;
	description: string;
	tags: string[];
	added: string;
	updated: string;
	id: UuidType;
	url: string;
	image: string;
}

export class GPTInfo implements GPTInfoType {
	public sortName: string;

	constructor(
		public name: string,
		public author: AuthorType,
		public description: string,
		public tags: string[],
		public added: string,
		public updated: string,
		public id: UuidType,
		public url: string,
		public image: string
	) {
		this.sortName = name.toLowerCase().replace(/[^a-z]/g, ''); // Filters out non-alphabetic characters
	}
}
