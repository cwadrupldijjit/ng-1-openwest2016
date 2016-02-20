/// <reference path="typings/main.d.ts" />

'use strict';

let gulp = require('gulp');
let tsc = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');
let watch = require('gulp-watch');
let uglify = require('gulp-uglify');

let pathToReferenceFile = 'typings/main.d.ts';
let pathToPublicTs = [pathToReferenceFile, 'ng2-public/**/*.ts'];
let pathToUpgradeTs = [pathToReferenceFile, 'ng-upgrade-public/**/*.ts'];
let pathToServerTs = [pathToReferenceFile, 'server/**/*.ts'];
function TypescriptOptions(module, 
						   emitDecoratorMetadata, 
						   experimentalDecorators) {
	this.target = 'es5';
	this.moduleResolution = 'node';
	this.removeComments = false;
	this.noImplicitAny = false;
	
	this.module = module; 
	this.emitDecoratorMetadata = emitDecoratorMetadata; 
	this.experimentalDecorators = experimentalDecorators;
};

function compilePublicTs() {
	let publicTsConfig = new TypescriptOptions('system', true, true);
	
	gulp.src(pathToPublicTs)
		.pipe(sourcemaps.init())
			.pipe(tsc(publicTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('ng2-public'));
}

function compileUpgradeTs() {
	let upgradeTsConfig = new TypescriptOptions('system', true, true);
	
	gulp.src(pathToUpgradeTs)
		.pipe(sourcemaps.init())
			.pipe(tsc(upgradeTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('ng-upgrade-public'));
}

function compileServerTs() {
	let serverTsConfig = new TypescriptOptions('commonjs', null, null);
	
	gulp.src(pathToServerTs)
		.pipe(sourcemaps.init())
			.pipe(tsc(serverTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('server'));
}

function watcher() {
	watch(pathToPublicTs, compilePublicTs);
	watch(pathToUpgradeTs, compileUpgradeTs);
	watch(pathToServerTs, compileServerTs);
}

gulp.task('tsc-public', compilePublicTs);
gulp.task('tsc-upgrade', compileUpgradeTs);
gulp.task('tsc-server', compileServerTs);
gulp.task('watch', watcher);

gulp.task('default', ['tsc-public', 'tsc-upgrade', 'tsc-server', 'watch']);