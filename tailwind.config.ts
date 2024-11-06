import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            maxWidth: {
                custom: "80rem", // Custom max-width of 80rem (1280px)
            },
            container: {
                center: true,
                padding: "2rem", // Optional: Add padding for smaller screens
                screens: {
                    lg: "80rem", // Custom container width for large screens
                },
            },
        },
    },
    plugins: [],
};
export default config;
