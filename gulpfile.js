/// <reference path="typings/main.d.ts" />

'use strict';

var gulp = require('gulp');
var tsc = require('gulp-typescript');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');

var pathToReferenceFile = './typings/main.d.ts';
var pathToPublicSass = 'ng-public/**/*.scss';
var pathToPublic2Ts = [pathToReferenceFile, 'ng2-public/**/*.ts'];
var pathToPublic2Sass = 'ng2-public/**/*.scss';
var pathToUpgradeTs = [pathToReferenceFile, 'ng-upgrade-public/**/*.ts'];
var pathToUpgradeSass = 'ng-upgrade-public/**/*.scss';
var pathToServerTs = [pathToReferenceFile, 'server/**/*.ts'];

function TypescriptOptions(module, 
						   emitDecoratorMetadata, 
						   experimentalDecorators) {
	this.target = 'es5';
	this.moduleResolution = 'node';
	this.removeComments = false;
	this.noImplicitAny = false;
	
	this.module = module; 
	if (emitDecoratorMetadata) {
		this.emitDecoratorMetadata = emitDecoratorMetadata; 
	}
	if (experimentalDecorators) {
		this.experimentalDecorators = experimentalDecorators;
	}
};

function compilePublic() {
	gulp.src(pathToPublicSass)
		.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('ng-public'));
}

function compilePublic2() {
	var publicTsConfig = new TypescriptOptions('system', true, true);
	
	gulp.src(pathToPublic2Ts)
		.pipe(sourcemaps.init())
			.pipe(tsc(publicTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('ng2-public'));
	
	gulp.src(pathToPublic2Sass)
		.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('ng2-public'));
}

function compileUpgrade() {
	var upgradeTsConfig = new TypescriptOptions('system', true, true);
	
	gulp.src(pathToUpgradeTs)
		.pipe(sourcemaps.init())
			.pipe(tsc(upgradeTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('ng-upgrade-public'));
	
	gulp.src(pathToUpgradeSass)
		.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('ng-upgrade-public'));
}

function compileServerTs() {
	var serverTsConfig = new TypescriptOptions('commonjs', null, null);
	
	gulp.src(pathToServerTs)
		.pipe(sourcemaps.init())
			.pipe(tsc(serverTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('server'));
}

function watcher() {
	pathToPublic2Ts[2] = pathToPublic2Sass;
	pathToUpgradeTs[2] = pathToUpgradeSass;
	watch(pathToPublicSass, compilePublic);
	watch(pathToPublic2Ts, compilePublic2);
	watch(pathToUpgradeTs, compileUpgrade);
	watch(pathToServerTs, compileServerTs);
}

gulp.task('tsc-public', compilePublic);
gulp.task('tsc-public-2', compilePublic2);
gulp.task('tsc-upgrade', compileUpgrade);
gulp.task('tsc-server', compileServerTs);
gulp.task('watch', watcher);

gulp.task('default', ['tsc-public', 'tsc-public-2', 'tsc-upgrade', 'tsc-server', 'watch']);