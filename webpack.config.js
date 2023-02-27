const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: '[name].js',
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: '3000',
        open: true,
        hot: true,
        compress: true, // gzcompression
        historyApiFallback: true
    },
    devtool: 'source-map',
    module:{
        rules: [
            {
                test: /(\.scss|\.css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/env','@babel/preset-react'] },
                }
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|otf|svg|jpeg)$/,
                type: 'asset/resource',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    //   optimization: {
    //     // https://bundlers.tooling.report/code-splitting/multi-entry/
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //       // Referred docs - https://web.dev/granular-chunking-nextjs/
    //       chunks: 'all',
    //       minSize: 30000,
    //       maxAsyncRequests: 30,
    //       maxInitialRequests: 25,
    //       cacheGroups: {
    //         vendor: {
    //           name: 'vendors~index',
    //           test: /[\\/]node_modules[\\/]/,
    //           chunks: 'all',
    //           priority: -10,
    //         },
    //       },
    //     },
    //     minimize: process.env.NODE_ENV !== 'development',
    //     minimizer: [
    //       new TerserPlugin({
    //         ...terserOptions
    //       }),
    //     ],
    //   },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Html Webpack plugin',
            filename: 'index.html',
            template: 'src/template.html'
        }),
        // new BundleAnalyzerPlugin(),
    ]
}