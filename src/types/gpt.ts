import type { UuidType } from './util';

export type AuthorType = {
	name: string;
	url: string;
};

export type NameType = {
	display: string;
	sort: string;
};

export interface GPTInfoType {
	name: NameType;
	author: AuthorType;
	description: string;
	tags: string[];
	added: string;
	updated: string;
	id: UuidType;
	slug: string;
	image: string;
}
