const colors = require('tailwindcss/colors');

/** @type {Parameters<typeof import("tailwindcss")>[0]} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					...colors.blue,
					DEFAULT: colors.blue['600'],
					content: colors.white
				},
				secondary: {
					...colors.green,
					DEFAULT: colors.green['600'],
					content: colors.white
				}
			}
		},
		container: {
			center: true,
			padding: '1.25rem'
		}
	},

	plugins: []
};

module.exports = config;
