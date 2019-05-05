const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const CopyScriptsFolderPlugin = require('./customPlugins/CopyScriptsFolderPlugin');

module.exports = env => {
    var isProd = env.production ? true : false;

    var config = {
        context: path.resolve(__dirname, 'src'),
        mode: (isProd) ? "production" : "development",
        entry: [
            './index.js',
            './Scripts/scrollTo.js'
        ],
        output: {
            // OLD
            // filename: 'bundle.js',
            //
            // change to dynamic output for chunking
            // filename: '[name].[contenthash].js', // <-- errors when sideEffects enabled?
            filename: '[name].[hash].js',
            path: path.resolve(__dirname, 'public/assets/'),
            publicPath: "/assets/"
        },
        devtool: (!isProd) ? "inline-source-map" : false,
        devServer: {
            // contentBase: 'public',
            contentBase: path.join(__dirname, 'public'),
            hot: true,
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
                        (isProd) ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: (!isProd)
                            }
                        },
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                "outputStyle": "compressed",
                                sourceMap: (!isProd)
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
                minification: (isProd)
            }),
            new CleanWebpackPlugin(['public/assets/*.js'], {
                dry: (!isProd),
                exclude: ['scrollTo.js']
            }),
            new webpack.HotModuleReplacementPlugin(),
            // new BundleAnalyzerPlugin()
            // copy scrollTo.js into the assets dir
            new CopyScriptsFolderPlugin({}),
        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    // include: './src/Scripts/*.js',
                    cache: true,
                    parallel: true,
                    sourceMap: (!isProd), // set to true if you want JS source maps
                    uglifyOptions: {
                        output: {
                        comments: !isProd,
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
            usedExports: true,
        },
        // resolve both JavaScript and JSX files
        resolve: {
            extensions: ['.js', '.jsx']
        }
    }
    if (isProd)
    {
        config.plugins.push(new DynamicCdnWebpackPlugin({env: "production"}))
        console.log("using DynamicCdnWebpackPlugin...");
    }
    
    if(process.argv.find(v => v.includes('webpack-dev-server')))
    {
        // remove the clean webpack plugin if we're running the dev server
        // prevents cleaning a second time (why it do dat?)
        config.plugins.splice(2, 1);
    }

    return config;
};