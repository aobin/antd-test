var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var OUTPUT_PATH = path.resolve(ROOT_PATH,"output");
var JS_PATH = path.resolve(ROOT_PATH,"js");
var STYLE_PATH = path.resolve(ROOT_PATH,"styles");


module.exports = {
    entry: {
        simple: path.resolve(JS_PATH, 'simple.js'),
    },
    output: {
        path: OUTPUT_PATH,
        filename: '[name].js'
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    module: {
        preLoaders: [],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: JS_PATH,
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
                include: STYLE_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            }
        ]
    },

    plugins: []
};
