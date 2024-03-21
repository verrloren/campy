import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { 
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
			colors: {
				darkBlue: '#151A1D',
				evenDarkGray: '#1c1c1c',
				evenDarkGrayNav: '#101010',
				light: '#F3F4F6',
				gray: '#C0C2C5',
				accent: '#32E9B9',
				darkGray: '#777',
				darkBorder: '#2a2a2a',
				red: '#F01616',

	
			},
    },
  },
  plugins: [],
};
export default config;
