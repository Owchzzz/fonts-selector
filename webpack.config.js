var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bzfontselector.min.js',
        library: 'bzfontselector',
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: /src/,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    stats: {
        colors: true
    },
    resolve: {
        modules: ['src','node_modules']
    },
    devServer: {
        disableHostCheck: true,
        hot: true,
        inline: true,
        progress: true,
        publicPath: "/build/",
    }
};