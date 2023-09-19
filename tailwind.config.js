/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        pill: "#ccc",
        taskColor: "#fecc91",
      },
    },
  },
  plugins: [],
};
