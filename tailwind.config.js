/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,ts,svelte}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				darker: {
					primary: '#0086ff',
					secondary: '#fee75d',
					accent: '#fcfce7',
					neutral: '#010101',
					'base-100': '#040b19',
					info: '#00b3ff',
					success: '#00bb6a',
					warning: '#ffa200',
					error: '#b90041'
				}
			},
			{
				lighter: {
					primary: '#fee75d',
					secondary: '#0086ff',
					neutral: '#ffffff',
					'base-100': '#E2FDFF',
					accent: '#040b19',
					info: '#00b3ff',
					success: '#00bb6a',
					warning: '#ffa200',
					error: '#b90041'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
