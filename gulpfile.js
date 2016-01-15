/// <binding Clean='clean' />
"use strict";
var gulp = require("gulp");
var del = require("del");
var typeScript = require("gulp-typescript");
var project = require("./project.json");
var webroot = "./wwwroot/";

var config = {
    libBase: 'node_modules',
    lib: [
        require.resolve('bootstrap/dist/css/bootstrap.css'),
        require.resolve('systemjs/dist/system.src.js'),
        require.resolve('rxjs/bundles/Rx.js'),
        require.resolve('angular2/bundles/angular2.dev.js'),
        require.resolve('angular2/bundles/angular2-polyfills.js'),
        require.resolve('angular2/bundles/router.dev.js'),
        require.resolve('angular2/bundles/http.dev.js'),
        require.resolve('jquery/dist/jquery.js'),
        require.resolve('bootstrap/dist/js/bootstrap.js')
    ]
};

gulp.task('build.lib', function () {
    return gulp.src(config.lib, { base: config.libBase })
               .pipe(gulp.dest(webroot + 'lib'));
});

gulp.task('build', ['build.lib'], function () {

});

gulp.task('clean', function () {
    return del([webroot + 'lib']);
});

gulp.task('default', ['build']);
