var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var OUTPUT_PATH = path.resolve(ROOT_PATH,"app/output");
var JS_PATH = path.resolve(ROOT_PATH,"js");
var TEST_PATH = path.resolve(ROOT_PATH,"test");
var STYLE_PATH = path.resolve(ROOT_PATH,"styles");
var COMPONENTS_PATH = path.resolve(JS_PATH,"components");;

var webpack = require('webpack');

module.exports = {
    entry: {
        simple: path.resolve(JS_PATH, 'simple.js'),
/*
        antSortTable: path.resolve(COMPONENTS_PATH, 'AntSortTable.js'),
*/
    },
    output: {
        path: OUTPUT_PATH,
        filename: '[name].js',
        publicPath: '/output/'
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: "./app",
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: [/node_modules/,/\.test.js$/],
            loader: 'isparta-instrumenter'
        }],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: [JS_PATH,TEST_PATH],
               /* query: {
                    presets: ['react', 'es2015', 'stage-0']
                }*/
            },
            /*{
                test: /\.jsx?$/,
                loader: 'babel',
                include: TEST_PATH,
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },*/
            {
                test: /\.(scss|css)$/,
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
                include: STYLE_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            },
            { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=[name].[ext]' },
            { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=[name].[ext]' },
            { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=[name].[ext]' },
            { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=[name].[ext]' },
            { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]' },

            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /sinon\.js$/,
                loader: "imports?define=>false"
            },
        ]

    },

    externals: {
        'cheerio': 'window',
        'react/addons': true, // important!!
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    plugins: [
        /*new webpack.DefinePlugin({
        'process.env.NODE_ENV': "development",
        })*/
    ]
};
