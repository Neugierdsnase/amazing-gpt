import { isUuid } from '$lib/util';
import type { GPTInfoType } from '../types/gpt';

export const gpts: GPTInfoType[] = [
	{
		id: isUuid('788188ee-1cbe-4b9e-9316-a7fb8a803dc8'), // Unique identifier, fill in with actual UUID
		name: 'The Glibatree Art Designer',
		author: {
			url: 'https://glibatree.com',
			name: 'Glibatree' // URL of the author, if available
		},
		description: 'Use optimized prompts to create beautiful art!',
		tags: ['art', 'images', 'midjourney', 'pictures'], // Add relevant tags as strings
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-7CKojumSX-the-glibatree-art-designer',
		image:
			'https://files.oaiusercontent.com/file-ckcqbHACy07VMVCDAiDIIFAP?se=2123-10-20T03%3A48%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-09%252009.24.48%2520-%2520A%2520digital%2520painting%2520of%2520a%2520whimsical%2520tree%2520character%252C%2520its%2520branches%2520are%2520adorned%2520with%2520vibrant%2520rainbow-colored%2520leaves%252C%2520shimmering%2520as%2520if%2520freshly%2520rained%2520on.%2520Th.png&sig=bWlHwWvve27%2BVPn06/msFCH89ykI%2BnfcvuCnV2ZhQ2U%3D' // URL or path to an associated image, if available
	},

	{
		id: isUuid('2dfcddc8-6095-4872-9264-6a77cfaba692'), // Unique identifier, fill in with actual UUID
		name: 'Find the perfect GPT for you!',
		author: {
			name: 'Wes Roth',
			url: 'https://natural20.com' // URL of the author, if available
		},
		description:
			'This searches for the perfect GPT for your use case.Just tell it what you want and it will get busy finding the perfect GPT for your need.',
		tags: ['gpt', 'indexing', 'searching', 'meta'], // Add relevant tags as strings
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-ODDsHkh7I-find-the-perfect-gpt-for-you',
		image:
			'https://files.oaiusercontent.com/file-pT82H2IsJKCPRG5B9rV6CHak?se=2123-10-20T19%3A40%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dlogo.png&sig=QVP0Mdz5j0LwwwmxudU/EnFYQRwxQ%2BZ/D7KdjG9s%2BWY%3D'
	},

	{
		id: isUuid('a2c7c6ed-4464-467f-968c-033d789e890f'), // Unique identifier, fill in with actual UUID
		name: 'Browser Feature Compatibility Assistant',
		author: {
			name: 'The Prompt Tailor',
			url: 'https://prompt-dress.com'
		},
		description: 'Checks CSS/JS feature compatibility across browsers.',
		tags: ['coding', 'web development', 'front end', 'browser', 'webdev'], // Add relevant tags as strings
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-DtQrCQOxt-browser-feature-compatibility-assistant',
		image:
			'https://files.oaiusercontent.com/file-PX3ZQrg8R1OQE4Uy81SBy5QZ?se=2123-10-27T12%3A53%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D32838bd5-e2f4-4175-856a-8c12f7fc6c21.png&sig=5GGci3RYLMv1RAEDQpumoMUbXeZhYmzlFEn3sw2Uqdo%3D'
	},

	{
		id: isUuid('c8a7e711-8726-4b2c-a80d-38b91b345387'), // Unique identifier, fill in with actual UUID
		name: 'Unit Test Assistant for Vitest',
		author: {
			name: 'The Prompt Tailor',
			url: 'https://prompt-dress.com'
		},
		description: 'Writes JS/TS unit tests for your functions using Vitest instead of Jest.',
		tags: [
			'coding',
			'web development',
			'front end',
			'browser',
			'webdev',
			'testing',
			'unit testing'
		], // Add relevant tags as strings
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-VrxA01XiP-unit-test-assistant-for-vitest',
		image:
			'https://files.oaiusercontent.com/file-ycAjAtVaVoeCaMqHr5IghyPR?se=2123-10-24T13%3A53%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D51dff56f-cd2d-475f-9bd3-2cc3018d2d93.png&sig=MZR//lesoRKRBiiIQFvVw8LWuupJYvysnugagRRq1nA%3D'
	},

	{
		id: isUuid('277e0aa0-c30f-45ac-8f7e-c67a2f0529d6'), // Unique identifier, fill in with actual UUID
		name: 'Product Hunt Launch Advisor',
		author: {
			name: 'The Prompt Tailor',
			url: 'https://prompt-dress.com'
		},
		description: 'I guide users for impactful Product Hunt launches.',
		tags: ['product', 'product hunt', 'marketing', 'releaseing', 'copy writing', 'content writing'], // Add relevant tags as strings
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-yZKIOxFhD-product-hunt-launch-advisor',
		image:
			'https://files.oaiusercontent.com/file-fF8451x9ee2dr2enNjTnymIs?se=2123-10-24T17%3A42%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7487a3ac-bbe7-4769-9718-09b25c9851f9.png&sig=5CN1SrKb3fF8hZbT9YRiLICfV014fZqlawZp7blHZjY%3D'
	}
	// {
	// 	id: '', // Unique identifier, fill in with actual UUID
	// 	name: 'The Glibatree Art Designer',
	// 	author: {
	// 		name: 'glibatree.com',
	// 		url: '' // URL of the author, if available
	// 	},
	// 	description: 'Use optimized prompts to create beautiful art!',
	// 	tags: [], // Add relevant tags as strings
	// 	added: new Date('2023-11-22').toISOString(),
	// 	updated: new Date('2023-11-22').toISOString(),
	// 	url: 'https://chat.openai.com/g/g-7CKojumSX-the-glibatree-art-designer',
	// 	image: '' // URL or path to an associated image, if available
	// },
	// {
	// 	id: '', // Unique identifier, fill in with actual UUID
	// 	name: 'The Glibatree Art Designer',
	// 	author: {
	// 		name: 'glibatree.com',
	// 		url: '' // URL of the author, if available
	// 	},
	// 	description: 'Use optimized prompts to create beautiful art!',
	// 	tags: [], // Add relevant tags as strings
	// 	added: '', // Date added, in a string format
	// 	updated: '', // Date updated, in a string format
	// 	url: 'https://chat.openai.com/g/g-7CKojumSX-the-glibatree-art-designer',
	// 	image: '' // URL or path to an associated image, if available
	// },
	// {
	// 	id: '', // Unique identifier, fill in with actual UUID
	// 	name: 'The Glibatree Art Designer',
	// 	author: {
	// 		name: 'glibatree.com',
	// 		url: '' // URL of the author, if available
	// 	},
	// 	description: 'Use optimized prompts to create beautiful art!',
	// 	tags: [], // Add relevant tags as strings
	// 	added: '', // Date added, in a string format
	// 	updated: '', // Date updated, in a string format
	// 	url: 'https://chat.openai.com/g/g-7CKojumSX-the-glibatree-art-designer',
	// 	image: '' // URL or path to an associated image, if available
	// },
	// {
	// 	id: '', // Unique identifier, fill in with actual UUID
	// 	name: 'The Glibatree Art Designer',
	// 	author: {
	// 		name: 'glibatree.com',
	// 		url: '' // URL of the author, if available
	// 	},
	// 	description: 'Use optimized prompts to create beautiful art!',
	// 	tags: [], // Add relevant tags as strings
	// 	added: '', // Date added, in a string format
	// 	updated: '', // Date updated, in a string format
	// 	url: 'https://chat.openai.com/g/g-7CKojumSX-the-glibatree-art-designer',
	// 	image: '' // URL or path to an associated image, if available
	// },
	// {
	// 	id: '', // Unique identifier, fill in with actual UUID
	// 	name: 'The Glibatree Art Designer',
	// 	author: {
	// 		name: 'glibatree.com',
	// 		url: '' // URL of the author, if available
	// 	},
	// 	description: 'Use optimized prompts to create beautiful art!',
	// 	tags: [], // Add relevant tags as strings
	// 	added: '', // Date added, in a string format
	// 	updated: '', // Date updated, in a string format
	// 	url: 'https://chat.openai.com/g/g-7CKojumSX-the-glibatree-art-designer',
	// 	image: '' // URL or path to an associated image, if available
	// }
];
