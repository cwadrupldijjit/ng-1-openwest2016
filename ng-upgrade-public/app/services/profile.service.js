(function () {
    'use strict';
    angular
        .module('AppThree.core')
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
            var data = { interest: interest };
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
            console.log('svc', interest);
            $http.delete('/api/profiles/' + profileId + '/interests?q=' + interest)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9wcm9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQztJQUNBLFlBQVksQ0FBQztJQUViLE9BQU87U0FDTCxNQUFNLENBQUMsZUFBZSxDQUFDO1NBQ3ZCLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUU1QyxjQUFjLENBQUMsT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXpDLHdCQUF3QixLQUFLLEVBQUUsRUFBRTtRQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFFZixHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixHQUFHLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDNUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDNUIsR0FBRyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDOUIsR0FBRyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDaEMsR0FBRyxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDcEMsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbEI7WUFDQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDM0IsSUFBSSxDQUFDLG1DQUFtQyxRQUFRO2dCQUNoRCxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxDQUFDLEVBQUUsK0JBQStCLEdBQUc7Z0JBQ3BDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7WUFFSixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUN6QixDQUFDO1FBRUQ7WUFDQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FB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QVEsQ0FBQyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUVELHdCQUF3QixRQUFRLEVBQUUsU0FBUztZQUMxQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDN0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLEdBQUcsZUFBZSxHQUFHLFFBQVEsQ0FBQztpQkFDckUsSUFBSSxDQUFDLCtCQUErQixRQUFRO2dCQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNoRCxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxFQUFFLDZCQUE2QixHQUFHO2dCQUNsQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1lBRUosTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDekIsQ0FBQztJQUNGLENBQUM7QUFDRixDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9wcm9maWxlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXJcclxuXHRcdC5tb2R1bGUoJ0FwcFRocmVlLmNvcmUnKVxyXG5cdFx0LnNlcnZpY2UoJ1Byb2ZpbGVTZXJ2aWNlJywgUHJvZmlsZVNlcnZpY2UpO1xyXG5cdFxyXG5cdFByb2ZpbGVTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRxJ107XHJcblx0XHJcblx0ZnVuY3Rpb24gUHJvZmlsZVNlcnZpY2UoJGh0dHAsICRxKSB7XHJcblx0XHR2YXIgc3ZjID0gdGhpcztcclxuXHRcdFxyXG5cdFx0c3ZjLmdldE1lID0gZ2V0TWU7XHJcblx0XHRzdmMuZ2V0Q3VycmVudFByb2ZpbGVzID0gZ2V0Q3VycmVudFByb2ZpbGVzO1xyXG5cdFx0c3ZjLmdldFByb2ZpbGUgPSBnZXRQcm9maWxlO1xyXG5cdFx0c3ZjLnNhdmVQcm9maWxlID0gc2F2ZVByb2ZpbGU7XHJcblx0XHRzdmMuc2F2ZUludGVyZXN0ID0gc2F2ZUludGVyZXN0O1xyXG5cdFx0c3ZjLmRlbGV0ZUludGVyZXN0ID0gZGVsZXRlSW50ZXJlc3Q7XHJcblx0XHRzdmMucHJvZmlsZXMgPSBbXTtcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gZ2V0TWUoKSB7XHJcblx0XHRcdHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblx0XHRcdFxyXG5cdFx0XHQkaHR0cC5nZXQoJy9hcGkvcHJvZmlsZXMvbWUnKVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9maWxlc1N1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcblx0XHRcdFx0fSwgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2ZpbGVzRXJyKGVycikge1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gZ2V0Q3VycmVudFByb2ZpbGVzKCkge1xyXG5cdFx0XHR2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cdFx0XHRcclxuXHRcdFx0JGh0dHAuZ2V0KCcvYXBpL3Byb2ZpbGVzL2N1cnJlbnQnKVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9maWxlc1N1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdHN2Yy5wcm9maWxlcyA9IFtdO1xyXG5cdFx0XHRcdFx0cmVzcG9uc2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIGFkZFRvUHJvZmlsZXMoZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRzdmMucHJvZmlsZXMucHVzaChkYXRhKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuXHRcdFx0XHR9LCBmdW5jdGlvbiBnZXRDdXJyZW50UHJvZmlsZXNFcnIoZXJyKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBnZXRQcm9maWxlKGlkKSB7XHJcblx0XHRcdHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblx0XHRcdFxyXG5cdFx0XHQkaHR0cC5nZXQoJy9hcGkvcHJvZmlsZXMvJyArIGlkKVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIGdldFByb2ZpbGVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRcdH0sIGZ1bmN0aW9uIGdldFByb2ZpbGVFcnIoZXJyKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBzYXZlUHJvZmlsZShwcm9maWxlKSB7XHJcblx0XHRcdHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblx0XHRcdFxyXG5cdFx0XHQkaHR0cC5wb3N0KCcvYXBpL3Byb2ZpbGVzL2FkZCcsIHByb2ZpbGUpXHJcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gYWRkUHJvZmlsZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdHN2Yy5wcm9maWxlcy5wdXNoKHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuXHRcdFx0XHR9LCBmdW5jdGlvbiBhZGRQcm9maWxlRXJyb3IoZXJyKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBzYXZlSW50ZXJlc3QoaW50ZXJlc3QsIHByb2ZpbGVJZCwgaW5kZXgpIHtcclxuXHRcdFx0dmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHRcdFx0dmFyIHVybCA9ICcvYXBpL3Byb2ZpbGVzLycgKyBwcm9maWxlSWQgKyAnL2ludGVyZXN0cyc7XHJcblx0XHRcdHZhciBkYXRhID0ge2ludGVyZXN0OiBpbnRlcmVzdH07XHJcblx0XHRcdGlmIChpbmRleCAhPT0gJ25ldycpIHtcclxuXHRcdFx0XHR1cmwgKz0gJz9pbmRleD0nICsgaW5kZXg7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc29sZS5sb2coJ3N2YycsIGludGVyZXN0KTtcclxuXHRcdFx0JGh0dHAucG9zdCh1cmwsIGRhdGEpXHJcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gU2F2ZUludGVyZXN0U3VjY2VzcyhyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2ludGVyZXN0JywgcmVzcG9uc2UuZGF0YS5pbnRlcmVzdCk7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlLmRhdGEuaW50ZXJlc3QpO1xyXG5cdFx0XHRcdH0sIGZ1bmN0aW9uIHNhdmVJbnRlcmVzdEVycm9yKGVycikge1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gZGVsZXRlSW50ZXJlc3QoaW50ZXJlc3QsIHByb2ZpbGVJZCkge1xyXG5cdFx0XHR2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnc3ZjJywgaW50ZXJlc3QpO1xyXG5cdFx0XHQkaHR0cC5kZWxldGUoJy9hcGkvcHJvZmlsZXMvJyArIHByb2ZpbGVJZCArICcvaW50ZXJlc3RzP3E9JyArIGludGVyZXN0KVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIGRlbGV0ZUludGVyZXN0U3VjY2VzcyhyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2ludGVyZXN0JywgcmVzcG9uc2UuZGF0YS5pbnRlcmVzdCk7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlLmRhdGEuaW50ZXJlc3QpO1xyXG5cdFx0XHRcdH0sIGZ1bmN0aW9uIGRlbGV0ZUludGVyZXN0RXJyb3IoZXJyKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH1cclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
