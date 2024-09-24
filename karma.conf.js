module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    files: [],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    port: 9876,
    singleRun: false,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromiumHeadless"], // Alterado para ChromiumHeadless
    customLaunchers: {
      ChromiumHeadlessCustom: {
        base: "ChromiumHeadless",
        flags: ["--no-sandbox", "--disable-gpu"],
      },
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
    },
    reporters: ["progress", "kjhtml"],
    browserNoActivityTimeout: 100000,
    client: {
      clearContext: false,
    },
    retryLimit: 3,
  });
};
