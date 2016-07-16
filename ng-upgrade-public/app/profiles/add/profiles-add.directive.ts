(function() {
	'use strict';
	
	angular
		.module('AppThree.profiles')
		.directive('add', AddDirective);
	
	function AddDirective() {
		return {
			restrict: 'E',
			templateUrl: '/ng-upgrade-app/profiles/add/profiles-add.template.html',
			controller: Add,
			controllerAs: 'vm',
			scope: {},
			bindToController: true
		};
	}
	
	Add.$inject = ['$state', 'ProfileService'];
	
	function Add($state, ProfileService) {
		var vm = this;
		
		vm.saveProfile = saveProfile;
		vm.cancelInterestEdit = cancelInterestEdit;
		vm.cancelEditProfile = cancelEditProfile;
		vm.saveInterest = saveInterest;
		vm.deleteInterest = deleteInterest;
		vm.editInterest = editInterest;
		vm.newInterest = {name: ''};
		vm.profile = {
			name: 'Eleventh Doctor',
			age: 1245,
			favoriteFood: 'Fish Fingers and Custard',
			interests: []
		};
		vm.interestsEdit = [];
		
		vm.profile.interests.new = {name: ''};
		
		function saveProfile() {
			ProfileService
				.saveProfile(vm.profile)
					.then(function addProfileSuccess(response) {
						$state.go('Profiles.View', {newProfile: response, id: response._id});
					}, function addProfileError(err) {
						console.warn(err);
					});
		}
		
		function cancelEditProfile() {
			$state.go('Profiles');
		}
		
		function cancelInterestEdit(index) {
			if (index === 'new') {
				vm.newInterest = {name: ''};
			} else {
				vm.profile.interests[index] = vm.interestsEdit[index];
			}
			vm.interestsEdit[index] = null;
		}
		
		function saveInterest(index) {
			if (index === 'new') {
				vm.profile.interests.push(vm.newInterest);
				vm.newInterest = {name: ''};
			}
			vm.interestsEdit[index] = null;
		}
		
		function deleteInterest(index) {
			try {
							if (index === undefined) {
								throw('You\'re trying to delete an interest that doesn\'t exist');
							}
							if (confirm('Are you sure you want to delete this interest?')) {
								vm.profile.interests.splice(index, 1);
							}
			} catch (e) {
				console.warn(e);
			}
		}
		
		function editInterest(index) {
			if (index === undefined) {
				throw('You\'re trying to edit an interest that doesn\'t exist');
			}
			
			if (index === 'new') 
				vm.interestsEdit.new = true;
			else vm.interestsEdit[index] = JSON.parse(JSON.stringify(vm.profile.interests[index]));
		}
	}
})();