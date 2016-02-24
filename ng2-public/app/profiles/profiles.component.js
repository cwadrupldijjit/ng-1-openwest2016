System.register(['angular2/core', 'angular2/router', './no-profile/no-profile.component', './me/profiles-me.component', './add/profiles-add.component', './view/profiles-view.component', '../services/profile.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, no_profile_component_1, profiles_me_component_1, profiles_add_component_1, profiles_view_component_1, profile_service_1;
    var ProfilesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (no_profile_component_1_1) {
                no_profile_component_1 = no_profile_component_1_1;
            },
            function (profiles_me_component_1_1) {
                profiles_me_component_1 = profiles_me_component_1_1;
            },
            function (profiles_add_component_1_1) {
                profiles_add_component_1 = profiles_add_component_1_1;
            },
            function (profiles_view_component_1_1) {
                profiles_view_component_1 = profiles_view_component_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            }],
        execute: function() {
            ProfilesComponent = (function () {
                function ProfilesComponent(ProfileService) {
                    this.ProfileService = ProfileService;
                    this.profiles = [];
                    this.isShowing = false;
                }
                ProfilesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.ProfileService.getCurrentProfiles()
                        .subscribe(function (response) { _this.profiles = response; }, function (err) { return console.warn(err); });
                };
                ProfilesComponent.prototype.toggleProfiles = function () {
                    this.isShowing = !this.isShowing;
                };
                ProfilesComponent = __decorate([
                    core_1.Component({
                        selector: 'profiles',
                        providers: [
                            profile_service_1.ProfileService
                        ]
                    }),
                    core_1.View({
                        templateUrl: '/ng2-app/profiles/profiles.template.html',
                        styleUrls: [
                            'ng2-app/profiles/profiles.styles.css'
                        ],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: no_profile_component_1.NoProfileComponent, as: 'NoProfile', useAsDefault: true },
                        { path: '/me', component: profiles_me_component_1.MeComponent, as: 'Me' },
                        { path: '/view/:id', component: profiles_view_component_1.ViewProfileComponent, as: 'View' },
                        { path: '/add', component: profiles_add_component_1.AddProfileComponent, as: 'Add' },
                    ]), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService])
                ], ProfilesComponent);
                return ProfilesComponent;
            })();
            exports_1("ProfilesComponent", ProfilesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy9wcm9maWxlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiUHJvZmlsZXNDb21wb25lbnQiLCJQcm9maWxlc0NvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlByb2ZpbGVzQ29tcG9uZW50Lm5nT25Jbml0IiwiUHJvZmlsZXNDb21wb25lbnQudG9nZ2xlUHJvZmlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQXlCQ0EsMkJBQW1CQSxjQUE4QkE7b0JBQTlCQyxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBZ0JBO29CQUhqREEsYUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7b0JBQ2RBLGNBQVNBLEdBQVlBLEtBQUtBLENBQUNBO2dCQUV5QkEsQ0FBQ0E7Z0JBRXJERCxvQ0FBUUEsR0FBUkE7b0JBQUFFLGlCQUlDQTtvQkFIQUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0Esa0JBQWtCQSxFQUFFQTt5QkFDdENBLFNBQVNBLENBQUNBLFVBQUNBLFFBQVFBLElBQU1BLEtBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUFBLENBQUFBLENBQUNBLEVBQzlDQSxVQUFDQSxHQUFHQSxJQUFLQSxPQUFBQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFqQkEsQ0FBaUJBLENBQUNBLENBQUNBO2dCQUNuQ0EsQ0FBQ0E7Z0JBRURGLDBDQUFjQSxHQUFkQTtvQkFDQ0csSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7Z0JBQ2xDQSxDQUFDQTtnQkFuQ0ZIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLFVBQVVBO3dCQUNwQkEsU0FBU0EsRUFBRUE7NEJBQ1ZBLGdDQUFjQTt5QkFDZEE7cUJBQ0RBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBRUEsMENBQTBDQTt3QkFDdkRBLFNBQVNBLEVBQUVBOzRCQUNWQSxzQ0FBc0NBO3lCQUN0Q0E7d0JBQ0RBLFVBQVVBLEVBQUVBOzRCQUNYQSwwQkFBaUJBO3lCQUNqQkE7cUJBQ0RBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUtBLFNBQVNBLEVBQUVBLHlDQUFrQkEsRUFBSUEsRUFBRUEsRUFBRUEsV0FBV0EsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBRUE7d0JBQ3RGQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFLQSxTQUFTQSxFQUFFQSxtQ0FBV0EsRUFBTUEsRUFBRUEsRUFBRUEsSUFBSUEsRUFBRUE7d0JBQ3hEQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFFQSxTQUFTQSxFQUFFQSw4Q0FBb0JBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO3dCQUNsRUEsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBSUEsU0FBU0EsRUFBRUEsNENBQW1CQSxFQUFHQSxFQUFFQSxFQUFFQSxLQUFLQSxFQUFFQTtxQkFDOURBLENBQUNBOztzQ0FnQkRBO2dCQUFEQSx3QkFBQ0E7WUFBREEsQ0FwQ0EsQUFvQ0NBLElBQUE7WUFFUSxpREFBaUIiLCJmaWxlIjoiYXBwL3Byb2ZpbGVzL3Byb2ZpbGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldywgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5vUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vbm8tcHJvZmlsZS9uby1wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lQ29tcG9uZW50IH0gZnJvbSAnLi9tZS9wcm9maWxlcy1tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQvcHJvZmlsZXMtYWRkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZpZXdQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3Byb2ZpbGVzLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm9maWxlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdwcm9maWxlcycsXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHRQcm9maWxlU2VydmljZVxyXG5cdF1cclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlVXJsOiAnL25nMi1hcHAvcHJvZmlsZXMvcHJvZmlsZXMudGVtcGxhdGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnbmcyLWFwcC9wcm9maWxlcy9wcm9maWxlcy5zdHlsZXMuY3NzJ1xyXG5cdF0sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0Uk9VVEVSX0RJUkVDVElWRVNcclxuXHRdXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcblx0eyBwYXRoOiAnLycsIFx0XHQgY29tcG9uZW50OiBOb1Byb2ZpbGVDb21wb25lbnQsICAgYXM6ICdOb1Byb2ZpbGUnLCB1c2VBc0RlZmF1bHQ6IHRydWUgfSxcclxuXHR7IHBhdGg6ICcvbWUnLCBcdFx0IGNvbXBvbmVudDogTWVDb21wb25lbnQsIFx0XHQgIGFzOiAnTWUnIH0sXHJcblx0eyBwYXRoOiAnL3ZpZXcvOmlkJywgY29tcG9uZW50OiBWaWV3UHJvZmlsZUNvbXBvbmVudCwgYXM6ICdWaWV3JyB9LFxyXG5cdHsgcGF0aDogJy9hZGQnLCBcdCBjb21wb25lbnQ6IEFkZFByb2ZpbGVDb21wb25lbnQsICBhczogJ0FkZCcgfSxcclxuXSlcclxuY2xhc3MgUHJvZmlsZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHByb2ZpbGVzID0gW107XHJcblx0aXNTaG93aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHVibGljIFByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSkge31cclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuUHJvZmlsZVNlcnZpY2UuZ2V0Q3VycmVudFByb2ZpbGVzKClcclxuXHRcdFx0LnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHt0aGlzLnByb2ZpbGVzID0gcmVzcG9uc2V9LFxyXG5cdFx0XHRcdFx0ICAgKGVycikgPT4gY29uc29sZS53YXJuKGVycikpO1xyXG5cdH1cclxuXHRcclxuXHR0b2dnbGVQcm9maWxlcygpIHtcclxuXHRcdHRoaXMuaXNTaG93aW5nID0gIXRoaXMuaXNTaG93aW5nO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHsgUHJvZmlsZXNDb21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
