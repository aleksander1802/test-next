import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		extend: {
			colors: {
				primary: '#000000',
				light: '#ffffff',
				secondary: '#393A47',
				accent: '#4835D4',
			},

			backgroundImage: {
				logo: 'url("/bg.png")',
			},
		},
	},
	plugins: [],
};
export default config;
