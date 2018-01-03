var gulp= require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var paths = {
  html:['index.html'],
  css:['styles/style.css']
};
gulp.task('html', function(){
  gulp.src(paths.html)
  .pipe(reload({stream:true}));
});
gulp.task('css', function(){
   gulp.src(paths.css)
    .pipe(reload({stream:true}));
});
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: false
  });
});
gulp.task('watcher',function(){
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.html, ['html']);
});
gulp.task('default', ['watcher', 'browserSync']);
