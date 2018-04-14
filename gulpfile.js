var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    pug = require('gulp-pug'),
    templateCache = require('gulp-angular-templatecache'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    sass = require('gulp-sass'),
    util = require('gulp-util');

gulp.task('app-templates', () =>
    gulp.src('src/app/**/*.pug')
        .pipe(pug())
        .pipe(templateCache({
            module: 'ng-loading-wrapper.directives',
            standalone: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('app-js', () => 
    gulp.src('src/app/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
);

gulp.task('app-scss', () =>
    gulp.src('src/app/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'))
);

gulp.task('build', ['app-js', 'app-templates', 'app-scss'], () => {});
gulp.task('minify', ['build'], () => {
    gulp.src('dist/**/*.js')
        .pipe(concat('ng-loading-wrapper.min.js'))
        .pipe(uglify())
        .on('error', function (err) { util.log(util.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('./'));
    
    gulp.src('dist/**/*.css')
        .pipe(concatCss('ng-loading-wrapper.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./'));
});