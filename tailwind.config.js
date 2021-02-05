module.exports = {
    purge: ['./pages/**/*.{ts,tsx,js,jsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                '4/5vmin': '80vmin',
            },
            height: {
                '4/5vmin': '80vmin',
            },
        },
    },
    variants: {
        extend: {
            scale: ['group-hover'],
        },
    },
    plugins: [],
};
