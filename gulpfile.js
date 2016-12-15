var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var startLiveReloadServer = function(){
  browserSync.init({
    open: false,
    server: {
      baseDir: './'
    }
  });
  console.log("> started live reload server");
};

var changeDetected = function(file){
  console.log('> change detected',file);
  browserSync.reload();
};

gulp.task('serve',function(){
  startLiveReloadServer();

  gulp.watch('./test.html',changeDetected);
  gulp.watch('./src/allUpload.js',changeDetected);
});

gulp.task('default', ['serve']);