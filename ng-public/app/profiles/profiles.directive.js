(function() {
	'use strict';
	
	angular
		.module('AppOne.profiles')
		.directive('profiles', ProfilesDirective);
	
	function ProfilesDirective() {
		return {
			restrict: 'E',
			templateUrl: '/ng-app/profiles/profiles.template.html',
			controller: Profiles,
			controllerAs: 'vm'
		};
	}
	
	Profiles.$inject = ['ProfileService'];
	
	function Profiles(ProfileService) {
		var vm = this;
		
		vm.me;
		vm.availableProfiles;
		
		getMe();
		getCurrentProfiles();
		
		function getMe() {
			ProfileService.getMe()
				.then(function getMeSuccess(response) {
					vm.me = response;
				}, function getMeErr(err) {
					console.warn(err);
				});
		}
		
		function getCurrentProfiles() {
			ProfileService.getCurrentProfiles()
				.then(function getProfilesSuccess(response) {
					vm.availableProfiles = response;
				}, function getProfilesError(err) {
					console.warn(err);
				});
			
		}
	}
})();