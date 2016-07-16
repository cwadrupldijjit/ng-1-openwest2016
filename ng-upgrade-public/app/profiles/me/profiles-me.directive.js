(function () {
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
        vm.newInterest = { name: '' };
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
                vm.newInterest = { name: '' };
                vm.interestsEdit[index] = '';
            }
            else {
                vm.profile.interests[index] = vm.interestsEdit[index];
                vm.interestsEdit[index] = '';
            }
        }
        function saveInterest(index) {
            var interest;
            if (index === 'new') {
                interest = vm.newInterest;
            }
            else {
                interest = vm.profile.interests[index];
            }
            console.log('dir', interest);
            ProfileService
                .saveInterest(interest, vm.profile._id, index)
                .then(function saveInterestSuccess(response) {
                if (index === 'new') {
                    vm.profile.interests.push(response);
                    vm.newInterest = { name: '' };
                }
                else {
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
                    throw ('You\'re trying to delete an interest that doesn\'t exist');
                }
                if (confirm('Are you sure you want to delete this interest?')) {
                    ProfileService
                        .deleteInterest(vm.profile.interests[index], vm.profile._id)
                        .then(function deleteInterestSuccess(response) {
                        vm.profile.interests.splice(index, 1);
                    }, function deleteInterestError(err) {
                        console.warn(err);
                    });
                }
            }
            catch (e) {
                alert(e);
            }
        }
        function editInterest(index) {
            try {
                if (index === undefined) {
                    throw ('You\'re trying to edit an interest that doesn\'t exist');
                }
                if (index === 'new')
                    vm.interestsEdit.new = 'true';
                else
                    vm.interestsEdit[index] = vm.profile.interests[index];
            }
            catch (e) {
                alert(e);
            }
        }
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy9tZS9wcm9maWxlcy1tZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsQ0FBQztJQUNBLFlBQVksQ0FBQztJQUViLE9BQU87U0FDTCxNQUFNLENBQUMsbUJBQW1CLENBQUM7U0FDM0IsU0FBUyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUUvQjtRQUNDLE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxHQUFHO1lBQ2IsV0FBVyxFQUFFLCtDQUErQztZQUM1RCxVQUFVLEVBQUUsRUFBRTtZQUNkLFlBQVksRUFBRSxJQUFJO1lBQ2xCLEtBQUssRUFBRSxFQUFFO1lBQ1QsZ0JBQWdCLEVBQUUsSUFBSTtTQUN0QixDQUFDO0lBQ0gsQ0FBQztJQUVELEVBQUUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUUxQyxZQUFZLE1BQU0sRUFBRSxjQUFjO1FBQ2pDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUVkLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDWCxFQUFFLENBQUMsV0FBVyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBRXRCLEVBQUUsQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUMzQyxFQUFFLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUMvQixFQUFFLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNuQyxFQUFFLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUUvQixLQUFLLEVBQUUsQ0FBQztRQUVSO1lBQ0MsY0FBYztpQkFDWixLQUFLLEVBQUU7aUJBQ04sSUFBSSxDQUFDLHNCQUFzQixRQUFRO2dCQUNuQyxFQUFFLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUN2QixDQUFDLEVBQUUsb0JBQW9CLEdBQUc7Z0JBQ3pCLE9BQU8sQ0FB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R0FBRyxDQUFDLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxDQUFBO2dCQUNMLENBQUM7WUFDRixDQUFFO1lBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0YsQ0FBQztRQUVELHNCQUFzQixLQUFLO1lBQzFCLElBQUksQ0FBQztnQkFDSixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7Z0JBQ2pFLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQztvQkFDbkIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO2dCQUMvQixJQUFJO29CQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUQsQ0FBRTtZQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNGLENBQUM7SUFDRixDQUFDO0FBQ0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJhcHAvcHJvZmlsZXMvbWUvcHJvZmlsZXMtbWUuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXJcclxuXHRcdC5tb2R1bGUoJ0FwcFRocmVlLnByb2ZpbGVzJylcclxuXHRcdC5kaXJlY3RpdmUoJ21lJywgTWVEaXJlY3RpdmUpO1xyXG5cdFxyXG5cdGZ1bmN0aW9uIE1lRGlyZWN0aXZlKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICcvbmctYXBwL3Byb2ZpbGVzL21lL3Byb2ZpbGVzLW1lLnRlbXBsYXRlLmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiBNZSxcclxuXHRcdFx0Y29udHJvbGxlckFzOiAndm0nLFxyXG5cdFx0XHRzY29wZToge30sXHJcblx0XHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcclxuXHRcdH07XHJcblx0fVxyXG5cdFxyXG5cdE1lLiRpbmplY3QgPSBbJyRzY29wZScsICdQcm9maWxlU2VydmljZSddO1xyXG5cdFxyXG5cdGZ1bmN0aW9uIE1lKCRzY29wZSwgUHJvZmlsZVNlcnZpY2UpIHtcclxuXHRcdHZhciB2bSA9IHRoaXM7XHJcblx0XHRcclxuXHRcdHZtLnByb2ZpbGU7XHJcblx0XHR2bS5uZXdJbnRlcmVzdCA9IHtuYW1lOiAnJ307XHJcblx0XHR2bS5pbnRlcmVzdHNFZGl0ID0gW107XHJcblx0XHRcclxuXHRcdHZtLmNhbmNlbEludGVyZXN0RWRpdCA9IGNhbmNlbEludGVyZXN0RWRpdDtcclxuXHRcdHZtLnNhdmVJbnRlcmVzdCA9IHNhdmVJbnRlcmVzdDtcclxuXHRcdHZtLmRlbGV0ZUludGVyZXN0ID0gZGVsZXRlSW50ZXJlc3Q7XHJcblx0XHR2bS5lZGl0SW50ZXJlc3QgPSBlZGl0SW50ZXJlc3Q7XHJcblx0XHRcclxuXHRcdGdldE1lKCk7XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIGdldE1lKCkge1xyXG5cdFx0XHRQcm9maWxlU2VydmljZVxyXG5cdFx0XHRcdC5nZXRNZSgpXHJcblx0XHRcdFx0XHQudGhlbihmdW5jdGlvbiBnZXRNZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdFx0dm0ucHJvZmlsZSA9IHJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0fSwgZnVuY3Rpb24gZ2V0TWVFcnJvcihlcnIpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBjYW5jZWxJbnRlcmVzdEVkaXQoaW5kZXgpIHtcclxuXHRcdFx0aWYgKGluZGV4ID09PSAnbmV3Jykge1xyXG5cdFx0XHRcdHZtLm5ld0ludGVyZXN0ID0ge25hbWU6ICcnfTtcclxuXHRcdFx0XHR2bS5pbnRlcmVzdHNFZGl0W2luZGV4XSA9ICcnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZtLnByb2ZpbGUuaW50ZXJlc3RzW2luZGV4XSA9IHZtLmludGVyZXN0c0VkaXRbaW5kZXhdO1xyXG5cdFx0XHRcdHZtLmludGVyZXN0c0VkaXRbaW5kZXhdID0gJyc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gc2F2ZUludGVyZXN0KGluZGV4KSB7XHJcblx0XHRcdHZhciBpbnRlcmVzdDtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChpbmRleCA9PT0gJ25ldycpIHtcclxuXHRcdFx0XHRpbnRlcmVzdCA9IHZtLm5ld0ludGVyZXN0O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGludGVyZXN0ID0gdm0ucHJvZmlsZS5pbnRlcmVzdHNbaW5kZXhdO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zb2xlLmxvZygnZGlyJywgaW50ZXJlc3QpO1xyXG5cdFx0XHRQcm9maWxlU2VydmljZVxyXG5cdFx0XHRcdC5zYXZlSW50ZXJlc3QoaW50ZXJlc3QsIHZtLnByb2ZpbGUuX2lkLCBpbmRleClcclxuXHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uIHNhdmVJbnRlcmVzdFN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGluZGV4ID09PSAnbmV3Jykge1xyXG5cdFx0XHRcdFx0XHRcdHZtLnByb2ZpbGUuaW50ZXJlc3RzLnB1c2gocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHZtLm5ld0ludGVyZXN0ID0ge25hbWU6ICcnfTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR2bS5wcm9maWxlLmludGVyZXN0c1tpbmRleF0gPSByZXNwb25zZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnaW5kZXgnLCBpbmRleCk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR2bS5pbnRlcmVzdHNFZGl0W2luZGV4XSA9ICcnO1xyXG5cdFx0XHRcdFx0fSwgZnVuY3Rpb24gc2F2ZUludGVyZXN0RXJyb3IoZXJyKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybihlcnIpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIGRlbGV0ZUludGVyZXN0KGluZGV4KSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdHRocm93KCdZb3VcXCdyZSB0cnlpbmcgdG8gZGVsZXRlIGFuIGludGVyZXN0IHRoYXQgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaW50ZXJlc3Q/JykpIHtcclxuXHRcdFx0XHRcdFByb2ZpbGVTZXJ2aWNlXHJcblx0XHRcdFx0XHRcdC5kZWxldGVJbnRlcmVzdCh2bS5wcm9maWxlLmludGVyZXN0c1tpbmRleF0sIHZtLnByb2ZpbGUuX2lkKVxyXG5cdFx0XHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uIGRlbGV0ZUludGVyZXN0U3VjY2VzcyhyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dm0ucHJvZmlsZS5pbnRlcmVzdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdFx0XHR9LCBmdW5jdGlvbiBkZWxldGVJbnRlcmVzdEVycm9yKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKGVycik7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRhbGVydChlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBlZGl0SW50ZXJlc3QoaW5kZXgpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0dGhyb3coJ1lvdVxcJ3JlIHRyeWluZyB0byBlZGl0IGFuIGludGVyZXN0IHRoYXQgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChpbmRleCA9PT0gJ25ldycpIFxyXG5cdFx0XHRcdFx0dm0uaW50ZXJlc3RzRWRpdC5uZXcgPSAndHJ1ZSc7XHJcblx0XHRcdFx0ZWxzZSB2bS5pbnRlcmVzdHNFZGl0W2luZGV4XSA9IHZtLnByb2ZpbGUuaW50ZXJlc3RzW2luZGV4XTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGFsZXJ0KGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
