/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries'),
	],
	daisyui: {
		styled: true,
		themes: ['black', 'lofi'],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: 'ronin',
		darkTheme: 'dark'
	}
};
