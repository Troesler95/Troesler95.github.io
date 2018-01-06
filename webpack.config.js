var WebPack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets'),
        publicPath: "assets"
    },
    devtool: 'source-map',
    module: {
        rules: [
            // use babel-loader on .js and .jsx files
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                }
            },
            // include css files in bundles
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader'
                ]
            },
            // include scss files in bundles
            {
                test: /\.scss$/,
                use: [
                    // creates style nodes from JS strings
                    {
                        loader: "style-loader"
                    },
                    // translates CSS into CommonJS
                    {
                        loader: "css-loader"
                    },
                    // compiles Sass to CSS
                    {
                        loader: "sass-loader"
                    },
                    {
                        "loader" : "autoprefixer-loader"
                    }
                ]
            },
            // include SVG images
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'react-svg-loader',
                        options: {
                            jsx: true
                        }
                    }
                ]
            }
        ]
    },
    // resolve file both JavaScript and JSX files
    resolve: {
        extensions: ['.js', '.jsx']
    }
};