import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import browserify from 'browserify';
//import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';
import exorcist from 'exorcist';
import ifElse from 'gulp-if-else';

process.env.NODE_ENV = "development"; //options: [development, production]

let errorHandler = function(msgSource) {
    return function({message, plugin = msgSource}){
        console.error( `\n${plugin}: ${message}\n`);
        this.emit('end');
    };
};

gulp.task('makeStyle',() => {
    return gulp.src('./styles/src/style.less')
    .pipe(plumber(errorHandler('makeStyle')))
    .pipe(less({
        compress: true
    }))
    .pipe(gulp.dest('./styles/'));
});

gulp.task('makeScript',() => {
    return browserify('./scripts/src/app.jsx',{ debug: true })
    .transform('babelify')
    .bundle()
    .on('error', errorHandler('browserify'))
    .pipe(exorcist('./scripts/app.js.map'))
    .pipe(source('app.js'))
    .pipe(plumber(errorHandler('makeScript')))
    .pipe(buffer())
    .pipe(ifElse(process.env.NODE_ENV === 'production', uglify))
    .pipe(gulp.dest('./scripts/'));
});

gulp.task('watch', ['makeStyle','makeScript'], () => {
    gulp.watch(['./styles/src/*','./styles/src/includes/*'], ['makeStyle']);
    gulp.watch(['./scripts/src/*','./scripts/src/includes/*','./scripts/src/includes/*/*'], ['makeScript']);
});

gulp.task('default', ['watch']);