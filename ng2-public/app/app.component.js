System.register(['angular2/core', 'angular2/router', './home/home.component', './profiles/profiles.component'], function(exports_1) {
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
            }],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC50b2dnbGVNYWluIiwiQXBwQ29tcG9uZW50LnJldHVyblRvTGFuZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUFBO29CQWNDQyxXQUFNQSxHQUFZQSxLQUFLQSxDQUFDQTtnQkFTekJBLENBQUNBO2dCQVBBRCxpQ0FBVUEsR0FBVkE7b0JBQ0NFLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO2dCQUM1QkEsQ0FBQ0E7Z0JBRURGLHNDQUFlQSxHQUFmQTtvQkFDQ0csTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQ0E7Z0JBQ2hDQSxDQUFDQTtnQkF0QkZIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLEtBQUtBO3FCQUNmQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLDRCQUE0QkE7d0JBQ3pDQSxVQUFVQSxFQUFFQTs0QkFDWEEsMEJBQWlCQTt5QkFDakJBO3FCQUNEQSxDQUFDQTtvQkFDREEsb0JBQVdBLENBQUNBO3dCQUNaQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFNQSxTQUFTQSxFQUFFQSw4QkFBYUEsRUFBR0EsRUFBRUEsRUFBRUEsTUFBTUEsRUFBS0EsWUFBWUEsRUFBRUEsSUFBSUEsRUFBQ0E7d0JBQzlFQSxFQUFFQSxJQUFJQSxFQUFFQSxlQUFlQSxFQUFFQSxTQUFTQSxFQUFFQSxzQ0FBaUJBLEVBQUdBLEVBQUVBLEVBQUVBLFVBQVVBLEVBQUVBO3FCQUN4RUEsQ0FBQ0E7O2lDQVdEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBdkJBLEFBdUJDQSxJQUFBO1lBRVEsdUNBQVkiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2ZpbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWxlcy9wcm9maWxlcy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAnXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybDogJy9uZzItYXBwL2FwcC50ZW1wbGF0ZS5odG1sJyxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblx0XHRST1VURVJfRElSRUNUSVZFU1xyXG5cdF1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IHBhdGg6ICcvJywgXHRcdFx0IGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcdFx0YXM6ICdIb21lJywgXHQgIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcblx0eyBwYXRoOiAnL3Byb2ZpbGVzLy4uLicsIGNvbXBvbmVudDogUHJvZmlsZXNDb21wb25lbnQsICBhczogJ1Byb2ZpbGVzJyB9LFxyXG5dKVxyXG5jbGFzcyBBcHBDb21wb25lbnQge1xyXG5cdGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFxyXG5cdHRvZ2dsZU1haW4oKSB7XHJcblx0XHR0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuVG9MYW5kaW5nKCkge1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHsgQXBwQ29tcG9uZW50IH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
