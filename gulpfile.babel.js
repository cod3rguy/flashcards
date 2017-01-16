import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import browserify from 'browserify';

gulp.task('makeStyle',() => {
    return gulp.src('./styles/src/style.less')
    .pipe(plumber())
    .pipe(less({
        compress: true
    }))
    .pipe(gulp.dest('./styles/'));
});

gulp.task('makeScript',() => {
    return gulp.src('./scripts/src/app.js')
    .pipe(plumber())
    .pipe(browserify()).transform("babelify", {presets: ["es2015", "react"]}).bundle()
    .pipe(gulp.dest('./scripts/'));
});

gulp.task('default', ['makeStyle','makeScript']);