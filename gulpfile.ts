/// <reference path="typings/main.d.ts" />

'use strict';

let gulp = require('gulp');
let tsc = require('gulp-typescript');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let watch = require('gulp-watch');
let uglify = require('gulp-uglify');

let pathToReferenceFile = 'typings/main.d.ts';
let pathToPublicSass = 'ng-public/**/*.scss';
let pathToPublic2Ts = [pathToReferenceFile, 'ng2-public/**/*.ts'];
let pathToPublic2Sass = 'ng2-public/**/*.scss';
let pathToUpgradeTs = [pathToReferenceFile, 'ng-upgrade-public/**/*.ts'];
let pathToUpgradeSass = 'ng2-public/**/*.scss';
let pathToServerTs = [pathToReferenceFile, 'server/**/*.ts'];
let pathToSass = ['ng-public/**/*.scss', 'ng2-public/**/*.scss', 'ng-upgrade-public/**/*.scss'];
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

function compilePublic() {
	gulp.src(pathToPublicSass)
		.pipe(sourcemaps.init())
			.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('ng-public'));
}

function compilePublic2() {
	let publicTsConfig = new TypescriptOptions('system', true, true);
	
	gulp.src(pathToPublic2Ts)
		.pipe(sourcemaps.init())
			.pipe(tsc(publicTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('ng2-public'));
	
	gulp.src(pathToPublic2Sass)
		.pipe(sourcemaps.init())
			.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('ng2-public'));
}

function compileUpgrade() {
	let upgradeTsConfig = new TypescriptOptions('system', true, true);
	
	gulp.src(pathToUpgradeTs)
		.pipe(sourcemaps.init())
			.pipe(tsc(upgradeTsConfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('ng-upgrade-public'));
	
	gulp.src(pathToUpgradeSass)
		.pipe(sourcemaps.init())
			.pipe(sass())
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