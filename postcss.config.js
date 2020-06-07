module.exports = ({ file, options, env }) => (
    {
        parser: file.extname === '.sss' ? 'sugarss' : false, // Handles `.css` && '.sss' files dynamically
        syntax: 'postcss-scss',
        plugins: {
            'precss': {},
            'autoprefixer': {},
            'cssnano': (env === "production") ? {} : false
        }
    }
);