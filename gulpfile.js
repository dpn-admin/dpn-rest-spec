'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: ['node_modules/swagger-ui/dist', 'dist/'],
    livereload: true
  });
});

gulp.task('serve', ['connect']);
