const gulp = require('gulp');
const sass = require('gulp-sass');

// compile sass function
function compileSass() {
    return gulp.src('src/scss/**/*.scss') // path to our SCSS files
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css')); // Output directory for CSS files
}

// watch for changes in .scss files
function watchSass() {
    gulp.watch('src/scss/**/*.scss', compileSass);  // watch scss files for changes and when changes happen compile scss files.
}

gulp.task('sass', compileSass);  // creates a gulp task called sass to run the task type: gulp sass
gulp.task('watch', watchSass); // creates a gulp task called watch to run the task type: gulp watch