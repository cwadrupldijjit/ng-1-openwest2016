System.register(['@angular/core', '@angular/router', '../../services/profile.service'], function(exports_1, context_1) {
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
    var ViewProfileComponent;
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
            ViewProfileComponent = (function () {
                function ViewProfileComponent(ProfileService, route, router) {
                    this.ProfileService = ProfileService;
                    this.route = route;
                    this.router = router;
                    this.profile = {
                        interests: []
                    };
                }
                ViewProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.params.subscribe(function (params) {
                        var id = params['id'];
                        _this.ProfileService.getProfile(id)
                            .subscribe(function (response) { return _this.profile = response; }, function (err) { return console.warn(err); });
                    });
                };
                ViewProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'view',
                        templateUrl: '/ng2-app/profiles/view/profiles-view.template.html',
                        styleUrls: [
                            'ng2-app/profiles/profile-subviews.styles.css'
                        ],
                        providers: [
                            profile_service_1.ProfileService
                        ],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService, router_1.ActivatedRoute, router_1.Router])
                ], ViewProfileComponent);
                return ViewProfileComponent;
            }());
            exports_1("ViewProfileComponent", ViewProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy92aWV3L3Byb2ZpbGVzLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQU9DLDhCQUFvQixjQUE4QixFQUFVLEtBQXFCLEVBQVUsTUFBYztvQkFBckYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO29CQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO29CQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBTnpHLFlBQU8sR0FBRzt3QkFDVCxTQUFTLEVBQUUsRUFBRTtxQkFDYixDQUFDO2dCQUkwRyxDQUFDO2dCQUU3Ryx1Q0FBUSxHQUFSO29CQUFBLGlCQVFDO29CQVBBLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTt3QkFDNUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUV0QixLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7NkJBQ2hDLFNBQVMsQ0FBRSxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxFQUF2QixDQUF1QixFQUN6QyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQztvQkFDbEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQztnQkE5QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsTUFBTTt3QkFDaEIsV0FBVyxFQUFFLG9EQUFvRDt3QkFDakUsU0FBUyxFQUFFOzRCQUNWLDhDQUE4Qzt5QkFDOUM7d0JBQ0QsU0FBUyxFQUFFOzRCQUNWLGdDQUFjO3lCQUNkO3dCQUNELFVBQVUsRUFBRTs0QkFDWCwwQkFBaUI7eUJBQ2pCO3FCQUNELENBQUM7O3dDQUFBO2dCQW1CRiwyQkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFFUSx1REFBb0IiLCJmaWxlIjoiYXBwL3Byb2ZpbGVzL3ZpZXcvcHJvZmlsZXMtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZmlsZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAndmlldycsXHJcblx0dGVtcGxhdGVVcmw6ICcvbmcyLWFwcC9wcm9maWxlcy92aWV3L3Byb2ZpbGVzLXZpZXcudGVtcGxhdGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnbmcyLWFwcC9wcm9maWxlcy9wcm9maWxlLXN1YnZpZXdzLnN0eWxlcy5jc3MnXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdFByb2ZpbGVTZXJ2aWNlXHJcblx0XSxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblx0XHRST1VURVJfRElSRUNUSVZFU1xyXG5cdF0sXHJcbn0pXHJcbmNsYXNzIFZpZXdQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwcm9maWxlID0ge1xyXG5cdFx0aW50ZXJlc3RzOiBbXVxyXG5cdH07XHJcblx0XHJcblx0c3ViOiBhbnk7XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBQcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cdFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0bGV0IGlkID0gcGFyYW1zWydpZCddO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5Qcm9maWxlU2VydmljZS5nZXRQcm9maWxlKGlkKVxyXG5cdFx0XHRcdC5zdWJzY3JpYmUoXHRyZXNwb25zZSA9PiB0aGlzLnByb2ZpbGUgPSByZXNwb25zZSxcclxuXHRcdFx0XHRcdFx0ICAgXHRlcnIgPT4gY29uc29sZS53YXJuKGVycikpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgeyBWaWV3UHJvZmlsZUNvbXBvbmVudCB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
