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
            console.log('help');
            angular
                .module('AppThree.home')
                .directive('home', adapter_1.upgradeAdapter.downgradeNg2Component(home_component_1.HomeComponent));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBRUEsWUFBWSxDQUFDO1lBRWIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUVuQixPQUFPO2lCQUNMLE1BQU0sQ0FBQyxlQUFlLENBQUM7aUJBQ3ZCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsd0JBQWMsQ0FBQyxxQkFBcUIsQ0FBQyw4QkFBYSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVwZ3JhZGVBZGFwdGVyIH0gZnJvbSAnLi4vYWRhcHRlcic7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc29sZS5sb2coJ2hlbHAnKVxyXG5cclxuYW5ndWxhclxyXG5cdC5tb2R1bGUoJ0FwcFRocmVlLmhvbWUnKVxyXG5cdC5kaXJlY3RpdmUoJ2hvbWUnLCB1cGdyYWRlQWRhcHRlci5kb3duZ3JhZGVOZzJDb21wb25lbnQoSG9tZUNvbXBvbmVudCkpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
