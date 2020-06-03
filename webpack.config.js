const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = env => {
    return {
        context: path.resolve(__dirname, 'src'),
        mode: (env.production) ? "production" : "development",
        entry: [
            "./index.js"
        ],
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, "public/assets/"),
            publicPath: "/assets/"
        },
        devtool: (env.development) ? "inline-source-map" : false,
        devServer: {
            index: 'index.html',
            contentBase: 'public',
            compress: true,
            writeToDisk: true
        },
        module: {
            rules: [
                // use babel-loader on .js and .jsx files
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader?cacheDirectory=true'
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
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        env.production ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2
                            }
                        },                        
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                sassOptions: {
                                    outputStyle: 'compressed'
                                }
                            }
                        },
                    ]
                },
                // include SVG images
                // OLD
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
                // {
                //     test: /\.svg$/,
                //     use: [ '@svgr/webpack' ]
                // }
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
            new CleanWebpackPlugin({verbose: true}),
        ],
        optimization: {
            splitChunks: {
                chunks: 'all',
            }
        },
        // resolve both JavaScript and JSX files
        resolve: {
            extensions: ['.js', '.jsx']
        }
    }
}