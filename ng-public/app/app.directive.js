(function() {
	'use strict';
	
	angular
		.module('AppOne')
		.directive('app', AppDirective);
	
	function AppDirective() {
		return {
			restrict: 'E',
			templateUrl: '/ng-app/app.template.html',
			controller: App,
			controllerAs: 'vm'
		};
	}
	
	App.$inject = [];
	
	function App() {
		
	}
})();