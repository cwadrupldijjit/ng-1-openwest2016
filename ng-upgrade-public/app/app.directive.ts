(function() {
	'use strict';
	
	angular
		.module('AppThree')
		.directive('app', AppDirective);
	
	function AppDirective() {
		return {
			restrict: 'E',
			templateUrl: '/ng-app/app.template.html',
			controller: App,
			controllerAs: 'vm',
			scope: {},
			bindToController: true
		};
	}
	
	App.$inject = ['$window', '$scope'];
	
	function App($window, $scope) {
		var vm = this;
		
		vm.isOpen = false;
		vm.toggleMain = toggleMain;
		vm.returnToLanding = returnToLanding;
		
		function toggleMain() {
			vm.isOpen = !vm.isOpen;
		}
		
		function returnToLanding() {
			$window.location.pathname = '/';
		}
	}
})();