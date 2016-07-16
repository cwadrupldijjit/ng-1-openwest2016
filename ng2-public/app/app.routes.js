System.register(['@angular/router', './home/home.component', './profiles/profiles.routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, profiles_routes_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (profiles_routes_1_1) {
                profiles_routes_1 = profiles_routes_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = profiles_routes_1.ProfilesRoutes.concat([
                { path: '', component: home_component_1.HomeComponent }
            ]));
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFJYSxNQUFNLEVBS04sb0JBQW9COzs7Ozs7Ozs7Ozs7O1lBTHBCLG9CQUFBLE1BQU0sR0FDZixnQ0FBYztnQkFDakIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFLLFNBQVMsRUFBRSw4QkFBYSxFQUFFO2NBQ3hDLENBQUEsQ0FBQztZQUVXLGtDQUFBLG9CQUFvQixHQUFHO2dCQUNuQyxzQkFBYSxDQUFDLE1BQU0sQ0FBQzthQUNyQixDQUFBLENBQUMiLCJmaWxlIjoiYXBwL2FwcC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm92aWRlUm91dGVyLCBSb3V0ZXJDb25maWcgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZmlsZXNSb3V0ZXMgfSBmcm9tICcuL3Byb2ZpbGVzL3Byb2ZpbGVzLnJvdXRlcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXHJcblx0Li4uUHJvZmlsZXNSb3V0ZXMsXHJcblx0e3BhdGg6ICcnLCBcdFx0XHRjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVJfUFJPVklERVJTID0gW1xyXG5cdHByb3ZpZGVSb3V0ZXIocm91dGVzKVxyXG5dOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
