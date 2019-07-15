var gulp = require("gulp");
var ts = require("gulp-typescript");
gulp.task("babel", function() {
  //gulp babel 입력시 실행
  return gulp
    .src("src/**/*.ts")
    .pipe(
      ts({
        noImplicitAny: false // Warn on expressions and declarations with an implied 'any' type.
      })
    )
    .pipe(gulp.dest("build")); //build에 저장
});
