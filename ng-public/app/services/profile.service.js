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
	}
})();