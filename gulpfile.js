var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    pug = require('gulp-pug'),
    templateCache = require('gulp-angular-templatecache'),
    sass = require('gulp-sass');

gulp.task('app-templates', () =>
    gulp.src('src/app/**/*.pug')
        .pipe(pug())
        .pipe(templateCache({
            module: 'ng-loading-wrapper.directives',
            standalone: false
        }))
        .pipe(gulp.dest('dist/ng-loading-wrapper.templates.js'))
);

gulp.task('app-js', () => 
    gulp.src('src/app/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/ng-loading-wrapper.js'))
);

gulp.task('app-scss', () =>
    gulp.src('src/app/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/ng-loading-wrapper.css'))
);

gulp.task('build', ['app-js', 'app-templates', 'app-scss'], () => {});
gulp.task('minify', ['build'], () => {
    gulp.src(['dist/ng-loading-wrapper.js', 'dist/ng-loading-wrapper.templates.js'])
        .pipe(uglify())
        .pipe(gulp.dest('ng-loading-wrapper.min.js'));
    
    gulp.src('dist/ng-loading-wrapper.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('ng-loading-wrapper.min.css'));
});