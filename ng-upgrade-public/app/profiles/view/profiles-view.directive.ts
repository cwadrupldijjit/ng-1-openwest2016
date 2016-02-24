(function() {
	'use strict';
	
	angular
		.module('AppThree.profiles')
		.directive('profileView', ProfileViewDirective);
	
	function ProfileViewDirective() {
		return {
			restrict: 'E',
			templateUrl: '/ng-app/profiles/view/profiles-view.template.html',
			controller: ProfileView,
			controllerAs: 'vm',
			scope: {},
			bindToController: true
		};
	}
	
	ProfileView.$inject = ['$stateParams', 'ProfileService']
	
	function ProfileView($stateParams, ProfileService) {
		var vm = this;
		
		vm.profile = getProfile();
		
		function getProfile() {
			ProfileService
				.getProfile($stateParams.id)
					.then(function getProfileSuccess(response) {
						vm.profile = response;
					}, function getProfileError(err) {
						console.warn(err);
					});
		}
	}
})();