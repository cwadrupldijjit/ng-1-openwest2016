System.register(['@angular/core', '@angular/router', '../services/profile.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, profile_service_1;
    var ProfilesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                        ],
                        templateUrl: '/ng2-app/profiles/profiles.template.html',
                        styleUrls: [
                            'ng2-app/profiles/profiles.styles.css'
                        ],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService])
                ], ProfilesComponent);
                return ProfilesComponent;
            }());
            exports_1("ProfilesComponent", ProfilesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy9wcm9maWxlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBSUMsMkJBQW1CLGNBQThCO29CQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBSGpELGFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQ2QsY0FBUyxHQUFZLEtBQUssQ0FBQztnQkFFeUIsQ0FBQztnQkFFckQsb0NBQVEsR0FBUjtvQkFBQSxpQkFJQztvQkFIQSxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFO3lCQUN0QyxTQUFTLENBQUMsVUFBQyxRQUFRLElBQU0sS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUEsQ0FBQSxDQUFDLEVBQzlDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELDBDQUFjLEdBQWQ7b0JBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2xDLENBQUM7Z0JBakNGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFNBQVMsRUFBRTs0QkFDVixnQ0FBYzt5QkFDZDt3QkFDRCxXQUFXLEVBQUUsMENBQTBDO3dCQUN2RCxTQUFTLEVBQUU7NEJBQ1Ysc0NBQXNDO3lCQUN0Qzt3QkFDRCxVQUFVLEVBQUU7NEJBQ1gsMEJBQWlCO3lCQUNqQjtxQkFDRCxDQUFDOztxQ0FBQTtnQkFzQkYsd0JBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQUVRLGlEQUFpQiIsImZpbGUiOiJhcHAvcHJvZmlsZXMvcHJvZmlsZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOb1Byb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL25vLXByb2ZpbGUvbm8tcHJvZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZUNvbXBvbmVudCB9IGZyb20gJy4vbWUvcHJvZmlsZXMtbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkL3Byb2ZpbGVzLWFkZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWV3UHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdmlldy9wcm9maWxlcy12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvZmlsZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAncHJvZmlsZXMnLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0UHJvZmlsZVNlcnZpY2VcclxuXHRdLFxyXG5cdHRlbXBsYXRlVXJsOiAnL25nMi1hcHAvcHJvZmlsZXMvcHJvZmlsZXMudGVtcGxhdGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnbmcyLWFwcC9wcm9maWxlcy9wcm9maWxlcy5zdHlsZXMuY3NzJ1xyXG5cdF0sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0Uk9VVEVSX0RJUkVDVElWRVNcclxuXHRdXHJcbn0pXHJcbi8vIEBSb3V0ZUNvbmZpZyhbXHJcbi8vIFx0eyBwYXRoOiAnLycsIFx0XHQgY29tcG9uZW50OiBOb1Byb2ZpbGVDb21wb25lbnQsICAgYXM6ICdOb1Byb2ZpbGUnLCB1c2VBc0RlZmF1bHQ6IHRydWUgfSxcclxuLy8gXHR7IHBhdGg6ICcvbWUnLCBcdFx0IGNvbXBvbmVudDogTWVDb21wb25lbnQsIFx0XHQgIGFzOiAnTWUnIH0sXHJcbi8vIFx0eyBwYXRoOiAnL3ZpZXcvOmlkJywgY29tcG9uZW50OiBWaWV3UHJvZmlsZUNvbXBvbmVudCwgYXM6ICdWaWV3JyB9LFxyXG4vLyBcdHsgcGF0aDogJy9hZGQnLCBcdCBjb21wb25lbnQ6IEFkZFByb2ZpbGVDb21wb25lbnQsICBhczogJ0FkZCcgfSxcclxuLy8gXSlcclxuY2xhc3MgUHJvZmlsZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHByb2ZpbGVzID0gW107XHJcblx0aXNTaG93aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHVibGljIFByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSkge31cclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuUHJvZmlsZVNlcnZpY2UuZ2V0Q3VycmVudFByb2ZpbGVzKClcclxuXHRcdFx0LnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHt0aGlzLnByb2ZpbGVzID0gcmVzcG9uc2V9LFxyXG5cdFx0XHRcdFx0ICAgKGVycikgPT4gY29uc29sZS53YXJuKGVycikpO1xyXG5cdH1cclxuXHRcclxuXHR0b2dnbGVQcm9maWxlcygpIHtcclxuXHRcdHRoaXMuaXNTaG93aW5nID0gIXRoaXMuaXNTaG93aW5nO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHsgUHJvZmlsZXNDb21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
