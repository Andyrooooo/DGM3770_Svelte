import { join } from 'path'
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			width: {
				'vw-40': '40vw',
				'vw-30': '30vw',
			},
			spacing: {
				'vh-30': '30vh',
				'svw-30': '30vw'
			}
		},
	},
	plugins: [...skeleton()],
}
