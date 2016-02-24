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
    var AddProfileComponent;
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
            AddProfileComponent = (function () {
                function AddProfileComponent(ProfileService, Router, Location) {
                    this.ProfileService = ProfileService;
                    this.Router = Router;
                    this.Location = Location;
                    this.profile = {
                        interests: []
                    };
                    this.interestsEdit = [];
                }
                AddProfileComponent.prototype.saveProfile = function () {
                    this.ProfileService.saveProfile(this.profile);
                };
                AddProfileComponent.prototype.cancelInterestEdit = function () {
                };
                AddProfileComponent.prototype.cancelEditProfile = function () {
                    this.Router.navigate(['/Profiles']);
                };
                AddProfileComponent.prototype.saveInterest = function () {
                };
                AddProfileComponent.prototype.deleteInterest = function () {
                };
                AddProfileComponent.prototype.editInterest = function (index) {
                    console.log('new');
                };
                AddProfileComponent.prototype.newInterest = function () {
                    console.log('new');
                };
                AddProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'add'
                    }),
                    core_1.View({
                        templateUrl: '/ng2-app/profiles/add/profiles-add.template.html',
                        styleUrls: [
                            'ng2-app/profiles/profile-subroutes.styles.css'
                        ],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService, router_1.Router, router_1.Location])
                ], AddProfileComponent);
                return AddProfileComponent;
            })();
            exports_1("AddProfileComponent", AddProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy9hZGQvcHJvZmlsZXMtYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJBZGRQcm9maWxlQ29tcG9uZW50IiwiQWRkUHJvZmlsZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFkZFByb2ZpbGVDb21wb25lbnQuc2F2ZVByb2ZpbGUiLCJBZGRQcm9maWxlQ29tcG9uZW50LmNhbmNlbEludGVyZXN0RWRpdCIsIkFkZFByb2ZpbGVDb21wb25lbnQuY2FuY2VsRWRpdFByb2ZpbGUiLCJBZGRQcm9maWxlQ29tcG9uZW50LnNhdmVJbnRlcmVzdCIsIkFkZFByb2ZpbGVDb21wb25lbnQuZGVsZXRlSW50ZXJlc3QiLCJBZGRQcm9maWxlQ29tcG9uZW50LmVkaXRJbnRlcmVzdCIsIkFkZFByb2ZpbGVDb21wb25lbnQubmV3SW50ZXJlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQWtCQ0EsNkJBQW1CQSxjQUE4QkEsRUFDdkNBLE1BQWNBLEVBQ2RBLFFBQWtCQTtvQkFGVEMsbUJBQWNBLEdBQWRBLGNBQWNBLENBQWdCQTtvQkFDdkNBLFdBQU1BLEdBQU5BLE1BQU1BLENBQVFBO29CQUNkQSxhQUFRQSxHQUFSQSxRQUFRQSxDQUFVQTtvQkFQNUJBLFlBQU9BLEdBQUdBO3dCQUNUQSxTQUFTQSxFQUFFQSxFQUFFQTtxQkFDYkEsQ0FBQ0E7b0JBQ0ZBLGtCQUFhQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFJWUEsQ0FBQ0E7Z0JBRWhDRCx5Q0FBV0EsR0FBWEE7b0JBQ0NFLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO2dCQUMvQ0EsQ0FBQ0E7Z0JBRURGLGdEQUFrQkEsR0FBbEJBO2dCQUVBRyxDQUFDQTtnQkFFREgsK0NBQWlCQSxHQUFqQkE7b0JBQ0NJLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBO2dCQUNyQ0EsQ0FBQ0E7Z0JBRURKLDBDQUFZQSxHQUFaQTtnQkFFQUssQ0FBQ0E7Z0JBRURMLDRDQUFjQSxHQUFkQTtnQkFFQU0sQ0FBQ0E7Z0JBRUROLDBDQUFZQSxHQUFaQSxVQUFhQSxLQUFLQTtvQkFDakJPLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUVwQkEsQ0FBQ0E7Z0JBRURQLHlDQUFXQSxHQUFYQTtvQkFDQ1EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BCQSxDQUFDQTtnQkFqREZSO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLEtBQUtBO3FCQUNmQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLGtEQUFrREE7d0JBQy9EQSxTQUFTQSxFQUFFQTs0QkFDVkEsK0NBQStDQTt5QkFDL0NBO3dCQUNEQSxVQUFVQSxFQUFFQTs0QkFDWEEsMEJBQWlCQTt5QkFDakJBO3FCQUNEQSxDQUFDQTs7d0NBdUNEQTtnQkFBREEsMEJBQUNBO1lBQURBLENBbERBLEFBa0RDQSxJQUFBO1lBRVEscURBQW1CIiwiZmlsZSI6ImFwcC9wcm9maWxlcy9hZGQvcHJvZmlsZXMtYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIExvY2F0aW9uLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZmlsZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYWRkJ1xyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmw6ICcvbmcyLWFwcC9wcm9maWxlcy9hZGQvcHJvZmlsZXMtYWRkLnRlbXBsYXRlLmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0J25nMi1hcHAvcHJvZmlsZXMvcHJvZmlsZS1zdWJyb3V0ZXMuc3R5bGVzLmNzcydcclxuXHRdLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTXHJcblx0XSxcclxufSlcclxuY2xhc3MgQWRkUHJvZmlsZUNvbXBvbmVudCB7XHJcblx0cHJvZmlsZSA9IHtcclxuXHRcdGludGVyZXN0czogW11cclxuXHR9O1xyXG5cdGludGVyZXN0c0VkaXQgPSBbXTtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgUHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLCBcclxuXHRcdFx0XHRwdWJsaWMgUm91dGVyOiBSb3V0ZXIsXHJcblx0XHRcdFx0cHVibGljIExvY2F0aW9uOiBMb2NhdGlvbikge31cclxuXHRcclxuXHRzYXZlUHJvZmlsZSgpIHtcclxuXHRcdHRoaXMuUHJvZmlsZVNlcnZpY2Uuc2F2ZVByb2ZpbGUodGhpcy5wcm9maWxlKTtcclxuXHR9XHJcblx0XHJcblx0Y2FuY2VsSW50ZXJlc3RFZGl0KCkge1xyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdGNhbmNlbEVkaXRQcm9maWxlKCkge1xyXG5cdFx0dGhpcy5Sb3V0ZXIubmF2aWdhdGUoWycvUHJvZmlsZXMnXSk7XHJcblx0fVxyXG5cdFxyXG5cdHNhdmVJbnRlcmVzdCgpIHtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRkZWxldGVJbnRlcmVzdCgpIHtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRlZGl0SW50ZXJlc3QoaW5kZXgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCduZXcnKTtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRuZXdJbnRlcmVzdCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCduZXcnKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFkZFByb2ZpbGVDb21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
