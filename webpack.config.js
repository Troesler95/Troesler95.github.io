var webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var NODE_ENV = "development";

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets/'),
        publicPath: "/assets/"
    },
    devtool: (NODE_ENV === "development") ? "inline-source-map" : false,
    module: {
        rules: [
            // use babel-loader on .js and .jsx files
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader?cacheDirectory=true',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
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
                   // 'file-loader', <-- COME BACK TO THIS ANOTHER TIME
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
            /*{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader'],
                    fallback: 'style-loader'
                })
                // use: [
                //     'style-loader',
                //     'css-loader',
                //     //'autoprefixer-loader' <= no Webpack 4 support
                // ]
            },*/
            // Extract sass into external file
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        // creates style nodes from JS strings
                        // "style-loader",
                        // translates CSS into CommonJS
                        "css-loader",
                        // compiles Sass to CSS
                        {
                            loader: "sass-loader",
                            options: {
                                "outputStyle": "compressed"
                            }
                        }
                    ]
                })
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
    plugins: [
        // CURRENTLY DOES NOTHING
        // new UglifyJsPlugin({
        //     test: /\.jsx?$/,
        //     exclude: /(node_modules)/,
        //     cache: true,
        //     sourceMap: (NODE_ENV === "development")
        // }),
        new ExtractTextPlugin("styles.css") // <-- name of output file
    ],
    mode: NODE_ENV,
    // resolve both JavaScript and JSX files
    resolve: {
        extensions: ['.js', '.jsx']
    }
};