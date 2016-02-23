(function() {
	'use strict';
	
	angular
		.module('AppOne.profiles')
		.directive('add', AddDirective);
	
	function AddDirective() {
		return {
			restrict: 'E',
			templateUrl: '/ng-app/profiles/add/profiles-add.template.html',
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
		vm.newInterest = '';
		vm.profile = {
			name: 'Eleventh Doctor',
			age: 1245,
			favoriteFood: 'Fish Fingers and Custard',
			interests: []
		};
		vm.interestsEdit = [];
		
		vm.profile.interests.new = 'something';
		
		function saveProfile() {
			ProfileService
				.saveProfile(vm.profile)
					.then(function addProfileSuccess(response) {
						$state.go('Profiles.View', {newProfile: response, id: response.id});
					}, function addProfileError(err) {
						alert(err);
					});
		}
		
		function cancelEditProfile() {
			$state.go('Profiles');
		}
		
		function cancelInterestEdit(index) {
			if (index === 'new') {
				vm.newInterest = '';
				vm.interestsEdit[index] = '';
			} else {
				vm.profile.interests[index] = vm.interestsEdit[index];
				vm.interestsEdit[index] = '';
			}
		}
		
		function saveInterest(index) {
			if (index === 'new') {
				vm.profile.interests.push(vm.newInterest);
				vm.newInterest = '';
			}
			vm.interestsEdit[index] = '';
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
				alert(e);
			}
		}
		
		function editInterest(index) {
			try {
				if (index === undefined) {
					throw('You\'re trying to edit an interest that doesn\'t exist');
				}
				
				if (index === 'new') 
					vm.interestsEdit.new = 'true';
				else vm.interestsEdit[index] = vm.profile.interests[index];
			} catch (e) {
				alert(e);
			}
		}
	}
})();