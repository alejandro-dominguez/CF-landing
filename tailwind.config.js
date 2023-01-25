/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
		extend: {
			fontFamily: {
				RobotoSlab: ['Roboto Slab', 'sans-serif'],
				NotoSans: ['Noto Sans', 'sans-serif']
			}
		}
    },
    plugins: [],
}
