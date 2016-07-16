System.register(['@angular/core', '@angular/router', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                        selector: 'app',
                        templateUrl: '/ng2-app/app.template.html',
                        styleUrls: [
                            'ng2-app/app.styles.css'
                        ],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CQTtnQkFBQTtvQkFDQyxXQUFNLEdBQVksS0FBSyxDQUFDO2dCQVN6QixDQUFDO2dCQVBBLGlDQUFVLEdBQVY7b0JBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsc0NBQWUsR0FBZjtvQkFDQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBQ2hDLENBQUM7Z0JBdkJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsV0FBVyxFQUFFLDRCQUE0Qjt3QkFDekMsU0FBUyxFQUFFOzRCQUNWLHdCQUF3Qjt5QkFDeEI7d0JBQ0QsVUFBVSxFQUFFOzRCQUNYLDBCQUFpQjt5QkFDakI7cUJBQ0QsQ0FBQzs7Z0NBQUE7Z0JBZUYsbUJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQUVRLHVDQUFZIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2ZpbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWxlcy9wcm9maWxlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2FwcCcsXHJcblx0dGVtcGxhdGVVcmw6ICcvbmcyLWFwcC9hcHAudGVtcGxhdGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnbmcyLWFwcC9hcHAuc3R5bGVzLmNzcydcclxuXHRdLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTXHJcblx0XVxyXG59KVxyXG4vLyBAUm91dGVDb25maWcoW1xyXG4vLyBcdHsgcGF0aDogJy8nLCBcdFx0XHQgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFx0XHRhczogJ0hvbWUnLCBcdCAgdXNlQXNEZWZhdWx0OiB0cnVlfSxcclxuLy8gXHR7IHBhdGg6ICcvcHJvZmlsZXMvLi4uJywgY29tcG9uZW50OiBQcm9maWxlc0NvbXBvbmVudCwgIGFzOiAnUHJvZmlsZXMnIH0sXHJcbi8vIF0pXHJcbmNsYXNzIEFwcENvbXBvbmVudCB7XHJcblx0aXNPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHJcblx0dG9nZ2xlTWFpbigpIHtcclxuXHRcdHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm5Ub0xhbmRpbmcoKSB7XHJcblx0XHR3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSAnLyc7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgeyBBcHBDb21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
