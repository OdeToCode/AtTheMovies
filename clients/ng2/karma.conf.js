module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],
    files: [
        "node_modules/reflect-metadata/reflect.js",
        "node_modules/zone.js/dist/zone.js",
        "bundles/test.js"
    ],

    exclude: [
    ],

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
