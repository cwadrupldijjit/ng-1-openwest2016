System.register(['../adapter', './home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7WUFFQSxZQUFZLENBQUM7WUFFYixPQUFPO2lCQUNMLE1BQU0sQ0FBQyxlQUFlLENBQUM7aUJBQ3ZCLFNBQVMsQ0FBQyxNQUFNLEVBQXdCLHdCQUFjLENBQUMscUJBQXFCLENBQUMsOEJBQWEsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1cGdyYWRlQWRhcHRlciB9IGZyb20gJy4uL2FkYXB0ZXInO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXJcclxuXHQubW9kdWxlKCdBcHBUaHJlZS5ob21lJylcclxuXHQuZGlyZWN0aXZlKCdob21lJywgPG5nLklEaXJlY3RpdmVGYWN0b3J5PnVwZ3JhZGVBZGFwdGVyLmRvd25ncmFkZU5nMkNvbXBvbmVudChIb21lQ29tcG9uZW50KSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
