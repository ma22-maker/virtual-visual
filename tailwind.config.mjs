/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontWeight: {
      thin: '100',
      extralight: '50',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      fontFamily: {
        montrealbook: ["Montrealbook", "sans-serif"],
        montrealthin: ["Montrealthin", "sans-serif"],
        montrealmed: ["Montrealmed", "sans-serif"],
        montrealbold: ["Montrealbold", "sans-serif"],
        eikothin: ["Eikothin"],
        eikomed: ["Eikomed"],
        eikobold: ["Eikobold"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
