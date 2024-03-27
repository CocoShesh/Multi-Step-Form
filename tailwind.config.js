/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ubuntu-regular": ["Ubuntu", "sans-serif"],
        "ubuntu-medium": ["Ubuntu-Medium", "sans-serif"],
        "ubuntu-bold": ["Ubuntu-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
