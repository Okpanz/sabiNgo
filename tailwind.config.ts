import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--Montserrat)"],
        heading: ["var(--Playfair-Display)"],
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/Homepage.png')",
        "donate-pattern": "url('/images/AboutUs.png')",
      },
      colors: {
        primary: "#3A40D8",
        secondry: "#EEEAFC",
        sabigray: "#5A5A5A",
      },
      filter: {
        'blue-filter': 'filter(contrast(150%) drop-shadow(0px 0px 5px #040BF9))',
      },
    },
  },
  plugins: [],
};
export default config;
