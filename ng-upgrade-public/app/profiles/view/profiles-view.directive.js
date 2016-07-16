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
        vm.profile;
        getProfile();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy92aWV3L3Byb2ZpbGVzLXZpZXcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLENBQUM7SUFDQSxZQUFZLENBQUM7SUFFYixPQUFPO1NBQ0wsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1NBQzNCLFNBQVMsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUVqRDtRQUNDLE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxHQUFHO1lBQ2IsV0FBVyxFQUFFLG1EQUFtRDtZQUNoRSxVQUFVLEVBQUUsV0FBVztZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixLQUFLLEVBQUUsRUFBRTtZQUNULGdCQUFnQixFQUFFLElBQUk7U0FDdEIsQ0FBQztJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBTyxHQUFHLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUE7SUFFeEQscUJBQXFCLFlBQVksRUFBRSxjQUFjO1FBQ2hELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUVkLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFFWCxVQUFVLEVBQUUsQ0FBQztRQUViO1lBQ0MsY0FBYztpQkFDWixVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztpQkFDMUIsSUFBSSxDQUFDLDJCQUEyQixRQUFRO2dCQUN4QyxFQUFFLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUN2QixDQUFDLEVBQUUseUJBQXlCLEdBQUc7Z0JBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDO0lBQ0YsQ0FBQztBQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoiYXBwL3Byb2ZpbGVzL3ZpZXcvcHJvZmlsZXMtdmlldy5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXJcclxuXHRcdC5tb2R1bGUoJ0FwcFRocmVlLnByb2ZpbGVzJylcclxuXHRcdC5kaXJlY3RpdmUoJ3Byb2ZpbGVWaWV3JywgUHJvZmlsZVZpZXdEaXJlY3RpdmUpO1xyXG5cdFxyXG5cdGZ1bmN0aW9uIFByb2ZpbGVWaWV3RGlyZWN0aXZlKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICcvbmctYXBwL3Byb2ZpbGVzL3ZpZXcvcHJvZmlsZXMtdmlldy50ZW1wbGF0ZS5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogUHJvZmlsZVZpZXcsXHJcblx0XHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuXHRcdFx0c2NvcGU6IHt9LFxyXG5cdFx0XHRiaW5kVG9Db250cm9sbGVyOiB0cnVlXHJcblx0XHR9O1xyXG5cdH1cclxuXHRcclxuXHRQcm9maWxlVmlldy4kaW5qZWN0ID0gWyckc3RhdGVQYXJhbXMnLCAnUHJvZmlsZVNlcnZpY2UnXVxyXG5cdFxyXG5cdGZ1bmN0aW9uIFByb2ZpbGVWaWV3KCRzdGF0ZVBhcmFtcywgUHJvZmlsZVNlcnZpY2UpIHtcclxuXHRcdHZhciB2bSA9IHRoaXM7XHJcblx0XHRcclxuXHRcdHZtLnByb2ZpbGU7XHJcblx0XHRcclxuXHRcdGdldFByb2ZpbGUoKTtcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gZ2V0UHJvZmlsZSgpIHtcclxuXHRcdFx0UHJvZmlsZVNlcnZpY2VcclxuXHRcdFx0XHQuZ2V0UHJvZmlsZSgkc3RhdGVQYXJhbXMuaWQpXHJcblx0XHRcdFx0XHQudGhlbihmdW5jdGlvbiBnZXRQcm9maWxlU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHR2bS5wcm9maWxlID0gcmVzcG9uc2U7XHJcblx0XHRcdFx0XHR9LCBmdW5jdGlvbiBnZXRQcm9maWxlRXJyb3IoZXJyKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybihlcnIpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
