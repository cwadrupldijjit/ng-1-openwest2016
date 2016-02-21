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
		
		vm.save = saveProfile;
		vm.cancel = cancelEdit;
		vm.addInterest = addInterest;
		vm.deleteInterest = deleteInterest;
		vm.editInterest = editInterest;
		vm.newInterest = '';
		vm.profile = {
			name: 'Eleventh Doctor',
			age: 1245,
			favoriteFood: 'Fish Fingers and Custard',
			interests: []
		};
		
		function saveProfile() {
			
		}
		
		function cancelEdit() {
			
		}
		
		function addInterest() {
			
		}
		
		function deleteInterest(interest) {
			
		}
		
		function editInterest(interest) {
			if (interest === undefined) {
				
			}
		}
	}
})();