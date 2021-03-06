var gulp = require("gulp");
var uglify = require("gulp-uglify");
var minify = require("gulp-minify-css");
var concat = require("gulp-concat");

var target  = "prod/";
var js = [
    "js/index.js",
    "js/main.js",
    "js/edit.js",
    "js/metal-main.js",
    "js/view.js",
    "js/signup.js"
];
var combined = [
    "js/jquery-1.11.2.min.js", 
    "js/parse-1.4.2.min.js",
    "js/.11.2.min.js", 
    "js/Chart.js", 
    "js/velocity.min.js", 
    "js/parse.js", 
    "js/part.js", 
    "js/crud.js", 
    "js/data.js", 
    "js/helpers.js", 
    "js/popup.js",
    "js/settings.js",
    "jscolor/jscolor.js"
];

gulp.task("default", function() {
    gulp.src(combined)
        .pipe(concat("combine.js"))
        .pipe(gulp.dest("js/"));
});

gulp.task("prod", function() {
    gulp.src(combined)
        .pipe(uglify())
        .pipe(concat("combine.js"))
        .pipe(gulp.dest(target + "js/"));
    gulp.src("*.html")
        .pipe(gulp.dest(target));
    gulp.src(js)
        .pipe(gulp.dest(target + "js/"));
    gulp.src("style/*.css")
        .pipe(minify())
        .pipe(gulp.dest(target + "style/"));
    gulp.src("assets/*")
        .pipe(gulp.dest(target + "assets/"));
    gulp.src("fonts/*")
        .pipe(gulp.dest(target + "fonts/"));
});
