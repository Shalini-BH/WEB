/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#111827',
                secondary: '#34d399',
                accent: '#2563eb',
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'emerald-glow': '0 0 15px -3px rgba(52, 211, 153, 0.5)',
            }
        },
    },
    plugins: [],
}
