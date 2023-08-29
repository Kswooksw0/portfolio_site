/** @type {import('tailwindcss').Config} */
module.exports = {
    mode:"jit",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
            colors: {
                col0:"#3330E4",
                col1:"#F637EC",
                col2:"#FBB454",
                col3:"#FAEA48",
                col4:"#900C3F",
                col5:"#C70039",
                bgCol:"#100D0E",
                textCol:"#707076",
                textColHighlight:"#F3F4F6",
            },
            fontFamily: {
                primary: ['League Spartan']
            }
        },
	},
	plugins: [],
};
