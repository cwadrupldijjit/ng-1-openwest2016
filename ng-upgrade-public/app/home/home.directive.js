System.register(['../adapter', './home.component'], function(exports_1) {
    var adapter_1, home_component_1;
    return {
        setters:[
            function (adapter_1_1) {
                adapter_1 = adapter_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            'use strict';
            angular
                .module('AppThree.home')
                .directive('home', adapter_1.upgradeAdapter.downgradeNg2Component(home_component_1.HomeComponent));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBRUEsWUFBWSxDQUFDO1lBRWIsT0FBTztpQkFDTCxNQUFNLENBQUMsZUFBZSxDQUFDO2lCQUN2QixTQUFTLENBQUMsTUFBTSxFQUFFLHdCQUFjLENBQUMscUJBQXFCLENBQUMsOEJBQWEsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1cGdyYWRlQWRhcHRlciB9IGZyb20gJy4uL2FkYXB0ZXInO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXJcclxuXHQubW9kdWxlKCdBcHBUaHJlZS5ob21lJylcclxuXHQuZGlyZWN0aXZlKCdob21lJywgdXBncmFkZUFkYXB0ZXIuZG93bmdyYWRlTmcyQ29tcG9uZW50KEhvbWVDb21wb25lbnQpKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
