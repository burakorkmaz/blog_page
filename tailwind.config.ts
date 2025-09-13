import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#121212", // charcoal black
                textPrimary: "#E0E0E0", // light gray
                textSecondary: "#B0B0B0", // medium gray
                border: "#444444", // dark gray
                accent: "#888888", // soft gray
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],   // Inter for body
                serif: ["var(--font-playfair)", "serif"],    // Playfair for titles
            }
        },
    },
    plugins: [typography],
};

export default config;
