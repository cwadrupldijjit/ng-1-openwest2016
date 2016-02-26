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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbInJvdXRlQ29uZmlnIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFDO0lBQ0EsWUFBWSxDQUFDO0lBRWIsT0FBTztTQUNMLE1BQU0sQ0FBQyxlQUFlLEVBQUU7UUFDeEIsdUJBQXVCO1FBQ3ZCLFdBQVc7S0FDWCxDQUFDO1NBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXRCLFdBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBRXBGLHFCQUFxQixjQUFjLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCO1FBQ3pFQSxjQUFjQTthQUNaQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQTtZQUNkQSxHQUFHQSxFQUFFQSxHQUFHQTtZQUNSQSxRQUFRQSxFQUFFQSxlQUFlQTtTQUN6QkEsQ0FBQ0E7YUFFREEsS0FBS0EsQ0FBQ0EsVUFBVUEsRUFBRUE7WUFDbEJBLEdBQUdBLEVBQUVBLFdBQVdBO1lBQ2hCQSxRQUFRQSxFQUFFQSx1QkFBdUJBO1NBQ2pDQSxDQUFDQTthQUNBQSxLQUFLQSxDQUFDQSxhQUFhQSxFQUFFQTtZQUNyQkEsR0FBR0EsRUFBRUEsS0FBS0E7WUFDVkEsUUFBUUEsRUFBRUEsV0FBV0E7U0FDckJBLENBQUNBO2FBQ0RBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBO1lBQ3RCQSxHQUFHQSxFQUFFQSxNQUFNQTtZQUNYQSxRQUFRQSxFQUFFQSxhQUFhQTtTQUN2QkEsQ0FBQ0E7YUFDREEsS0FBS0EsQ0FBQ0EsZUFBZUEsRUFBRUE7WUFDdkJBLEdBQUdBLEVBQUVBLE1BQU1BO1lBQ1hBLFFBQVFBLEVBQUVBLCtCQUErQkE7U0FDekNBLENBQUNBLENBQUNBO1FBRUxBLGtCQUFrQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFFbENBLGlCQUFpQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDbkNBLENBQUNBO0FBQ0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJhcHAvY29yZS9jb3JlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0XHJcblx0YW5ndWxhclxyXG5cdFx0Lm1vZHVsZSgnQXBwVGhyZWUuY29yZScsIFtcclxuXHRcdFx0LyogM3JkLXBhcnR5IG1vZHVsZXMgKi9cclxuXHRcdFx0J3VpLnJvdXRlcidcclxuXHRcdF0pXHJcblx0XHQuY29uZmlnKHJvdXRlQ29uZmlnKTtcclxuXHRcclxuXHRyb3V0ZUNvbmZpZy4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCAnJGxvY2F0aW9uUHJvdmlkZXInXTtcclxuXHRcclxuXHRmdW5jdGlvbiByb3V0ZUNvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG5cdFx0JHN0YXRlUHJvdmlkZXJcclxuXHRcdFx0LnN0YXRlKCdIb21lJywge1xyXG5cdFx0XHRcdHVybDogJy8nLFxyXG5cdFx0XHRcdHRlbXBsYXRlOiAnPGhvbWU+PC9ob21lPidcclxuXHRcdFx0fSlcclxuXHRcdFx0XHJcblx0XHRcdC5zdGF0ZSgnUHJvZmlsZXMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3Byb2ZpbGVzJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZTogJzxwcm9maWxlcz48L3Byb2ZpbGVzPidcclxuXHRcdFx0fSlcclxuXHRcdFx0XHQuc3RhdGUoJ1Byb2ZpbGVzLk1lJywge1xyXG5cdFx0XHRcdFx0dXJsOiAnL21lJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPG1lPjwvbWU+J1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnN0YXRlKCdQcm9maWxlcy5BZGQnLCB7XHJcblx0XHRcdFx0XHR1cmw6ICcvYWRkJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGFkZD48L2FkZD4nXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuc3RhdGUoJ1Byb2ZpbGVzLlZpZXcnLCB7XHJcblx0XHRcdFx0XHR1cmw6ICcvOmlkJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPHByb2ZpbGUtdmlldz48L3Byb2ZpbGUtdmlldz4nXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcclxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxuXHRcdFxyXG5cdFx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xyXG5cdH1cclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
