let gulp = require("gulp"),
	runSequence = require("run-sequence"),
	autoprefixer = require("gulp-autoprefixer"),
	// browserSync = require("browser-sync").create(),
	del = require("del"),
	gulpif = require("gulp-if"),
	notify = require("gulp-notify"),
	plumber = require("gulp-plumber"),
	sass = require("gulp-sass"),
	uglify = require("gulp-uglify"),
	merge = require('merge-stream'),
	rev = require("gulp-rev"),
	revReplace = require("gulp-rev-replace");
const config = {
	compilePath: "dist",
	tmpManifestPath: "dist/tmp"
}
// clean types(此处内部del(xxx)会报错，应该return del(xxx))
gulp.task("clean", function () {
	return del(config.compilePath);
});
// 1.compile styles add MD5 code
gulp.task("compile", ["clean"], function () {
	var js = gulp.src("public/dist/js/*.js", {base: "public/dist"})
		.pipe(uglify());
	/* var css = gulp.src("src/public/styles/*.scss", {base: "src/public"})
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sass({outputStyle: "expanded"}))
		.pipe(autoprefixer({
			browsers: ["last 2 versions", "Firefox <= 20"],
			cascade: false
		})); */
	var css = gulp.src("public/stylesheets/*.css", {base: "public"});
	return merge(js, css)
		.pipe(rev())
		.pipe(gulp.dest(config.compilePath + "/public"))
		.pipe(rev.manifest())
		.pipe(gulp.dest(config.compilePath + "/tmp"));
});
// 2.replace MD5
gulp.task("replace", ["compile"], function () {
	gulp.src("views/**/*.html")
		.pipe(revReplace({manifest: gulp.src(config.compilePath + "/tmp/rev-manifest.json")}))
		.pipe(gulp.dest(config.compilePath + "/views"));
});
// 3.cp static files
gulp.task("cpBin", function() {
	return gulp.src(["bin/**"])
		.pipe(gulp.dest(config.compilePath + "/bin"));
});
gulp.task("cpBiz", function() {
	return gulp.src(["biz/**"])
		.pipe(gulp.dest(config.compilePath + "/biz"));
});
gulp.task("cpRoutes", function() {
	return gulp.src(["routes/**"])
		.pipe(gulp.dest(config.compilePath + "/routes"));
});
gulp.task("cpService", function() {
	return gulp.src(["service/**"])
		.pipe(gulp.dest(config.compilePath + "/service"));
});
gulp.task("cpPublic", function() {
	return gulp.src([
		"public/images/**",
		"!public/dist/**",
		"!public/js/**",
		"!public/styles/**"
	])
		.pipe(gulp.dest(config.compilePath + "/public/images"))
});
gulp.task("cpOther", function() {
	return gulp.src([
		".babelrc",
		"package.json",
		"app.js",
		"routerMap.js",
		"!views/**",
	])
		.pipe(gulp.dest(config.compilePath));
});
gulp.task("cpAll", ["cpBin", "cpBiz", "cpRoutes", "cpPublic", "cpService", "cpOther"])
// 4.delete tmp folder
gulp.task("cleanTmp", function () {
	return del([config.tmpManifestPath]);
});
// 5.end commander
gulp.task("build", function (done) {
	runSequence(["clean"], ["compile"], ["replace"], ["cleanTmp"], ["cpAll"], done);
});
