/* gulpfile.js */

/* Plugins */
var gulp        = require('gulp'),
    jsonminify  = require('gulp-jsonminify'),
    ftp         = require('vinyl-ftp');

/* Task Library */
gulp.task('deploy', require('./gulp-tasks/deploy')(gulp, ftp));
gulp.task('deploy-kim', require('./gulp-tasks/deploy-kim')(gulp, ftp));

gulp.task('minify', function () {
  return gulp.src(['./public/_src/_data/*.json'])
        .pipe(jsonminify())
        .pipe(gulp.dest('./public/data/'));
});

/* Default Task */
gulp.task('default', ['minify', 'deploy']);
