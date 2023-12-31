/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
            },
            colors: {
                'midnightBlue':        '#0C1021',
                'midnightWhite':       '#E8F0FF',
                'midnightGray':        '#949BA8',
                'midnightGrayDark':    '#5d6472',
                'midnightOrange':      '#e27309',
                'midnightDarkOrange':  '#c56408',
                'midnightOrangeBlack': '#3e2a17',
                'vueGreen':            '#41b883',
            },
            screens: {
                'sm': '640px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1480px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1736px',
                // => @media (min-width: 1536px) { ... }
            },
            keyframes: {
                gelatine: {
                    '0%': { transform: 'scale(1, 1)' },
                    '25%': { transform: 'scale(0.9, 1.4)' },
                    '50%': { transform: 'scale(1.1, 0.85)' },
                    '75%': { transform: 'scale(0.95, 1)' },
                }
            },
            animation: {
                gelatine: 'gelatine 0.5s',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

