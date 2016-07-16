

(function() {
	'use strict';
	
	angular
		.module('AppThree.profiles')
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
	
	Me.$inject = ['$scope', 'ProfileService'];
	
	function Me($scope, ProfileService) {
		var vm = this;
		
		vm.profile;
		vm.newInterest = {name: ''};
		vm.interestsEdit = [];
		
		vm.cancelInterestEdit = cancelInterestEdit;
		vm.saveInterest = saveInterest;
		vm.deleteInterest = deleteInterest;
		vm.editInterest = editInterest;
		
		getMe();
		
		function getMe() {
			ProfileService
				.getMe()
					.then(function getMeSuccess(response) {
						vm.profile = response;
					}, function getMeError(err) {
						console.error('Error:', err);
					});
		}
		
		function cancelInterestEdit(index) {
			if (index === 'new') {
				vm.newInterest = {name: ''};
				vm.interestsEdit[index] = '';
			} else {
				vm.profile.interests[index] = vm.interestsEdit[index];
				vm.interestsEdit[index] = '';
			}
		}
		
		function saveInterest(index) {
			var interest;
			
			if (index === 'new') {
				interest = vm.newInterest;
			} else {
				interest = vm.profile.interests[index];
			}
			
			console.log('dir', interest);
			ProfileService
				.saveInterest(interest, vm.profile._id, index)
					.then(function saveInterestSuccess(response) {
						if (index === 'new') {
							vm.profile.interests.push(response);
							
							vm.newInterest = {name: ''};
						} else {
							vm.profile.interests[index] = response;
						}
						
						console.log('response', response);
						console.log('index', index);
						
						vm.interestsEdit[index] = '';
					}, function saveInterestError(err) {
						console.warn(err);
					});
		}
		
		function deleteInterest(index) {
			try {
				if (index === undefined) {
					throw('You\'re trying to delete an interest that doesn\'t exist');
				}
				if (confirm('Are you sure you want to delete this interest?')) {
					ProfileService
						.deleteInterest(vm.profile.interests[index], vm.profile._id)
							.then(function deleteInterestSuccess(response) {
								vm.profile.interests.splice(index, 1);
							}, function deleteInterestError(err) {
								console.warn(err);
							})
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