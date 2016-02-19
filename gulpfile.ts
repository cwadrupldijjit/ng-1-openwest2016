/// <reference path="typings/main.d.ts" />

'use strict';

let gulp = require('gulp');
let tsc = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');
let watch = require('gulp-watch');
let uglify = require('gulp-uglify');

var pathToPublicTs = 'ng2-public/**/*.ts';
var pathToServerTs = 'server/**/*.ts';
var typescriptOptions = {
	target: 'es5',
	moduleResolution: 'node',
	removeComments: false,
	noImplicitAny: false
};

function compilePublicTs() {
	var publicTsConfig = new Object(typescriptOptions);
	publicTsConfig.module = 'system';
	publicTsConfig.emitDecoratorMetadata = true;
	publicTsConfig.experimentalDecorators = true;
	
	gulp.src(pathToPublicTs)
		.pipe(sourcemaps.init())
			.pipe(tsc(publicTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('ng2-public'));
}

function compileServerTs() {
	var serverTsConfig = new Object(typescriptOptions);
	serverTsConfig.module = 'commonjs';
	
	gulp.src(pathToServerTs)
		.pipe(sourcemaps.init())
			.pipe(tsc(serverTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('server'));
}

function watcher() {
	watch(pathToPublicTs, compilePublicTs);
	watch(pathToServerTs, compileServerTs);
}

gulp.task('tsc-public', compilePublicTs);
gulp.task('tsc-server', compileServerTs);
gulp.task('watch', watcher);

gulp.task('default', ['tsc-public', 'tsc-server', 'watch']);