import type { GPTInfoType } from '../types/gpt';
import type { Schema, UuidType } from '../types/util';
import _ from 'lodash';

export const isUuid = (uuid: string | UuidType): UuidType => {
	if (/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi.test(uuid)) {
		return uuid as UuidType;
	}

	throw new Error('Invalid UUID');
};

export const getUniqueTags = (tags: (string | undefined)[] | undefined): string[] => {
	const filteredTags = (tags?.filter(Boolean) as string[]) ?? [];

	if (!filteredTags || filteredTags.length === 0) {
		return [];
	}

	return _.uniq(filteredTags);
};

export const serializeSchema = (thing: Schema) => {
	return `<script type="application/ld+json">${JSON.stringify(thing, null, 2)}</script>`;
};

const generateGptSchema = ({ displayname, applicationCategory }: GPTInfoType) => ({
	'@type': 'ListItem',
	// position: 2,
	item: {
		'@type': 'SoftwareApplication',
		name: displayname,
		applicationCategory: applicationCategory || 'Education',
		operatingSystem: 'Web',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD'
		}
	}
});

export const generateItemListSchema = (gpts: GPTInfoType[]) => {
	const list = gpts.map((gpt, index) => {
		const schema = generateGptSchema(gpt);
		return {
			...schema,
			position: index + 1
		};
	});

	return {
		'@context': 'http://schema.org',
		'@type': 'ItemList',
		name: 'Custom GPTs',
		description: 'Explore our handpicked collection of groundbreaking custom GPTs.',
		url: 'https://amazing-gpt.com',
		numberOfItems: list.length,
		itemListElement: list
	};
};
