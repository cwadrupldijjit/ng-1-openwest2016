(function () {
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
        vm.newInterest = { name: '' };
        vm.profile = {
            name: 'Eleventh Doctor',
            age: 1245,
            favoriteFood: 'Fish Fingers and Custard',
            interests: []
        };
        vm.interestsEdit = [];
        vm.profile.interests.new = { name: '' };
        function saveProfile() {
            ProfileService
                .saveProfile(vm.profile)
                .then(function addProfileSuccess(response) {
                $state.go('Profiles.View', { newProfile: response, id: response._id });
            }, function addProfileError(err) {
                console.warn(err);
            });
        }
        function cancelEditProfile() {
            $state.go('Profiles');
        }
        function cancelInterestEdit(index) {
            if (index === 'new') {
                vm.newInterest = { name: '' };
            }
            else {
                vm.profile.interests[index] = vm.interestsEdit[index];
            }
            vm.interestsEdit[index] = null;
        }
        function saveInterest(index) {
            if (index === 'new') {
                vm.profile.interests.push(vm.newInterest);
                vm.newInterest = { name: '' };
            }
            vm.interestsEdit[index] = null;
        }
        function deleteInterest(index) {
            try {
                if (index === undefined) {
                    throw ('You\'re trying to delete an interest that doesn\'t exist');
                }
                if (confirm('Are you sure you want to delete this interest?')) {
                    vm.profile.interests.splice(index, 1);
                }
            }
            catch (e) {
                console.warn(e);
            }
        }
        function editInterest(index) {
            if (index === undefined) {
                throw ('You\'re trying to edit an interest that doesn\'t exist');
            }
            if (index === 'new')
                vm.interestsEdit.new = true;
            else
                vm.interestsEdit[index] = JSON.parse(JSON.stringify(vm.profile.interests[index]));
        }
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy9hZGQvcHJvZmlsZXMtYWRkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxDQUFDO0lBQ0EsWUFBWSxDQUFDO0lBRWIsT0FBTztTQUNMLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztTQUMzQixTQUFTLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBRWpDO1FBQ0MsTUFBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLEdBQUc7WUFDYixXQUFXLEVBQUUseURBQXlEO1lBQ3RFLFVBQVUsRUFBRSxHQUFHO1lBQ2YsWUFBWSxFQUFFLElBQUk7WUFDbEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxnQkFBZ0IsRUFBRSxJQUFJO1NBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUQsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRTNDLGFBQWEsTUFBTSxFQUFFLGNBQWM7UUFDbEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRWQsRUFBRSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDN0IsRUFBRSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzNDLEVBQUUsQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUN6QyxFQUFFLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUMvQixFQUFFLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNuQyxFQUFFLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUMvQixFQUFFLENBQUMsV0FBVyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxPQUFPLEdBQUc7WUFDWixJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsWUFBWSxFQUFFLDBCQUEwQjtZQUN4QyxTQUFTLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFDRixFQUFFLENBQUMsYUFBYSxH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cHAvcHJvZmlsZXMvYWRkL3Byb2ZpbGVzLWFkZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXJcclxuXHRcdC5tb2R1bGUoJ0FwcFRocmVlLnByb2ZpbGVzJylcclxuXHRcdC5kaXJlY3RpdmUoJ2FkZCcsIEFkZERpcmVjdGl2ZSk7XHJcblx0XHJcblx0ZnVuY3Rpb24gQWRkRGlyZWN0aXZlKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICcvbmctdXBncmFkZS1hcHAvcHJvZmlsZXMvYWRkL3Byb2ZpbGVzLWFkZC50ZW1wbGF0ZS5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogQWRkLFxyXG5cdFx0XHRjb250cm9sbGVyQXM6ICd2bScsXHJcblx0XHRcdHNjb3BlOiB7fSxcclxuXHRcdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxyXG5cdFx0fTtcclxuXHR9XHJcblx0XHJcblx0QWRkLiRpbmplY3QgPSBbJyRzdGF0ZScsICdQcm9maWxlU2VydmljZSddO1xyXG5cdFxyXG5cdGZ1bmN0aW9uIEFkZCgkc3RhdGUsIFByb2ZpbGVTZXJ2aWNlKSB7XHJcblx0XHR2YXIgdm0gPSB0aGlzO1xyXG5cdFx0XHJcblx0XHR2bS5zYXZlUHJvZmlsZSA9IHNhdmVQcm9maWxlO1xyXG5cdFx0dm0uY2FuY2VsSW50ZXJlc3RFZGl0ID0gY2FuY2VsSW50ZXJlc3RFZGl0O1xyXG5cdFx0dm0uY2FuY2VsRWRpdFByb2ZpbGUgPSBjYW5jZWxFZGl0UHJvZmlsZTtcclxuXHRcdHZtLnNhdmVJbnRlcmVzdCA9IHNhdmVJbnRlcmVzdDtcclxuXHRcdHZtLmRlbGV0ZUludGVyZXN0ID0gZGVsZXRlSW50ZXJlc3Q7XHJcblx0XHR2bS5lZGl0SW50ZXJlc3QgPSBlZGl0SW50ZXJlc3Q7XHJcblx0XHR2bS5uZXdJbnRlcmVzdCA9IHtuYW1lOiAnJ307XHJcblx0XHR2bS5wcm9maWxlID0ge1xyXG5cdFx0XHRuYW1lOiAnRWxldmVudGggRG9jdG9yJyxcclxuXHRcdFx0YWdlOiAxMjQ1LFxyXG5cdFx0XHRmYXZvcml0ZUZvb2Q6ICdGaXNoIEZpbmdlcnMgYW5kIEN1c3RhcmQnLFxyXG5cdFx0XHRpbnRlcmVzdHM6IFtdXHJcblx0XHR9O1xyXG5cdFx0dm0uaW50ZXJlc3RzRWRpdCA9IFtdO1xyXG5cdFx0XHJcblx0XHR2bS5wcm9maWxlLmludGVyZXN0cy5uZXcgPSB7bmFtZTogJyd9O1xyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBzYXZlUHJvZmlsZSgpIHtcclxuXHRcdFx0UHJvZmlsZVNlcnZpY2VcclxuXHRcdFx0XHQuc2F2ZVByb2ZpbGUodm0ucHJvZmlsZSlcclxuXHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uIGFkZFByb2ZpbGVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRcdCRzdGF0ZS5nbygnUHJvZmlsZXMuVmlldycsIHtuZXdQcm9maWxlOiByZXNwb25zZSwgaWQ6IHJlc3BvbnNlLl9pZH0pO1xyXG5cdFx0XHRcdFx0fSwgZnVuY3Rpb24gYWRkUHJvZmlsZUVycm9yKGVycikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oZXJyKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBjYW5jZWxFZGl0UHJvZmlsZSgpIHtcclxuXHRcdFx0JHN0YXRlLmdvKCdQcm9maWxlcycpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBjYW5jZWxJbnRlcmVzdEVkaXQoaW5kZXgpIHtcclxuXHRcdFx0aWYgKGluZGV4ID09PSAnbmV3Jykge1xyXG5cdFx0XHRcdHZtLm5ld0ludGVyZXN0ID0ge25hbWU6ICcnfTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2bS5wcm9maWxlLmludGVyZXN0c1tpbmRleF0gPSB2bS5pbnRlcmVzdHNFZGl0W2luZGV4XTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2bS5pbnRlcmVzdHNFZGl0W2luZGV4XSA9IG51bGw7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIHNhdmVJbnRlcmVzdChpbmRleCkge1xyXG5cdFx0XHRpZiAoaW5kZXggPT09ICduZXcnKSB7XHJcblx0XHRcdFx0dm0ucHJvZmlsZS5pbnRlcmVzdHMucHVzaCh2bS5uZXdJbnRlcmVzdCk7XHJcblx0XHRcdFx0dm0ubmV3SW50ZXJlc3QgPSB7bmFtZTogJyd9O1xyXG5cdFx0XHR9XHJcblx0XHRcdHZtLmludGVyZXN0c0VkaXRbaW5kZXhdID0gbnVsbDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gZGVsZXRlSW50ZXJlc3QoaW5kZXgpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhyb3coJ1lvdVxcJ3JlIHRyeWluZyB0byBkZWxldGUgYW4gaW50ZXJlc3QgdGhhdCBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpbnRlcmVzdD8nKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dm0ucHJvZmlsZS5pbnRlcmVzdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gZWRpdEludGVyZXN0KGluZGV4KSB7XHJcblx0XHRcdGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0dGhyb3coJ1lvdVxcJ3JlIHRyeWluZyB0byBlZGl0IGFuIGludGVyZXN0IHRoYXQgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmIChpbmRleCA9PT0gJ25ldycpIFxyXG5cdFx0XHRcdHZtLmludGVyZXN0c0VkaXQubmV3ID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSB2bS5pbnRlcmVzdHNFZGl0W2luZGV4XSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodm0ucHJvZmlsZS5pbnRlcmVzdHNbaW5kZXhdKSk7XHJcblx0XHR9XHJcblx0fVxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
