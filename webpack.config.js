var webpack = require('webpack');
var path = require('path');
var NODE_ENV = JSON.stringify("development");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets/'),
        publicPath: "assets/",
    },
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
                test: /\.(pdf|jpe?g|png|gif)$/i,
                loader:"file-loader",
                query:{
                    name:'[path][name].[ext]'
                }
            },
            //to support @font-face rule
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader",
                query: {
                    limit: 10*1024, // limit to 10kB
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                    //the fonts will be emmited to public/assets/fonts/ folder
                    //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }
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
                    'autoprefixer-loader'
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
                    "autoprefixer-loader"
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
        new webpack.DefinePlugin({ // <-- key to reducing React's size
            'process.env': {
                'NODE_ENV': NODE_ENV
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            // only use source map if in development environment
            sourceMap: (NODE_ENV === JSON.stringify("development"))
        }), //minify everything
        new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks
    ],
    // resolve file both JavaScript and JSX files
    resolve: {
        extensions: ['.js', '.jsx']
    }
};