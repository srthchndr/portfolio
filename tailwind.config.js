/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    plugins: [
        plugin(({
            addComponents, addUtilities, config, e
        }) => {})
    ],
    theme: {
        colors: {
            black: {
                default: '#000000',
                primary: '#1a1a1a',
                secondary: '#333333'
            },
            darkbg: '#011610',
            grey: {
                default: '#808080',
                primary: '#999999',
                secondary: '#666666',
                darker: '#4d4d4d',
                lighter: '#b3b3b3'
            },
            lightbg: '#e6fcf5',
            navy: {
                default: '#063170',
                primary: '#052c65',
                secondary: '#05275a',
                light: '#e6eaf1',
                dark: '#01050b'
            },
            neonblue: {
                default: '#02B3FC',
                primary: '#02a1e3',
                secondary: '#028fca',
                light: '#e6f7ff',
                dark: '#001219'
            },
            neongreen: {
                default: '#06E19E',
                primary: '#05cb8e',
                secondary: '#05b47e',
                light: '#e6fcf5',
                dark: '#02432f'
            },
            neonyellow: {
                default: '#F8Ce27',
                primary: '#dfb923',
                secondary: '#c6a51f',
                light: '#fefae9',
                dark: '#191504'
            },
            white: {
                default: '#ffffff',
                primary: '#e6e6e6',
                secondary: '#cccccc'
            }
        },
        extend: {}
    }
};
