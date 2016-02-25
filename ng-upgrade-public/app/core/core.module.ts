(function () {
	"use strict";
	console.log('core');
	angular
		.module('AppThree.core', [
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
				.state('Profiles.Add', {
					url: '/add',
					template: '<add></add>'
				})
				.state('Profiles.View', {
					url: '/:id',
					template: '<profile-view></profile-view>'
				});
		
		$urlRouterProvider.otherwise('/');
		
		$locationProvider.html5Mode(true);
	}
})();