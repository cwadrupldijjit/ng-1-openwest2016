System.register(['angular2/core', 'angular2/router', './home/home.component', './profiles/profiles.component', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, profiles_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (profiles_component_1_1) {
                profiles_component_1 = profiles_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.isOpen = false;
                }
                AppComponent.prototype.toggleMain = function () {
                    this.isOpen = !this.isOpen;
                };
                AppComponent.prototype.returnToLanding = function () {
                    window.location.pathname = '/';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app'
                    }),
                    core_1.View({
                        templateUrl: '/ng2-app/app.template.html',
                        styleUrls: [
                            'ng2-app/app.styles.css'
                        ],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: home_component_1.HomeComponent, as: 'Home', useAsDefault: true },
                        { path: '/profiles/...', component: profiles_component_1.ProfilesComponent, as: 'Profiles' },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC50b2dnbGVNYWluIiwiQXBwQ29tcG9uZW50LnJldHVyblRvTGFuZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtvQkFpQkNDLFdBQU1BLEdBQVlBLEtBQUtBLENBQUNBO2dCQVN6QkEsQ0FBQ0E7Z0JBUEFELGlDQUFVQSxHQUFWQTtvQkFDQ0UsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7Z0JBQzVCQSxDQUFDQTtnQkFFREYsc0NBQWVBLEdBQWZBO29CQUNDRyxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxRQUFRQSxHQUFHQSxHQUFHQSxDQUFDQTtnQkFDaENBLENBQUNBO2dCQXpCRkg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsS0FBS0E7cUJBQ2ZBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBRUEsNEJBQTRCQTt3QkFDekNBLFNBQVNBLEVBQUVBOzRCQUNWQSx3QkFBd0JBO3lCQUN4QkE7d0JBQ0RBLFVBQVVBLEVBQUVBOzRCQUNYQSwwQkFBaUJBO3lCQUNqQkE7cUJBQ0RBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQU1BLFNBQVNBLEVBQUVBLDhCQUFhQSxFQUFHQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFLQSxZQUFZQSxFQUFFQSxJQUFJQSxFQUFDQTt3QkFDOUVBLEVBQUVBLElBQUlBLEVBQUVBLGVBQWVBLEVBQUVBLFNBQVNBLEVBQUVBLHNDQUFpQkEsRUFBR0EsRUFBRUEsRUFBRUEsVUFBVUEsRUFBRUE7cUJBQ3hFQSxDQUFDQTs7aUNBV0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0ExQkEsQUEwQkNBLElBQUE7WUFFUSx1Q0FBWSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZmlsZXNDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGVzL3Byb2ZpbGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwJ1xyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmw6ICcvbmcyLWFwcC9hcHAudGVtcGxhdGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnbmcyLWFwcC9hcHAuc3R5bGVzLmNzcydcclxuXHRdLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTXHJcblx0XVxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG5cdHsgcGF0aDogJy8nLCBcdFx0XHQgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFx0XHRhczogJ0hvbWUnLCBcdCAgdXNlQXNEZWZhdWx0OiB0cnVlfSxcclxuXHR7IHBhdGg6ICcvcHJvZmlsZXMvLi4uJywgY29tcG9uZW50OiBQcm9maWxlc0NvbXBvbmVudCwgIGFzOiAnUHJvZmlsZXMnIH0sXHJcbl0pXHJcbmNsYXNzIEFwcENvbXBvbmVudCB7XHJcblx0aXNPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHJcblx0dG9nZ2xlTWFpbigpIHtcclxuXHRcdHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm5Ub0xhbmRpbmcoKSB7XHJcblx0XHR3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSAnLyc7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgeyBBcHBDb21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
