var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set(
        {
            browsers: ['Chrome'],
            singleRun: true,
            frameworks: ['mocha','chai'],
            files: [
                'test/**/*.test.js',

            ],
            /*plugins: [
                'karma-browserify',
                'karma-chrome-launcher',
                'karma-jasmine',
                'karma-coverage',
                'isparta-instrumenter-loader',
                'babel-loader',
                'karma-webpack'],*/
            preprocessors: {
                'test/**/*.test.js': ['webpack','sourcemap'],
                'js/**/*.js': ['webpack','sourcemap','coverage']
            },

            coverageReporter: {
                reporters:[
                    {
                        type: 'text-summary'
                    },
                    { type: 'html',
                        dir: 'coverage/'
                    }]

            },

            reporters: ['mocha','coverage'],
            client: {
                mocha: {
                    timeout: '5000'
                }
            },

            mochaReporter: {
                colors: {
                    success: 'blue',
                    info: 'green',
                    warning: 'cyan',
                    error: 'red'
                }
            },

            webpack: webpackConfig,
            webpackServer: {
                noInfo: true
            },

            plugins: [
                'karma-chrome-launcher',
                'karma-chai',
                'karma-mocha',
                'karma-webpack',
                'karma-sourcemap-loader',
                'karma-coverage',
                'karma-mocha-reporter'
            ]
        }
    );
};



