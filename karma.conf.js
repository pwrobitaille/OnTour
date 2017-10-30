// Karma configuration
// Generated on Tue Oct 17 2017 09:30:31 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'app/javascript/react/test/testHelper.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'app/javascript/react/test/testHelper.js': ['webpack']
    },
    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity,
    webpack: {
      module: {
        loaders: [
          {
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      },
      externals: {
        cheerio: 'window',
        'react/addons': 'react',
        'react/lib/ExecutionEnvironment': 'react',
        'react/lib/ReactContext': 'react',
        'react-addons-test-utils': 'react-dom',
      }
    }
  })
}
