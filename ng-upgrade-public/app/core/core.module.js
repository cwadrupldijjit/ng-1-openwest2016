(function () {
    "use strict";
    console.log('core');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbInJvdXRlQ29uZmlnIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFDO0lBQ0EsWUFBWSxDQUFDO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixPQUFPO1NBQ0wsTUFBTSxDQUFDLGVBQWUsRUFBRTtRQUN4Qix1QkFBdUI7UUFDdkIsV0FBVztLQUNYLENBQUM7U0FDRCxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFdEIsV0FBVyxDQUFDLE9BQU8sR0FBRyxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFFcEYscUJBQXFCLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUI7UUFDekVBLGNBQWNBO2FBQ1pBLEtBQUtBLENBQUNBLE1BQU1BLEVBQUVBO1lBQ2RBLEdBQUdBLEVBQUVBLEdBQUdBO1lBQ1JBLFFBQVFBLEVBQUVBLGVBQWVBO1NBQ3pCQSxDQUFDQTthQUVEQSxLQUFLQSxDQUFDQSxVQUFVQSxFQUFFQTtZQUNsQkEsR0FBR0EsRUFBRUEsV0FBV0E7WUFDaEJBLFFBQVFBLEVBQUVBLHVCQUF1QkE7U0FDakNBLENBQUNBO2FBQ0FBLEtBQUtBLENBQUNBLGFBQWFBLEVBQUVBO1lBQ3JCQSxHQUFHQSxFQUFFQSxLQUFLQTtZQUNWQSxRQUFRQSxFQUFFQSxXQUFXQTtTQUNyQkEsQ0FBQ0E7YUFDREEsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUE7WUFDdEJBLEdBQUdBLEVBQUVBLE1BQU1BO1lBQ1hBLFFBQVFBLEVBQUVBLGFBQWFBO1NBQ3ZCQSxDQUFDQTthQUNEQSxLQUFLQSxDQUFDQSxlQUFlQSxFQUFFQTtZQUN2QkEsR0FBR0EsRUFBRUEsTUFBTUE7WUFDWEEsUUFBUUEsRUFBRUEsK0JBQStCQTtTQUN6Q0EsQ0FBQ0EsQ0FBQ0E7UUFFTEEsa0JBQWtCQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUVsQ0EsaUJBQWlCQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNuQ0EsQ0FBQ0E7QUFDRixDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImFwcC9jb3JlL2NvcmUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHRjb25zb2xlLmxvZygnY29yZScpO1xyXG5cdGFuZ3VsYXJcclxuXHRcdC5tb2R1bGUoJ0FwcFRocmVlLmNvcmUnLCBbXHJcblx0XHRcdC8qIDNyZC1wYXJ0eSBtb2R1bGVzICovXHJcblx0XHRcdCd1aS5yb3V0ZXInXHJcblx0XHRdKVxyXG5cdFx0LmNvbmZpZyhyb3V0ZUNvbmZpZyk7XHJcblx0XHJcblx0cm91dGVDb25maWcuJGluamVjdCA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgJyRsb2NhdGlvblByb3ZpZGVyJ107XHJcblx0XHJcblx0ZnVuY3Rpb24gcm91dGVDb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcclxuXHRcdCRzdGF0ZVByb3ZpZGVyXHJcblx0XHRcdC5zdGF0ZSgnSG9tZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZTogJzxob21lPjwvaG9tZT4nXHJcblx0XHRcdH0pXHJcblx0XHRcdFxyXG5cdFx0XHQuc3RhdGUoJ1Byb2ZpbGVzJywge1xyXG5cdFx0XHRcdHVybDogJy9wcm9maWxlcycsXHJcblx0XHRcdFx0dGVtcGxhdGU6ICc8cHJvZmlsZXM+PC9wcm9maWxlcz4nXHJcblx0XHRcdH0pXHJcblx0XHRcdFx0LnN0YXRlKCdQcm9maWxlcy5NZScsIHtcclxuXHRcdFx0XHRcdHVybDogJy9tZScsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxtZT48L21lPidcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5zdGF0ZSgnUHJvZmlsZXMuQWRkJywge1xyXG5cdFx0XHRcdFx0dXJsOiAnL2FkZCcsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxhZGQ+PC9hZGQ+J1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnN0YXRlKCdQcm9maWxlcy5WaWV3Jywge1xyXG5cdFx0XHRcdFx0dXJsOiAnLzppZCcsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxwcm9maWxlLXZpZXc+PC9wcm9maWxlLXZpZXc+J1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XHJcblx0XHRcclxuXHRcdCRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcclxuXHR9XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
