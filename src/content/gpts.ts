import { isUuid } from '$lib/util';
import { GPTInfo, type GPTInfoType } from '../types/gpt';

const gpts: GPTInfoType[] = [
	{
		id: isUuid('788188ee-1cbe-4b9e-9316-a7fb8a803dc8'),
		name: 'The Glibatree Art Designer',
		author: {
			url: 'https://glibatree.com',
			name: 'Glibatree'
		},
		description: 'Use optimized prompts to create beautiful art!',
		tags: ['art', 'images', 'midjourney', 'pictures'],
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
		tags: ['product', 'product hunt', 'marketing', 'copywriting', 'content writing'], // Add relevant tags as strings
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-yZKIOxFhD-product-hunt-launch-advisor',
		image:
			'https://files.oaiusercontent.com/file-fF8451x9ee2dr2enNjTnymIs?se=2123-10-24T17%3A42%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7487a3ac-bbe7-4769-9718-09b25c9851f9.png&sig=5CN1SrKb3fF8hZbT9YRiLICfV014fZqlawZp7blHZjY%3D'
	},
	{
		id: isUuid('51bf544e-5e66-4fdf-af63-7ebfb9dba1b6'),
		name: 'editGPT',
		author: {
			name: 'editGPT',
			url: 'https://editgpt.app'
		},
		description:
			'Proofread, edit and track changes to your content. Works alongside the editGPT browser extension.',
		tags: ['writing', 'editing', 'proofreading', 'copywriting', 'content writing'],
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-zpuYfzV7k-editgpt',
		image:
			'https://files.oaiusercontent.com/file-rtnaGVkL7cbKKvFKj4W3IIma?se=2123-10-19T16%3A47%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dandroid-chrome-192x192.png&sig=8IBMna9myk44fzf873z/OFp9oS8kflbVjN9T/xwRvw8%3D' // URL or path to an associated image, if available
	},

	{
		id: isUuid('d646a87c-9fff-427d-b2e7-bf0d0d7a8d0f'),
		name: 'Grimoire',
		author: {
			name: 'Mindgoblin Studios',
			url: 'https://mindgoblinstudios.com/'
		},
		description:
			'Coding Wizard: 100x Engineer. Create a website with a sentence. Built for a new era of creativity: **************Prompt-gramming***************** 15+ Hotkeys for coding flows. 19 starter projects. Prompt first creativity! Start with a picture or a quest? Type: K for cmd Menu, or R for README v1.13',
		tags: ['coding', 'webdev', 'front end', 'prompt-gramming', 'creativity', 'web development'], // Add relevant tags as strings
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-n7Rs0IK86-grimoire',
		image:
			'https://files.oaiusercontent.com/file-MTr7WWRSSCbZjGIeEUVF3Bwh?se=2123-10-15T16%3A15%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%2520Code%2520Wizard%2520Illustration.png&sig=G2gs2Pxi21I6346XTyg6tN9BydGthgIhc3YZIuE/n8w%3D'
	},

	{
		id: isUuid('753e7023-8c27-4dee-b754-ae860e7a97ee'),
		name: 'Market Analyst',
		author: {
			name: 'Colin Gillingham',
			url: 'https://gillingh.am/'
		},
		description:
			'Analyze any chart, instantly. Just paste or upload an image of your chart. Include as many indicators as you want - great way to learn!',
		tags: ['analyst', 'data', 'business', 'marketing'], // Add relevant tags as strings
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-m5ZAgJ5jt-market-analyst',
		image:
			'https://files.oaiusercontent.com/file-LysoBBUxXycslgSYCDP31aYK?se=2123-10-17T20%3A01%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D11402854-cde5-48d2-a41f-41f4184e7b1d.png&sig=SwXcmsDMly0YPEsmKiYsKsXbBVJ/MBUMZvBfqxzyvf0%3D' // URL or path to an associated image, if available
	},

	{
		id: isUuid('0aa16089-d584-4b85-8899-bbf286686cf0'),
		name: 'SellMeThisPen',
		author: {
			name: 'Active Solution',
			url: 'https://www.activesolution.se/' // URL of the author, if available
		},
		description:
			'Create second hand marketplace listings based on pictures. Start by uploading a picture.',
		tags: ['sales', 'image-to-text'], // Add relevant tags as strings
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-cTqsEOE4C-sellmethispen',
		image:
			'https://files.oaiusercontent.com/file-yALburFJq31FxM7lp7Sf4Shx?se=2123-10-17T07%3A39%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DSellMeThisPen-03.png&sig=D1KJbovUZ%2B0IcuMqQJVno6ZwQVjFgmP8unlpDV39XdE%3D' // URL or path to an associated image, if available
	},

	{
		id: isUuid('c1a3d931-9cc9-4532-98f6-09d91d2e88e5'), // Unique identifier, fill in with actual UUID
		name: '22.500+ Best Custom GPTs',
		author: {
			name: 'SEO.ai',
			url: 'https://seo.ai/' // URL of the author, if available
		},
		description:
			'Search all public GPTs in one place. Find the best Custom ChatGPTs tailored to your needs. Every day, hundreds of new popular GPTs join our ranks!',
		tags: ['gpt', 'indexing', 'searching', 'meta'],
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-RuhDS8mbd-17500-best-custom-gpts',
		image:
			'https://files.oaiusercontent.com/file-MgGT6z8XgEqooNX79PZufM5S?se=2123-10-27T22%3A07%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbest-gpts.png&sig=MlatxQXK4pU8bZzLY/9zMjlRY2N4FEFOyMM16ZfUVTM%3D' // URL or path to an associated image, if available
	},

	{
		id: isUuid('56c064cb-426e-44cd-8926-587936d44e06'),
		name: 'SEO Mentor',
		author: {
			name: 'Natzir Turrado Ruiz',
			url: 'https://www.natzir.com/'
		},
		description: "SEO mentor aligned with Google's best practices",
		tags: ['seo', 'marketing', 'google'],
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-QqvewXqPt-seo-mentor',
		image:
			'https://files.oaiusercontent.com/file-L9yIY9GqEdDo94onlYwWLP4U?se=2123-10-16T17%3A22%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6c5af06b-9dc1-480b-90df-57f7d0573ecc.png&sig=ndVjrBKmvk1x2b%2BvqDNu64rQDYOBhP9xQc0g6xlnzu8%3D'
	},

	{
		id: isUuid('a780dda2-7588-471a-b71e-41eee693c678'),
		name: 'Logo Maker',
		author: {
			name: 'Andrew Gao',
			url: 'https://www.andrewgao.dev/'
		},
		description: 'Makes you a professional high quality PNG for your business.',
		tags: ['logo', 'design', 'branding', 'business', 'marketing'],
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-Mc4XM2MQP-logo-maker',
		image:
			'https://files.oaiusercontent.com/file-OL42EdwTQ3ZqlwBJqSiepQua?se=2123-10-14T21%3A11%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D540b581d-40a5-4029-80dc-71c9eae7406d.png&sig=6a9vwOkaekscLiSE7AWY7iag1L1iaFXcwOEEx9BFjCk%3D'
	},

	{
		id: isUuid('620c5aa7-d600-4b54-9d36-3d953d453ae3'),
		name: 'ConvertAnything',
		author: {
			name: 'Pietro Schirano',
			url: ''
		},
		description:
			'The ultimate file converter for images, audio, video, documents and more. It handles individual or batch uploads, supports ZIPs, and provides a download link.',
		tags: ['file conversion', 'images', 'audio', 'video', 'documents'],
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-kMKw5tFmB-convertanything',
		image:
			'https://files.oaiusercontent.com/file-Gpws0QDcR4iL5URQQoxxvRET?se=2123-10-19T06%3A07%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8c64f203-9ea6-4c45-a339-d92f6545a2f7.png&sig=Zhlsp136YwCoXKLK%2BpCspdKokq%2BhQDrdimmAXvE4vME%3D'
	},

	{
		id: isUuid('adf31f9e-4a97-4129-8ce6-6b7c9ab44e30'),
		name: 'DesignerGPT',
		author: {
			name: 'Pietro Schirano',
			url: ''
		},
		description: 'Creates and hosts beautiful websites.',
		tags: ['webdev', 'design', 'websites', 'hosting', 'web development'],
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-2Eo3NxuS7-designergpt',
		image:
			'https://files.oaiusercontent.com/file-x4outSHGhQh7YW6b8fqDK26y?se=2123-10-17T05%3A48%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Decd882e5-15b7-4dba-8198-94a8849974f9.png&sig=DAm8CnFD1K9kaX%2BVe6AFBl1Yje0t1MGJKrm/tT4YTFc%3D'
	},

	{
		id: isUuid('7bf4a00c-e93b-474f-a4c1-a9998390fb5b'),
		name: 'Simpsonize Me',
		author: {
			name: 'Matthew Schlicht',
			url: ''
		},
		description: 'I turn photos into Simpsons-style art.',
		tags: ['simpsons', 'art', 'images', 'pictures', 'photos', 'image editing'],
		added: new Date('2023-11-22').toISOString(),
		updated: new Date('2023-11-22').toISOString(),
		url: 'https://chat.openai.com/g/g-tcmMldCYy-simpsonize-me',
		image:
			'https://files.oaiusercontent.com/file-17fHH5xrODVwm3MWDraASFA3?se=2123-10-14T18%3A36%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da722ea47-dbe5-48e9-8edb-18b06967b0a3.png&sig=1B5F0S7gRjMV2HmqIaIqmiSwoiePyILURO7nm3KDTIs%3D'
	},

	{
		id: isUuid('173b8815-e0aa-4086-af40-f0f77faf9bb3'),
		name: 'GPTs Matchmaker',
		author: {
			name: 'SynLabs',
			url: 'https://synlabs.pro'
		},
		description: 'Expert in matching users with suitable GPTs.',
		tags: ['gpt', 'indexing', 'searching', 'meta'],
		added: new Date('2023-11-23').toISOString(),
		updated: new Date('2023-11-23').toISOString(),
		url: 'https://chat.openai.com/g/g-PCGBO2DdD-gpts-matchmaker',
		image:
			'https://files.oaiusercontent.com/file-aBomEOTt7zbEFziQobe33wwY?se=2123-10-21T12%3A23%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df2b293cc-a024-4df7-9cf7-c421bc94ffe4.png&sig=E0JIEy09ZmfT2xsQvHLaD/ewYdn3IlYmFEFSTYZ%2BR8A%3D'
	},

	{
		id: isUuid('aa7e86a1-3d2f-4fe8-b9a7-22fbe50f0d79'),
		name: '/Imagine Anything',
		author: {
			name: 'Joshua Bodnar',
			url: ''
		},
		description: 'You can create almost any image, making a masterpiece from thin air!',
		tags: ['images', 'pictures', 'art'],
		added: new Date('2023-11-23').toISOString(),
		updated: new Date('2023-11-23').toISOString(),
		url: 'https://chat.openai.com/g/g-z9mT0nYIk-imagine-anything',
		image:
			'https://files.oaiusercontent.com/file-LK85nAOSowLnp8XUC8gdvPRf?se=2123-10-22T23%3A56%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D34.png&sig=Ug0eoGNweed8xhIkA3CYU2HXVltPBk0FHKEbXe/fXCg%3D'
	},

	{
		id: isUuid('fd9688d6-60f1-49d5-b58e-b102018848f4'),
		name: 'L6 Helix Sound Designer',
		author: {
			name: 'Joel P Gouker',
			url: ''
		},
		description:
			'I help you with Line 6 Helix sound design, focusing on custom patches and guitar tone guidance - V 0.3',
		tags: ['music', 'guitar', 'sound design', 'audio', 'tone'],
		added: new Date('2023-11-23').toISOString(),
		updated: new Date('2023-11-23').toISOString(),
		url: 'https://chat.openai.com/g/g-jKUagForu-l6-helix-sound-designer',
		image:
			'https://files.oaiusercontent.com/file-4PrjMaqZ9TlAdXxcThPyjr2S?se=2123-10-17T02%3A04%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc0225314-3cf6-4bb5-99c3-7908329b6703.png&sig=HDQHyu6cNPKdGbo68fIVLIeWrKAk3Ske2dh80C0tl5s%3D'
	},

	{
		id: isUuid('47af4fb5-78c2-4288-86a9-4f305102b515'),
		name: 'Dispatch Trainer',
		author: {
			name: '',
			url: ''
		},
		description: 'Simulates 911 calls for dispatcher training.',
		tags: ['911', 'dispatcher', 'emergency'],
		added: new Date('2023-11-23').toISOString(),
		updated: new Date('2023-11-23').toISOString(),
		url: 'https://chat.openai.com/g/g-JjYTt8d1p-dispatch-trainer',
		image:
			'https://files.oaiusercontent.com/file-4JeBm1luXC4B73EBKIrFs1oZ?se=2123-10-21T16%3A48%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4f290fcd-80d9-42f5-a892-8124c742e61b.png&sig=eIJUb5sOsWD/6H7AEVEJ3%2B0EKHIyo4Z5wHS/e9OWPqQ%3D'
	},

	{
		id: isUuid('61f914d1-1a35-455f-886f-662b19d3dfbb'),
		name: 'Portrait Cartoonator',
		author: {
			name: '',
			url: 'https://rsugrafx.com/'
		},
		description:
			'Turns your photos into cartoon-style portraits. Just upload a photo, and the app automatically starts.',
		tags: ['cartoon', 'portrait', 'image editing', 'pictures', 'photos', 'images'],
		added: new Date('2023-11-23').toISOString(),
		updated: new Date('2023-11-23').toISOString(),
		url: 'https://chat.openai.com/g/g-BVAcMP7wX-portrait-cartoonator',
		image:
			'https://files.oaiusercontent.com/file-W9AKvihAeIk1syTMYsC1aC9u?se=2123-10-21T09%3A34%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dlogo.png&sig=Nn9ZWpbtFwyhq1nlfFdQjwD21DhppL3No7VRZFoWF8Y%3D'
	},

	{
		id: isUuid('bb2a68d2-9f7f-4ae0-bf26-9e925fa1b9ce'),
		name: 'Pawtrait Creator',
		author: {
			name: '',
			url: 'https://rsugrafx.com/'
		},
		description:
			'Creates cartoon pet portraits. Upload a photo of your pet, type its name, submit it, and watch the magic happen.',
		tags: ['cartoon', 'portrait', 'image editing', 'pictures', 'photos', 'images'],
		added: new Date('2023-11-23').toISOString(),
		updated: new Date('2023-11-23').toISOString(),
		url: 'https://chat.openai.com/g/g-WYlcscE2T-pawtrait-creator',
		image:
			'https://files.oaiusercontent.com/file-YdiwHH35WY3pfNnmUWCeil7g?se=2123-10-21T09%3A37%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dlogo.png&sig=5XMhernnJp0cGH7%2BHMFnROC/g7lZHiXjGjc2qZN8kdo%3D'
	},

	{
		id: isUuid('5213dba9-2ee8-4bf8-bf99-0d78442b8a52'),
		name: 'Your Socratic Buddy',
		author: {
			name: 'TOM GALLY',
			url: ''
		},
		description: 'Thoughtful discussions with a knowledgeable partner',
		tags: ['philosophy', 'discussion', 'conversation'],
		added: new Date('2023-11-23').toISOString(),
		updated: new Date('2023-11-23').toISOString(),
		url: 'https://chat.openai.com/g/g-o03gktdyW-your-socratic-buddy',
		image:
			'https://files.oaiusercontent.com/file-JfnzO7n2gPGaw9PHvFoBs1u4?se=2123-10-16T13%3A30%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da05973f9-1b0f-4ef1-adc4-ede0df30125f.png&sig=ZwwFiiVUh8DvJY18/NsePn09tOnS8ugPLvhgJ4d3cew%3D'
	},

	{
		id: isUuid('200eb415-0117-4a72-9677-3bc57661c2de'),
		name: 'Permaculture GPT',
		author: {
			name: 'Anthony McLaughlin',
			url: ''
		},
		description: 'Thoughtful discussions with a knowledgeable partner',
		tags: ['permaculture', 'gardening', 'farming', 'sustainability', 'ecology', 'agriculture'],
		added: new Date('2023-11-23').toISOString(),
		updated: new Date('2023-11-23').toISOString(),
		url: 'https://chat.openai.com/g/g-y8BV6typ7-permaculture-gpt',
		image:
			'https://files.oaiusercontent.com/file-Ng2oCJXLK8jvlwDDFO8I92hY?se=2123-10-17T12%3A32%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db67d4367-862c-40ca-bd5b-60996578acd7.png&sig=3/AjCFo6Wsfuj0cHlmPYi3%2BJnInPh5P3T2sJwWk4EX8%3D'
	},

	{
		id: isUuid('abe4a5b3-806c-4357-bd36-427da0c46e4a'),
		name: 'LimitlessGPT',
		author: {
			name: 'Naja Faysal',
			url: ''
		},
		description: 'Concise Step-by-Step Strategist',
		tags: ['strategy', 'business', 'marketing', 'planning', 'productivity', 'management'],
		added: new Date('2023-11-23').toISOString(),
		updated: new Date('2023-11-23').toISOString(),
		url: 'https://chat.openai.com/g/g-XUgnMbahO-limitlessgpt',
		image:
			'https://files.oaiusercontent.com/file-kmJxKAgJIAxtDvKBoKtgCX0L?se=2123-10-18T02%3A09%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252009.33.34%2520-%2520A%2520modern%252C%2520futuristic%252C%2520and%2520minimalistic%2520logo%2520for%2520%2527Limitless%252C%2527%2520a%2520productivity%2520and%2520life-planning%2520system.%2520The%2520logo%2520should%2520combine%2520symbols%2520of%2520a%2520brain%2520and%2520a.png&sig=fSSKOktPJSy0J67un1D5j8E711XhZGjqAuxmWBjC1Zo%3D'
	},

	{
		id: isUuid('7d377bc1-22d4-4428-98ea-101965a6b914'),
		name: 'SEO GOAT',
		author: {
			name: 'benjamin ogden',
			url: ''
		},
		description: 'AI blog writer with SEO expertise and automatic AI image generation',
		tags: ['seo', 'marketing', 'blogging', 'writing', 'content writing', 'images', 'pictures'],
		added: new Date('2023-11-23').toISOString(),
		updated: new Date('2023-11-23').toISOString(),
		url: 'https://chat.openai.com/g/g-vCVZafMQ3-seo-goat',
		image:
			'https://files.oaiusercontent.com/file-0nJY9hPmCTEwNS4yLDQtDkSG?se=2123-10-16T10%3A38%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd2b70ac6-3476-494a-ad85-fa0bb3701f78.png&sig=rt1ZULrH%2BVsHiIiuoGHLEabhUzrODZClRbRHVHDzS5s%3D'
	},

	{
		id: isUuid('201686b3-b454-4dbe-ad95-c7c1cbe4b0e4'),
		name: 'DoubleSpeak GPT',
		author: {
			name: 'Safa Bilici',
			url: ''
		},
		description: 'not telling lies whilst not telling the truth',
		tags: ['politics', 'media', 'propaganda', 'marketing', 'business'],
		added: new Date('2023-11-23').toISOString(),
		updated: new Date('2023-11-23').toISOString(),
		url: 'https://chat.openai.com/g/g-FEPMHxDYx-doublespeak-gpt',
		image:
			'https://files.oaiusercontent.com/file-Hm9eNsZ7QJvv9cFjwiWIKZ7Q?se=2123-10-22T19%3A31%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd00a980f-d3f8-48b4-8169-7f98863ba1e2.png&sig=tFd5kd4XOjhuYTSybTkxZq1uPu5LpMl7PlOf1iC5TwI%3D'
	}
];

export const gptInfos: GPTInfo[] = gpts.map(
	({ name, author, description, tags, added, updated, id, url, image }) =>
		new GPTInfo(name, author, description, tags, added, updated, id, url, image)
);
