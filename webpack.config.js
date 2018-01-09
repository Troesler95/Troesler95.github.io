var WebPack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets/'),
        publicPath: "assets/"
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
            //to support eg. background-image property
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader:"file-loader",
                query:{
                    name:'[name].[ext]',
                    outputPath:'media/'
                    //the images will be emmited to public/assets/images/ folder
                    //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png);
                }
            },
            //to support @font-face rule
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader",
                query: {
                    limit: '10000',
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                    //the fonts will be emmited to public/assets/fonts/ folder
                    //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }
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