const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    return {
        context: path.resolve(__dirname, 'src'),
        mode: (env.production) ? "production" : "development",
        entry: [
            './index.js',
            './Scripts/scrollTo.js'
        ],
        output: {
            // OLD
            // filename: 'bundle.js',
            //
            // change to dynamic output for chunking
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'public/assets/'),
            publicPath: "/assets/"
        },
        devtool: (env.development) ? "inline-source-map" : false,
        devServer: {
            contentBase: 'public'
        },
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
                // Extract sass into external file
                //NEW
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        env.production ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                "outputStyle": "compressed"
                            }
                        },
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
        plugins: [
            // TODO: Come back to this once chunks are working...
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                // filename: env.development ? '[name].css' : '[name].[hash].css',
                filename: '[name].css',
                // chunkFilename: env.development ? '[id].css' : '[id].[hash].css',
                chunkFilename: '[id].css'
            }),
            new HtmlWebpackPlugin({
                filename: "../index.html",
                template: './index.html',
                minification: (env.development !== null)
            }),
        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true, // set to true if you want JS source maps
                    uglifyOptions: {
                        output: {
                        comments: false,
                        },
                    },
                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorPluginOptions: {
                        preset: ['default', { discardComments: { removeAll: true } }],
                    }
                })
            ],
            splitChunks: {
                chunks: 'all',
            },
        },
        // resolve both JavaScript and JSX files
        resolve: {
            extensions: ['.js', '.jsx']
        }
    }
};