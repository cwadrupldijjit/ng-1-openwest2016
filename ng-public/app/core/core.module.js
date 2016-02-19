(function () {
	"use strict";
	
	angular
		.module('AppOne.core', [
			/* 3rd-party modules */
			'ui.router'
		])
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
	
	function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
			.state('Home', {
				url: '/',
				template: '<home></home>'
			})
			
			.state('Profiles', {
				url: '/profiles',
				template: '<profiles></profiles>'
			})
				.state('Profiles.Me', {
					url: '/me',
					template: '<me></me>'
				})
				.state('Profiles.You', {
					url: '/you',
					template: '<you></you>'
				})
		
		$urlRouterProvider.otherwise('/');
		
		$locationProvider.html5Mode(true);
	}
})();