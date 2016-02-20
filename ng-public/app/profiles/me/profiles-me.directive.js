(function() {
	'use strict';
	
	angular
		.module('AppOne.profiles')
		.directive('me', MeDirective);
	
	function MeDirective() {
		return {
			restrict: 'E',
			templateUrl: '/ng-app/profiles/me/profiles-me.template.html',
			controller: Me,
			controllerAs: 'vm',
			scope: {},
			bindToController: true
		};
	}
	
	Me.$inject = ['ProfileService'];
	
	function Me(ProfileService) {
		var vm = this;
		
		vm.profile;
		
		getMe();
		
		function getMe() {
			ProfileService
				.getMe()
					.then(function getMeSuccess(response) {
						vm.profile = response;
					}, function getMeError(err) {
						console.err('Error:', err);
					});
		}
	}
})();