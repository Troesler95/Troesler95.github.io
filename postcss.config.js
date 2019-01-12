module.exports = ({ file, options, env }) => (
    {
        parser: file.extname === '.sss' ? 'sugarss' : false, // Handles `.css` && '.sss' files dynamically
        syntax: 'postcss-scss',
        plugins: {
            // output compat code
            'postcss-preset-env': {},
            'cssnano': (env === "production") ? {} : false
        }
    }
);