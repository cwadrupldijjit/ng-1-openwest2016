(function () {
    'use strict';
    angular
        .module('AppThree.profiles')
        .directive('profileView', ProfileViewDirective);
    function ProfileViewDirective() {
        return {
            restrict: 'E',
            templateUrl: '/ng-app/profiles/view/profiles-view.template.html',
            controller: ProfileView,
            controllerAs: 'vm',
            scope: {},
            bindToController: true
        };
    }
    ProfileView.$inject = ['$stateParams', 'ProfileService'];
    function ProfileView($stateParams, ProfileService) {
        var vm = this;
        vm.profile = getProfile();
        function getProfile() {
            ProfileService
                .getProfile($stateParams.id)
                .then(function getProfileSuccess(response) {
                vm.profile = response;
            }, function getProfileError(err) {
                console.warn(err);
            });
        }
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy92aWV3L3Byb2ZpbGVzLXZpZXcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbIlByb2ZpbGVWaWV3RGlyZWN0aXZlIiwiUHJvZmlsZVZpZXciLCJQcm9maWxlVmlldy5nZXRQcm9maWxlIiwiUHJvZmlsZVZpZXcuZ2V0UHJvZmlsZS5nZXRQcm9maWxlU3VjY2VzcyIsIlByb2ZpbGVWaWV3LmdldFByb2ZpbGUuZ2V0UHJvZmlsZUVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFDO0lBQ0EsWUFBWSxDQUFDO0lBRWIsT0FBTztTQUNMLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztTQUMzQixTQUFTLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFFakQ7UUFDQ0EsTUFBTUEsQ0FBQ0E7WUFDTkEsUUFBUUEsRUFBRUEsR0FBR0E7WUFDYkEsV0FBV0EsRUFBRUEsbURBQW1EQTtZQUNoRUEsVUFBVUEsRUFBRUEsV0FBV0E7WUFDdkJBLFlBQVlBLEVBQUVBLElBQUlBO1lBQ2xCQSxLQUFLQSxFQUFFQSxFQUFFQTtZQUNUQSxnQkFBZ0JBLEVBQUVBLElBQUlBO1NBQ3RCQSxDQUFDQTtJQUNIQSxDQUFDQTtJQUVELFdBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUV4RCxxQkFBcUIsWUFBWSxFQUFFLGNBQWM7UUFDaERDLElBQUlBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBO1FBRWRBLEVBQUVBLENBQUNBLE9BQU9BLEdBQUdBLFVBQVVBLEVBQUVBLENBQUNBO1FBRTFCQTtZQUNDQyxjQUFjQTtpQkFDWkEsVUFBVUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7aUJBQzFCQSxJQUFJQSxDQUFDQSwyQkFBMkJBLFFBQVFBO2dCQUN4Q0MsRUFBRUEsQ0FBQ0EsT0FBT0EsR0FBR0EsUUFBUUEsQ0FBQ0E7WUFDdkJBLENBQUNBLEVBQUVELHlCQUF5QkEsR0FBR0E7Z0JBQzlCRSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNuQkEsQ0FBQ0EsQ0FBQ0YsQ0FBQ0E7UUFDTkEsQ0FBQ0E7SUFDRkQsQ0FBQ0E7QUFDRixDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImFwcC9wcm9maWxlcy92aWV3L3Byb2ZpbGVzLXZpZXcuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRcclxuXHRhbmd1bGFyXHJcblx0XHQubW9kdWxlKCdBcHBUaHJlZS5wcm9maWxlcycpXHJcblx0XHQuZGlyZWN0aXZlKCdwcm9maWxlVmlldycsIFByb2ZpbGVWaWV3RGlyZWN0aXZlKTtcclxuXHRcclxuXHRmdW5jdGlvbiBQcm9maWxlVmlld0RpcmVjdGl2ZSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRcdHRlbXBsYXRlVXJsOiAnL25nLWFwcC9wcm9maWxlcy92aWV3L3Byb2ZpbGVzLXZpZXcudGVtcGxhdGUuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6IFByb2ZpbGVWaWV3LFxyXG5cdFx0XHRjb250cm9sbGVyQXM6ICd2bScsXHJcblx0XHRcdHNjb3BlOiB7fSxcclxuXHRcdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxyXG5cdFx0fTtcclxuXHR9XHJcblx0XHJcblx0UHJvZmlsZVZpZXcuJGluamVjdCA9IFsnJHN0YXRlUGFyYW1zJywgJ1Byb2ZpbGVTZXJ2aWNlJ11cclxuXHRcclxuXHRmdW5jdGlvbiBQcm9maWxlVmlldygkc3RhdGVQYXJhbXMsIFByb2ZpbGVTZXJ2aWNlKSB7XHJcblx0XHR2YXIgdm0gPSB0aGlzO1xyXG5cdFx0XHJcblx0XHR2bS5wcm9maWxlID0gZ2V0UHJvZmlsZSgpO1xyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBnZXRQcm9maWxlKCkge1xyXG5cdFx0XHRQcm9maWxlU2VydmljZVxyXG5cdFx0XHRcdC5nZXRQcm9maWxlKCRzdGF0ZVBhcmFtcy5pZClcclxuXHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uIGdldFByb2ZpbGVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRcdHZtLnByb2ZpbGUgPSByZXNwb25zZTtcclxuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uIGdldFByb2ZpbGVFcnJvcihlcnIpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKGVycik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
