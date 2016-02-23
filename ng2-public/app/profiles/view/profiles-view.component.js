System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var ViewProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ViewProfileComponent = (function () {
                function ViewProfileComponent() {
                }
                ViewProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'view'
                    }),
                    core_1.View({
                        templateUrl: '/ng2-app/profiles/view/profiles-view.template.html',
                        styleUrls: [
                            '/ng2-app/profiles/profiles.styles.css'
                        ],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ViewProfileComponent);
                return ViewProfileComponent;
            })();
            exports_1("ViewProfileComponent", ViewProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy92aWV3L3Byb2ZpbGVzLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlZpZXdQcm9maWxlQ29tcG9uZW50IiwiVmlld1Byb2ZpbGVDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQWFDQTtnQkFBZUMsQ0FBQ0E7Z0JBYmpCRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxNQUFNQTtxQkFDaEJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBRUEsb0RBQW9EQTt3QkFDakVBLFNBQVNBLEVBQUVBOzRCQUNWQSx1Q0FBdUNBO3lCQUN2Q0E7d0JBQ0RBLFVBQVVBLEVBQUVBOzRCQUNYQSwwQkFBaUJBO3lCQUNqQkE7cUJBQ0RBLENBQUNBOzt5Q0FHREE7Z0JBQURBLDJCQUFDQTtZQUFEQSxDQWRBLEFBY0NBLElBQUE7WUFFUSx1REFBb0IiLCJmaWxlIjoiYXBwL3Byb2ZpbGVzL3ZpZXcvcHJvZmlsZXMtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICd2aWV3J1xyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmw6ICcvbmcyLWFwcC9wcm9maWxlcy92aWV3L3Byb2ZpbGVzLXZpZXcudGVtcGxhdGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnL25nMi1hcHAvcHJvZmlsZXMvcHJvZmlsZXMuc3R5bGVzLmNzcydcclxuXHRdLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTXHJcblx0XSxcclxufSlcclxuY2xhc3MgVmlld1Byb2ZpbGVDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG5cclxuZXhwb3J0IHsgVmlld1Byb2ZpbGVDb21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
