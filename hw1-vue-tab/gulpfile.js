var gulp = require('gulp');
var less = require('gulp-less');

// change less to css
gulp.task('less',function(){
	return gulp.src('./public/less/main.less')
	.pipe(less())
	.pipe(gulp.dest('./public/stylesheets'));
})

// Synchronize css file
gulp.task('watch',function(){
	gulp.watch('./public/less/main.less',[less])
}) 