const gulp            = require('gulp'),
      markdownToJSON  = require('gulp-markdown-to-json'),
      marked          = require('marked')
      jsonminify      = require('gulp-jsonminify'),
      ftp             = require('vinyl-ftp');

/* Task Library */
gulp.task('deploy-kim', require('./gulp-tasks/deploy-kim')(gulp, ftp));

marked.setOptions({
  pedantic: true,
  smartypants: true
});

gulp.task('markdown', () => {
  gulp.src('./content/**/*.md')
    .pipe(markdownToJSON(marked))
    .pipe(gulp.dest('.'))
});

gulp.task('minify', function () {
  return gulp.src(['./public/_src/_data/*.json'])
        .pipe(jsonminify())
        .pipe(gulp.dest('./public/data/'));
});

/* Default Task */
gulp.task('default', ['minify', 'deploy']);
