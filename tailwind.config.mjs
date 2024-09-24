/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'fondo-destop': "url('/fondo.png')",
				'fondo-movil': "url('/fondomovil.png')",
			   
			  },
		},
	},
	plugins: [],
}
