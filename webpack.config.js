var webpack = require('webpack');
var path = require('path');
var NODE_ENV = "development";

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets/'),
        publicPath: "/PersonalSite/public/assets/",
    },
    devtool: (NODE_ENV === "development") ? "inline-source-map" : false,
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
            //to support @font-face rule and url() support
            {
                test: /\.(pdf|jpe?g|png|gif)$/i,
                loader: "url-loader",
                options: {
                    limit: 2*1024, // limit to 2kB
                    name: '[path][name].[ext]',
                    fallback: "file-loader"
                }
            },
            // optimize images before being passed to the file loader
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            optipng: {
                                optimizationLevel: 7
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 8
                            },
                            mozjpeg: {
                                progressive: true,
                                quality: 60,
                                bypassOnDebug: false
                            }
                        }
                    }
                ],
                enforce: 'pre'
            },
            // include css files in bundles
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    //'autoprefixer-loader' <= no Webpack 4 support
                ]
            },
            // include scss files in bundles
            {
                test: /\.scss$/,
                use: [
                    // creates style nodes from JS strings
                    "style-loader",
                    // translates CSS into CommonJS
                    "css-loader",
                    // compiles Sass to CSS
                    "sass-loader",
                    //"autoprefixer-loader" <= no Webpack 4 support
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
    mode: NODE_ENV,
    // resolve file both JavaScript and JSX files
    resolve: {
        extensions: ['.js', '.jsx']
    }
};