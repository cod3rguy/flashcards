import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';

gulp.task('makeStyle',() => {
    return gulp.src('./styles/less/style.less')
    .pipe(plumber())
    .pipe(less({
        compress: true
    }))
    .pipe(gulp.dest('./styles/css/'));
});

gulp.task('makeScript',() => {
    return gulp.src('./less/style.less')
    .pipe(plumber())
    .pipe(less({
        compress: true
    }))
    .pipe(gulp.dest('./css/'));
});


gulp.task('default', ['makeStyle']);