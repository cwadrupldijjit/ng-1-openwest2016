(function() {
	'use strict';
	
	angular
		.module('AppThree')
		.component('app', {
			controller: getController(),
			controllerAs: 'vm',
			templateUrl: '/ng-upgrade-app/app.template.html'
		});
	
	function getController() {
		class AppController {
			isOpen: boolean = false;
			
			toggleMain() {
				this.isOpen = !this.isOpen;
			}
			
			returnToLanding() {
				window.location.pathname = '/';
			}
		}
		
		AppController.$inject = ['$window', '$scope'];
		
		return AppController;
	}
})();