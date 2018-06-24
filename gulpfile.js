var gulp = require('gulp');
var less = require('gulp-less');

// change less to css
gulp.task('less',function(){
	gulp.src('./**/*.less')
	.pipe(less())
	.pipe(gulp.dest('./**/styleshes'))
})

// Synchronize css file
gulp.task('watch',function(){
	gulp.watch('./**/*.less',[less])
	console.log('success')
}) 