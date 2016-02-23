(function() {
	'use strict';
	
	angular
		.module('AppOne.core')
		.service('ProfileService', ProfileService);
	
	ProfileService.$inject = ['$http', '$q'];
	
	function ProfileService($http, $q) {
		var svc = this;
		
		svc.getMe = getMe;
		svc.getCurrentProfiles = getCurrentProfiles;
		svc.getProfile = getProfile;
		svc.saveProfile = saveProfile;
		svc.saveInterest = saveInterest;
		svc.deleteInterest = deleteInterest;
		svc.profiles = [];
		
		function getMe() {
			var deferred = $q.defer();
			
			$http.get('/api/profiles/me')
				.then(function getCurrentProfilesSuccess(response) {
					deferred.resolve(response.data);
				}, function getCurrentProfilesErr(err) {
					deferred.reject(err);
				});
			
			return deferred.promise;
		}
		
		function getCurrentProfiles() {
			var deferred = $q.defer();
			
			$http.get('/api/profiles/current')
				.then(function getCurrentProfilesSuccess(response) {
					svc.profiles = [];
					response.data.forEach(function addToProfiles(data) {
						svc.profiles.push(data);
					});
					deferred.resolve(response.data);
				}, function getCurrentProfilesErr(err) {
					deferred.reject(err);
				});
			
			return deferred.promise;
		}
		
		function getProfile(id) {
			var deferred = $q.defer();
			
			$http.get('/api/profiles/' + id)
				.then(function getProfileSuccess(response) {
					deferred.resolve(response.data);
				}, function getProfileErr(err) {
					deferred.reject(err);
				});
			
			return deferred.promise;
		}
		
		function saveProfile(profile) {
			var deferred = $q.defer();
			
			$http.post('/api/profiles/add', profile)
				.then(function addProfileSuccess(response) {
					svc.profiles.push(response.data);
					deferred.resolve(response.data);
				}, function addProfileError(err) {
					deferred.reject(err);
				});
			
			return deferred.promise;
		}
		
		function saveInterest(interest, profileId, index) {
			var deferred = $q.defer();
			var url = '/api/profiles/' + profileId + '/interests';
			var data = {interest: interest};
			if (index !== 'new') {
				url += '?index=' + index;
			}
			console.log('svc', interest);
			$http.post(url, data)
				.then(function SaveInterestSuccess(response) {
					console.log('interest', response.data.interest);
					deferred.resolve(response.data.interest);
				}, function saveInterestError(err) {
					deferred.reject(err);
				});
			
			return deferred.promise;
		}
		
		function deleteInterest(interest, profileId) {
			var deferred = $q.defer();
			var data = {interest: interest};
			console.log('svc', interest);
			$http.delete('/api/profiles/' + profileId + '/interests', data)
				.then(function deleteInterestSuccess(response) {
					console.log('interest', response.data.interest);
					deferred.resolve(response.data.interest);
				}, function deleteInterestError(err) {
					deferred.reject(err);
				});
			
			return deferred.promise;
		}
	}
})();