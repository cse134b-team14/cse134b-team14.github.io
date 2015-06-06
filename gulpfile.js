var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

var target  = "js";
var sources = [
    "js/jquery-1.11.2.min.js", 
    "Chart.js", 
    "velocity.min.js", 
    "parse.js", 
    "part.js", 
    "crud.js", 
    "data.js", 
    "helpers.js", 
    "popup.js"
];

gulp.task("default", function() {
    return gulp.src(sources)
        .pipe(uglify())
        .pipe(concat("combine.js"))
        .pipe(gulp.dest(target));
});
