System.register(['angular2/core', 'angular2/router', '../../services/profile.service'], function(exports_1) {
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
                function ViewProfileComponent(ProfileService, RouteParams) {
                    var _this = this;
                    this.ProfileService = ProfileService;
                    this.RouteParams = RouteParams;
                    this.profile = {
                        interests: []
                    };
                    this.ProfileService.getProfile(this.RouteParams.get('id'))
                        .subscribe(function (response) { return _this.profile = response; }, function (err) { return console.warn(err); });
                }
                ViewProfileComponent.prototype.ngOnInit = function () {
                    // this.ProfileService.getProfile(this.RouteParams.get('id'))
                    // 		.subscribe((response) => this.profile = response,
                    // 				   (err) => console.warn(err));
                };
                ViewProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'view'
                    }),
                    core_1.View({
                        templateUrl: '/ng2-app/profiles/view/profiles-view.template.html',
                        styleUrls: [
                            'ng2-app/profiles/profile-subviews.styles.css'
                        ],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService, router_1.RouteParams])
                ], ViewProfileComponent);
                return ViewProfileComponent;
            })();
            exports_1("ViewProfileComponent", ViewProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy92aWV3L3Byb2ZpbGVzLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlZpZXdQcm9maWxlQ29tcG9uZW50IiwiVmlld1Byb2ZpbGVDb21wb25lbnQuY29uc3RydWN0b3IiLCJWaWV3UHJvZmlsZUNvbXBvbmVudC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBaUJDQSw4QkFBbUJBLGNBQThCQSxFQUN2Q0EsV0FBd0JBO29CQWxCbkNDLGlCQTZCQ0E7b0JBWm1CQSxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBZ0JBO29CQUN2Q0EsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWFBO29CQUxsQ0EsWUFBT0EsR0FBR0E7d0JBQ1RBLFNBQVNBLEVBQUVBLEVBQUVBO3FCQUNiQSxDQUFDQTtvQkFJREEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7eUJBQ3ZEQSxTQUFTQSxDQUFDQSxVQUFDQSxRQUFRQSxJQUFLQSxPQUFBQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxRQUFRQSxFQUF2QkEsQ0FBdUJBLEVBQzNDQSxVQUFDQSxHQUFHQSxJQUFLQSxPQUFBQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFqQkEsQ0FBaUJBLENBQUNBLENBQUNBO2dCQUNwQ0EsQ0FBQ0E7Z0JBRURELHVDQUFRQSxHQUFSQTtvQkFDQ0UsNkRBQTZEQTtvQkFDN0RBLHNEQUFzREE7b0JBQ3REQSxzQ0FBc0NBO2dCQUN2Q0EsQ0FBQ0E7Z0JBNUJGRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxNQUFNQTtxQkFDaEJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBRUEsb0RBQW9EQTt3QkFDakVBLFNBQVNBLEVBQUVBOzRCQUNWQSw4Q0FBOENBO3lCQUM5Q0E7d0JBQ0RBLFVBQVVBLEVBQUVBOzRCQUNYQSwwQkFBaUJBO3lCQUNqQkE7cUJBQ0RBLENBQUNBOzt5Q0FrQkRBO2dCQUFEQSwyQkFBQ0E7WUFBREEsQ0E3QkEsQUE2QkNBLElBQUE7WUFFUSx1REFBb0IiLCJmaWxlIjoiYXBwL3Byb2ZpbGVzL3ZpZXcvcHJvZmlsZXMtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZVBhcmFtcywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2ZpbGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3ZpZXcnXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybDogJy9uZzItYXBwL3Byb2ZpbGVzL3ZpZXcvcHJvZmlsZXMtdmlldy50ZW1wbGF0ZS5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCduZzItYXBwL3Byb2ZpbGVzL3Byb2ZpbGUtc3Vidmlld3Muc3R5bGVzLmNzcydcclxuXHRdLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTXHJcblx0XSxcclxufSlcclxuY2xhc3MgVmlld1Byb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHByb2ZpbGUgPSB7XHJcblx0XHRpbnRlcmVzdHM6IFtdXHJcblx0fTtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgUHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLFxyXG5cdFx0XHRcdHB1YmxpYyBSb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHtcclxuXHRcdHRoaXMuUHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZSh0aGlzLlJvdXRlUGFyYW1zLmdldCgnaWQnKSlcclxuXHRcdFx0XHQuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4gdGhpcy5wcm9maWxlID0gcmVzcG9uc2UsXHJcblx0XHRcdFx0XHRcdCAgIChlcnIpID0+IGNvbnNvbGUud2FybihlcnIpKTtcclxuXHR9XHJcblx0XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLlByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGUodGhpcy5Sb3V0ZVBhcmFtcy5nZXQoJ2lkJykpXHJcblx0XHQvLyBcdFx0LnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHRoaXMucHJvZmlsZSA9IHJlc3BvbnNlLFxyXG5cdFx0Ly8gXHRcdFx0XHQgICAoZXJyKSA9PiBjb25zb2xlLndhcm4oZXJyKSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgeyBWaWV3UHJvZmlsZUNvbXBvbmVudCB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
