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
			controllerAs: 'vm',
			scope: {},
			bindToController: true
		};
	}
	
	Profiles.$inject = ['$scope', 'ProfileService'];
	
	function Profiles($scope, ProfileService) {
		var vm = this;
		
		vm.me;
		vm.availableProfiles;
		vm.isShowing = false;
		vm.toggleProfiles = toggleProfiles;
		
		getMe();
		getCurrentProfiles();
		
		function toggleProfiles() {
			vm.isShowing = !vm.isShowing;
		}
		
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
		
		$scope.$watch(function watchForProfileChanges() {
			return ProfileService.profiles.length;
		}, function updateProfiles(newVal) {
			vm.availableProfiles = ProfileService.profiles;
		})
	}
})();