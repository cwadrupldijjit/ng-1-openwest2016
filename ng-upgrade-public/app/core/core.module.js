(function () {
    "use strict";
    angular
        .module('AppThree.core', [
        /* 3rd-party modules */
        'ui.router'
    ])
        .config(routeConfig);
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('Home', {
            url: '/',
            template: '<home></home>'
        })
            .state('Profiles', {
            url: '/profiles',
            template: '<profiles></profiles>'
        })
            .state('Profiles.Me', {
            url: '/me',
            template: '<me></me>'
        })
            .state('Profiles.Add', {
            url: '/add',
            template: '<add></add>'
        })
            .state('Profiles.View', {
            url: '/:id',
            template: '<profile-view></profile-view>'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLENBQUM7SUFDQSxZQUFZLENBQUM7SUFFYixPQUFPO1NBQ0wsTUFBTSxDQUFDLGVBQWUsRUFBRTtRQUN4Qix1QkFBdUI7UUFDdkIsV0FBVztLQUNYLENBQUM7U0FDRCxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFdEIsV0FBVyxDQUFDLE9BQU8sR0FBRyxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFFcEYscUJBQXFCLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUI7UUFDekUsY0FBYzthQUNaLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDZCxHQUFHLEVBQUUsR0FBRztZQUNSLFFBQVEsRUFBRSxlQUFlO1NBQ3pCLENBQUM7YUFFRCxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ2xCLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLFFBQVEsRUFBRSx1QkFBdUI7U0FDakMsQ0FBQzthQUNBLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDckIsR0FBRyxFQUFFLEtBQUs7WUFDVixRQUFRLEVBQUUsV0FBVztTQUNyQixDQUFDO2FBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUN0QixHQUFHLEVBQUUsTUFBTTtZQUNYLFFBQVEsRUFBRSxhQUFhO1NBQ3ZCLENBQUM7YUFDRCxLQUFLLENBQUMsZUFBZSxFQUFFO1lBQ3ZCLEdBQUcsRUFBRSxNQUFNO1lBQ1gsUUFBUSxFQUFFLCtCQUErQjtTQUN6QyxDQUFDLENBQUM7UUFFTCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7QUFDRixDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImFwcC9jb3JlL2NvcmUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHRcclxuXHRhbmd1bGFyXHJcblx0XHQubW9kdWxlKCdBcHBUaHJlZS5jb3JlJywgW1xyXG5cdFx0XHQvKiAzcmQtcGFydHkgbW9kdWxlcyAqL1xyXG5cdFx0XHQndWkucm91dGVyJ1xyXG5cdFx0XSlcclxuXHRcdC5jb25maWcocm91dGVDb25maWcpO1xyXG5cdFxyXG5cdHJvdXRlQ29uZmlnLiRpbmplY3QgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckbG9jYXRpb25Qcm92aWRlciddO1xyXG5cdFxyXG5cdGZ1bmN0aW9uIHJvdXRlQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcblx0XHQkc3RhdGVQcm92aWRlclxyXG5cdFx0XHQuc3RhdGUoJ0hvbWUnLCB7XHJcblx0XHRcdFx0dXJsOiAnLycsXHJcblx0XHRcdFx0dGVtcGxhdGU6ICc8aG9tZT48L2hvbWU+J1xyXG5cdFx0XHR9KVxyXG5cdFx0XHRcclxuXHRcdFx0LnN0YXRlKCdQcm9maWxlcycsIHtcclxuXHRcdFx0XHR1cmw6ICcvcHJvZmlsZXMnLFxyXG5cdFx0XHRcdHRlbXBsYXRlOiAnPHByb2ZpbGVzPjwvcHJvZmlsZXM+J1xyXG5cdFx0XHR9KVxyXG5cdFx0XHRcdC5zdGF0ZSgnUHJvZmlsZXMuTWUnLCB7XHJcblx0XHRcdFx0XHR1cmw6ICcvbWUnLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8bWU+PC9tZT4nXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuc3RhdGUoJ1Byb2ZpbGVzLkFkZCcsIHtcclxuXHRcdFx0XHRcdHVybDogJy9hZGQnLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8YWRkPjwvYWRkPidcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5zdGF0ZSgnUHJvZmlsZXMuVmlldycsIHtcclxuXHRcdFx0XHRcdHVybDogJy86aWQnLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8cHJvZmlsZS12aWV3PjwvcHJvZmlsZS12aWV3PidcclxuXHRcdFx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xyXG5cdFx0XHJcblx0XHQkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XHJcblx0fVxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
