(function () {
	"use strict";
	console.log('hello?')
	angular
		.module('AppThree', [
			/* custom modules */
			'AppThree.core',
			'AppThree.home',
			'AppThree.profiles',
		]);
})();