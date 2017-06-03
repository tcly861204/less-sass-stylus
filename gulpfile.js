var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass',function(){
	return sass('style/main.scss')
	.on('error',function(err){
		console.log("Error",err.message);
	})
	.pipe(gulp.dest('css/'));
});

gulp.task('watch',function(){
	gulp.watch('style/*.scss',['sass']);
});


gulp.task('default',['watch']);
