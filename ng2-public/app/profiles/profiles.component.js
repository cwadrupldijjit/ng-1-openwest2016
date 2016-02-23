System.register(['angular2/core', 'angular2/router', './no-profile/no-profile.component', './me/profiles-me.component', './add/profiles-add.component', './view/profiles-view.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, no_profile_component_1, profiles_me_component_1, profiles_add_component_1, profiles_view_component_1;
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
            }],
        execute: function() {
            ProfilesComponent = (function () {
                function ProfilesComponent() {
                }
                ProfilesComponent = __decorate([
                    core_1.Component({
                        selector: 'profiles'
                    }),
                    core_1.View({
                        templateUrl: '/ng2-app/profiles/profiles.template.html',
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
                    __metadata('design:paramtypes', [])
                ], ProfilesComponent);
                return ProfilesComponent;
            })();
            exports_1("ProfilesComponent", ProfilesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy9wcm9maWxlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiUHJvZmlsZXNDb21wb25lbnQiLCJQcm9maWxlc0NvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUFBO2dCQWlCQUMsQ0FBQ0E7Z0JBakJERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxVQUFVQTtxQkFDcEJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBRUEsMENBQTBDQTt3QkFDdkRBLFVBQVVBLEVBQUVBOzRCQUNYQSwwQkFBaUJBO3lCQUNqQkE7cUJBQ0RBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUtBLFNBQVNBLEVBQUVBLHlDQUFrQkEsRUFBSUEsRUFBRUEsRUFBRUEsV0FBV0EsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBRUE7d0JBQ3RGQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFLQSxTQUFTQSxFQUFFQSxtQ0FBV0EsRUFBTUEsRUFBRUEsRUFBRUEsSUFBSUEsRUFBRUE7d0JBQ3hEQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFFQSxTQUFTQSxFQUFFQSw4Q0FBb0JBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO3dCQUNsRUEsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBSUEsU0FBU0EsRUFBRUEsNENBQW1CQSxFQUFHQSxFQUFFQSxFQUFFQSxLQUFLQSxFQUFFQTtxQkFDOURBLENBQUNBOztzQ0FHREE7Z0JBQURBLHdCQUFDQTtZQUFEQSxDQWpCQSxBQWlCQ0EsSUFBQTtZQUVRLGlEQUFpQiIsImZpbGUiOiJhcHAvcHJvZmlsZXMvcHJvZmlsZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5vUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vbm8tcHJvZmlsZS9uby1wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lQ29tcG9uZW50IH0gZnJvbSAnLi9tZS9wcm9maWxlcy1tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQvcHJvZmlsZXMtYWRkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZpZXdQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3Byb2ZpbGVzLXZpZXcuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAncHJvZmlsZXMnXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybDogJy9uZzItYXBwL3Byb2ZpbGVzL3Byb2ZpbGVzLnRlbXBsYXRlLmh0bWwnLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTXHJcblx0XVxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG5cdHsgcGF0aDogJy8nLCBcdFx0IGNvbXBvbmVudDogTm9Qcm9maWxlQ29tcG9uZW50LCAgIGFzOiAnTm9Qcm9maWxlJywgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXHJcblx0eyBwYXRoOiAnL21lJywgXHRcdCBjb21wb25lbnQ6IE1lQ29tcG9uZW50LCBcdFx0ICBhczogJ01lJyB9LFxyXG5cdHsgcGF0aDogJy92aWV3LzppZCcsIGNvbXBvbmVudDogVmlld1Byb2ZpbGVDb21wb25lbnQsIGFzOiAnVmlldycgfSxcclxuXHR7IHBhdGg6ICcvYWRkJywgXHQgY29tcG9uZW50OiBBZGRQcm9maWxlQ29tcG9uZW50LCAgYXM6ICdBZGQnIH0sXHJcbl0pXHJcbmNsYXNzIFByb2ZpbGVzQ29tcG9uZW50IHtcclxuXHRcclxufVxyXG5cclxuZXhwb3J0IHsgUHJvZmlsZXNDb21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
