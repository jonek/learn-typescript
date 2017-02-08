var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');
var tslint = require('gulp-tslint');

gulp.task('compile', function() {
    return tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .js
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../src' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('tslint', () => {
    return gulp.src(['**/*.ts', '!**/*.d.ts', '!node_modules/**'])
        .pipe(tslint())
        .pipe(tslint.report());
});

gulp.task('watch', ['compile'], function() {
    gulp.watch('src/*.ts', ['compile']);
});