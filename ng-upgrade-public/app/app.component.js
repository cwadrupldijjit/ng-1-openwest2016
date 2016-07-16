(function () {
    'use strict';
    angular
        .module('AppThree')
        .component('app', {
        controller: getController(),
        controllerAs: 'vm',
        templateUrl: '/ng-upgrade-app/app.template.html'
    });
    function getController() {
        var AppController = (function () {
            function AppController() {
                this.isOpen = false;
            }
            AppController.prototype.toggleMain = function () {
                this.isOpen = !this.isOpen;
            };
            AppController.prototype.returnToLanding = function () {
                window.location.pathname = '/';
            };
            return AppController;
        }());
        AppController.$inject = ['$window', '$scope'];
        return AppController;
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLENBQUM7SUFDQSxZQUFZLENBQUM7SUFFYixPQUFPO1NBQ0wsTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUNsQixTQUFTLENBQUMsS0FBSyxFQUFFO1FBQ2pCLFVBQVUsRUFBRSxhQUFhLEVBQUU7UUFDM0IsWUFBWSxFQUFFLElBQUk7UUFDbEIsV0FBVyxFQUFFLG1DQUFtQztLQUNoRCxDQUFDLENBQUM7SUFFSjtRQUNDO1lBQUE7Z0JBQ0MsV0FBTSxHQUFZLEtBQUssQ0FBQztZQVN6QixDQUFDO1lBUEEsa0NBQVUsR0FBVjtnQkFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1QixDQUFDO1lBRUQsdUNBQWUsR0FBZjtnQkFDQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDaEMsQ0FBQztZQUNGLG9CQUFDO1FBQUQsQ0FWQSxBQVVDLElBQUE7UUFFRCxhQUFhLENBQUMsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDdEIsQ0FBQztBQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXJcclxuXHRcdC5tb2R1bGUoJ0FwcFRocmVlJylcclxuXHRcdC5jb21wb25lbnQoJ2FwcCcsIHtcclxuXHRcdFx0Y29udHJvbGxlcjogZ2V0Q29udHJvbGxlcigpLFxyXG5cdFx0XHRjb250cm9sbGVyQXM6ICd2bScsXHJcblx0XHRcdHRlbXBsYXRlVXJsOiAnL25nLXVwZ3JhZGUtYXBwL2FwcC50ZW1wbGF0ZS5odG1sJ1xyXG5cdFx0fSk7XHJcblx0XHJcblx0ZnVuY3Rpb24gZ2V0Q29udHJvbGxlcigpIHtcclxuXHRcdGNsYXNzIEFwcENvbnRyb2xsZXIge1xyXG5cdFx0XHRpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdFx0XHJcblx0XHRcdHRvZ2dsZU1haW4oKSB7XHJcblx0XHRcdFx0dGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHJldHVyblRvTGFuZGluZygpIHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSAnLyc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0QXBwQ29udHJvbGxlci4kaW5qZWN0ID0gWyckd2luZG93JywgJyRzY29wZSddO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gQXBwQ29udHJvbGxlcjtcclxuXHR9XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
