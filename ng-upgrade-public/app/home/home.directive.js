System.register(['../boot', './home.component'], function(exports_1) {
    'use strict';
    var boot_1, home_component_1;
    return {
        setters:[
            function (boot_1_1) {
                boot_1 = boot_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            angular
                .module('AppThree.home')
                .directive('home', boot_1.upgradeAdapter.downgradeNg2Component(home_component_1.HomeComponent));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O1lBSWIsT0FBTztpQkFDTCxNQUFNLENBQUMsZUFBZSxDQUFDO2lCQUN2QixTQUFTLENBQUMsTUFBTSxFQUFFLHFCQUFjLENBQUMscUJBQXFCLENBQUMsOEJBQWEsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmltcG9ydCB7IHVwZ3JhZGVBZGFwdGVyIH0gZnJvbSAnLi4vYm9vdCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcclxuXHJcbmFuZ3VsYXJcclxuXHQubW9kdWxlKCdBcHBUaHJlZS5ob21lJylcclxuXHQuZGlyZWN0aXZlKCdob21lJywgdXBncmFkZUFkYXB0ZXIuZG93bmdyYWRlTmcyQ29tcG9uZW50KEhvbWVDb21wb25lbnQpKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
