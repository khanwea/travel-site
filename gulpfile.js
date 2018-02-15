var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
postcssnested = require('postcss-nested'),
postImport = require('postcss-import');

gulp.task('default', function(){
    console.log("hey world");
});

gulp.task('html', function(){
    console.log("html changed");
});

gulp.task('css', function(){
   return gulp.src('./app/assets/styles/styles.css')
   .pipe(postcss([postImport, postcssnested, cssvars, autoprefixer]))
   .pipe(gulp.dest('./app/temp/styles/'));
});

gulp.task('watch', function(){
    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/**/*.css', function() {
        gulp.start('css');
    });
});
