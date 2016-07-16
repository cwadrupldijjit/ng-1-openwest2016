(function () {
    'use strict';
    angular
        .module('AppThree.profiles')
        .directive('profiles', ProfilesDirective);
    function ProfilesDirective() {
        return {
            restrict: 'E',
            templateUrl: '/ng-upgrade-app/profiles/profiles.template.html',
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
        });
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy9wcm9maWxlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQztJQUNBLFlBQVksQ0FBQztJQUViLE9BQU87U0FDTCxNQUFNLENBQUMsbUJBQW1CLENBQUM7U0FDM0IsU0FBUyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBRTNDO1FBQ0MsTUFBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLEdBQUc7WUFDYixXQUFXLEVBQUUsaURBQWlEO1lBQzlELFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLEtBQUssRUFBRSxFQUFFO1lBQ1QsZ0JBQWdCLEVBQUUsSUFBSTtTQUN0QixDQUFDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUVoRCxrQkFBa0IsTUFBTSxFQUFFLGNBQWM7UUFDdkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRWQsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNOLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztRQUNyQixFQUFFLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNyQixFQUFFLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUVuQyxLQUFLLEVBQUUsQ0FBQztRQUNSLGtCQUFrQixFQUFFLENBQUM7UUFFckI7WUFDQyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUM5QixDQUFDO1FBRUQ7WUFDQyxjQUFjLENBQUMsS0FBSyxFQUFFO2lCQUNwQixJQUFJLENBQUMsc0JBQXNCLFFBQVE7Z0JBQ25DLEVBQUUsQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDO1lBQ2xCLENBQUMsRUFBRSxrQkFBa0IsR0FBRztnQkFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRDtZQUNDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRTtpQkFDakMsSUFBSSxDQUFDLDRCQUE0QixRQUFRO2dCQUN6QyxFQUFFLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO1lBQ2pDLENBQUMsRUFBRSwwQkFBMEIsR0FBRztnQkFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLENBQUMsRUFBRSx3QkFBd0IsTUFBTTtZQUNoQyxFQUFFLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7QUFDRixDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImFwcC9wcm9maWxlcy9wcm9maWxlcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXJcclxuXHRcdC5tb2R1bGUoJ0FwcFRocmVlLnByb2ZpbGVzJylcclxuXHRcdC5kaXJlY3RpdmUoJ3Byb2ZpbGVzJywgUHJvZmlsZXNEaXJlY3RpdmUpO1xyXG5cdFxyXG5cdGZ1bmN0aW9uIFByb2ZpbGVzRGlyZWN0aXZlKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICcvbmctdXBncmFkZS1hcHAvcHJvZmlsZXMvcHJvZmlsZXMudGVtcGxhdGUuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6IFByb2ZpbGVzLFxyXG5cdFx0XHRjb250cm9sbGVyQXM6ICd2bScsXHJcblx0XHRcdHNjb3BlOiB7fSxcclxuXHRcdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxyXG5cdFx0fTtcclxuXHR9XHJcblx0XHJcblx0UHJvZmlsZXMuJGluamVjdCA9IFsnJHNjb3BlJywgJ1Byb2ZpbGVTZXJ2aWNlJ107XHJcblx0XHJcblx0ZnVuY3Rpb24gUHJvZmlsZXMoJHNjb3BlLCBQcm9maWxlU2VydmljZSkge1xyXG5cdFx0dmFyIHZtID0gdGhpcztcclxuXHRcdFxyXG5cdFx0dm0ubWU7XHJcblx0XHR2bS5hdmFpbGFibGVQcm9maWxlcztcclxuXHRcdHZtLmlzU2hvd2luZyA9IGZhbHNlO1xyXG5cdFx0dm0udG9nZ2xlUHJvZmlsZXMgPSB0b2dnbGVQcm9maWxlcztcclxuXHRcdFxyXG5cdFx0Z2V0TWUoKTtcclxuXHRcdGdldEN1cnJlbnRQcm9maWxlcygpO1xyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiB0b2dnbGVQcm9maWxlcygpIHtcclxuXHRcdFx0dm0uaXNTaG93aW5nID0gIXZtLmlzU2hvd2luZztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gZ2V0TWUoKSB7XHJcblx0XHRcdFByb2ZpbGVTZXJ2aWNlLmdldE1lKClcclxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiBnZXRNZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdHZtLm1lID0gcmVzcG9uc2U7XHJcblx0XHRcdFx0fSwgZnVuY3Rpb24gZ2V0TWVFcnIoZXJyKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oZXJyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gZ2V0Q3VycmVudFByb2ZpbGVzKCkge1xyXG5cdFx0XHRQcm9maWxlU2VydmljZS5nZXRDdXJyZW50UHJvZmlsZXMoKVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIGdldFByb2ZpbGVzU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0dm0uYXZhaWxhYmxlUHJvZmlsZXMgPSByZXNwb25zZTtcclxuXHRcdFx0XHR9LCBmdW5jdGlvbiBnZXRQcm9maWxlc0Vycm9yKGVycikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKGVycik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdCRzY29wZS4kd2F0Y2goZnVuY3Rpb24gd2F0Y2hGb3JQcm9maWxlQ2hhbmdlcygpIHtcclxuXHRcdFx0cmV0dXJuIFByb2ZpbGVTZXJ2aWNlLnByb2ZpbGVzLmxlbmd0aDtcclxuXHRcdH0sIGZ1bmN0aW9uIHVwZGF0ZVByb2ZpbGVzKG5ld1ZhbCkge1xyXG5cdFx0XHR2bS5hdmFpbGFibGVQcm9maWxlcyA9IFByb2ZpbGVTZXJ2aWNlLnByb2ZpbGVzO1xyXG5cdFx0fSlcclxuXHR9XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
