var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set(
        {
            browsers: ['PhantomJS' /*'Chrome'*/],
            /*singleRun: true,*/
            frameworks: ['jasmine'],
            files: [
                'test/**/*.test.js',
                'node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
            ],
            preprocessors: {
                'test/**/*.test.js': ['webpack','sourcemap'],
                'js/**/*.js': ['webpack','sourcemap','coverage']
            },

            babelPreprocessor: {
                options: {
                    presets: ['airbnb'],
                },
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

            reporters: ['spec','coverage'],
            port: 9876,
            colors: true,
            logLevel: config.LOG_INFO,
            autoWatch: true,
            singleRun: false,
            /*client: {
                mocha: {
                    timeout: '5000'
                }
            },*/

            /*mochaReporter: {
                colors: {
                    success: 'blue',
                    info: 'green',
                    warning: 'cyan',
                    error: 'red'
                }
            },*/

            webpack: webpackConfig,
            webpackServer: {
                noInfo: true
            },

            plugins: [
                'karma-chrome-launcher',
                /*'karma-chai',
                'karma-mocha',*/
                'karma-webpack',
                'karma-sourcemap-loader',
                'karma-coverage',
                /*'karma-mocha-reporter',
                'karma-sinon',*/
                'karma-jasmine',
                'karma-spec-reporter',
                'karma-phantomjs-launcher'
            ]
        }
    );
};



