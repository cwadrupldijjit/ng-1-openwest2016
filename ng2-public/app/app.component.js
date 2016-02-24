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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC50b2dnbGVNYWluIiwiQXBwQ29tcG9uZW50LnJldHVyblRvTGFuZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtvQkFjQ0MsV0FBTUEsR0FBWUEsS0FBS0EsQ0FBQ0E7Z0JBU3pCQSxDQUFDQTtnQkFQQUQsaUNBQVVBLEdBQVZBO29CQUNDRSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtnQkFDNUJBLENBQUNBO2dCQUVERixzQ0FBZUEsR0FBZkE7b0JBQ0NHLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUNBO2dCQUNoQ0EsQ0FBQ0E7Z0JBdEJGSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxLQUFLQTtxQkFDZkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxXQUFXQSxFQUFFQSw0QkFBNEJBO3dCQUN6Q0EsVUFBVUEsRUFBRUE7NEJBQ1hBLDBCQUFpQkE7eUJBQ2pCQTtxQkFDREEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDWkEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBTUEsU0FBU0EsRUFBRUEsOEJBQWFBLEVBQUdBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUtBLFlBQVlBLEVBQUVBLElBQUlBLEVBQUNBO3dCQUM5RUEsRUFBRUEsSUFBSUEsRUFBRUEsZUFBZUEsRUFBRUEsU0FBU0EsRUFBRUEsc0NBQWlCQSxFQUFHQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFFQTtxQkFDeEVBLENBQUNBOztpQ0FXREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQXZCQSxBQXVCQ0EsSUFBQTtZQUVRLHVDQUFZIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9maWxlc0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZmlsZXMvcHJvZmlsZXMuY29tcG9uZW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAnXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybDogJy9uZzItYXBwL2FwcC50ZW1wbGF0ZS5odG1sJyxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblx0XHRST1VURVJfRElSRUNUSVZFU1xyXG5cdF1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IHBhdGg6ICcvJywgXHRcdFx0IGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcdFx0YXM6ICdIb21lJywgXHQgIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcblx0eyBwYXRoOiAnL3Byb2ZpbGVzLy4uLicsIGNvbXBvbmVudDogUHJvZmlsZXNDb21wb25lbnQsICBhczogJ1Byb2ZpbGVzJyB9LFxyXG5dKVxyXG5jbGFzcyBBcHBDb21wb25lbnQge1xyXG5cdGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFxyXG5cdHRvZ2dsZU1haW4oKSB7XHJcblx0XHR0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuVG9MYW5kaW5nKCkge1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHsgQXBwQ29tcG9uZW50IH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
