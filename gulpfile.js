var gulp        = require('gulp');
var browserSync = require('browser-sync');
var watch       = require('gulp-watch');
var harp        = require('harp');
var shell       = require('gulp-shell');
var del         = require('del');
var bower       = require('gulp-bower');

gulp.task('clean', function() {
  return del(['www', '.DS_Store', 'public/.DS_Store']);
});

gulp.task('serve', ['bower:install'], function () {
  harp.server(__dirname, {
    port: 9000
  }, function () {
    browserSync({
      proxy: "localhost:9000",
      open: false,
      /* Hide the notification. It gets annoying */
      notify: {
        styles: ['opacity: 0', 'position: absolute']
      }
    });
    /**
     * Watch for scss changes, tell BrowserSync to refresh main.css
     */
    watch(["./public/**/*.css", "./public/**/*.sass", "./public/**/*.scss", "./public/**/*.less"], function () {
      browserSync.reload("main.css", {stream: true});
    });
    /**
     * Watch for all other changes, reload the whole page
     */
    watch(["./public/**/*.html", "./public/**/*.ejs", "./public/**/*.jade", "./public/**/*.js", "./public/**/*.json", "./public/**/*.md", "harp.json"], function () {
      browserSync.reload();
    });
  })
});

gulp.task('compile', ['bower:install'], function() {
  return harp.compile('.', function() {});
});

gulp.task('bower:install', function() {
  return bower()
});

gulp.task('deploy', ['compile'], shell.task([
  'aws s3 sync --profile y13i.com --region ap-northeast-1 --delete www/ s3://y13i.com/'
]));

gulp.task('build', ['compile']);
gulp.task('default', ['serve']);
