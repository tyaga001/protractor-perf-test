var gulp = require('gulp');
var gulpProtractor = require('gulp-angular-protractor');
var params = process.argv;
var args = process.argv.slice(3);
var paths = require('../paths.js');
var ProtractorPerf = require('protractor-perf');

// Execute e2e Tests
gulp.task('e2e-test', function(callback) {
  gulp.src(paths.tests)
    .pipe((gulpProtractor({
      configFile: 'protractor.conf.js',
      args: args
    })).on('error', function(e) {
      console.log(e);
    }).on('end', callback));
});

// Execute e2e-performance Tests
gulp.task('e2e-test-perf', function(callback) {
  gulp.src(paths.tests)
    .pipe((gulpProtractor({
      configFile: 'perf-conf.js',
      args: args
    })).on('error', function(e) {
      console.log(e);
    }).on('end', callback));
});


gulp.task('webdriver-update', gulpProtractor.webdriver_update);
gulp.task('webdriver-standalone', ['webdriver-update'], gulpProtractor.webdriver_standalone);