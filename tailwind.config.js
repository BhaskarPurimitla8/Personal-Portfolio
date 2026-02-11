/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#06b6d4',
                    dark: '#0891b2',
                    light: '#22d3ee',
                },
                secondary: {
                    DEFAULT: '#a855f7',
                    dark: '#9333ea',
                    light: '#c084fc',
                },
                accent: {
                    DEFAULT: '#ec4899',
                    dark: '#db2777',
                    light: '#f472b6',
                },
                background: {
                    start: '#0f172a',
                    end: '#1e293b',
                },
            },
            animation: {
                'fadeInUp': 'fadeInUp 0.6s ease-out',
                'slideIn': 'slideIn 0.5s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)' },
                    '100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.5)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
