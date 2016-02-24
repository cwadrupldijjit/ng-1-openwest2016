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
                    this.profile = new profile_service_1.Profile;
                    this.interestsEdit = [];
                }
                AddProfileComponent.prototype.saveProfile = function () {
                    var _this = this;
                    this.ProfileService.saveProfile(this.profile)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.Router.navigate(['/Profiles', 'View', { id: response.id }]);
                    }, function (err) { return console.warn(err); });
                };
                AddProfileComponent.prototype.cancelInterestEdit = function (index) {
                    if (index === 'new') {
                        this.newInterest = '';
                    }
                    else {
                        this.profile.interests[index] = this.interestsEdit[index];
                    }
                    this.interestsEdit[index] = '';
                };
                AddProfileComponent.prototype.cancelEditProfile = function () {
                    this.Router.navigate(['/Profiles']);
                };
                AddProfileComponent.prototype.saveInterest = function (index) {
                    if (index === 'new') {
                        this.profile.interests.push(this.newInterest);
                        this.newInterest = '';
                    }
                    this.interestsEdit[index] = '';
                };
                AddProfileComponent.prototype.deleteInterest = function (index) {
                    try {
                        if (index === undefined) {
                            throw ('You\'re trying to delete an interest that doesn\'t exist');
                        }
                        if (confirm('Are you sure you want to delete this interest?')) {
                            this.profile.interests.splice(index, 1);
                        }
                    }
                    catch (e) {
                        alert(e);
                    }
                };
                AddProfileComponent.prototype.editInterest = function (index) {
                    try {
                        if (index === undefined) {
                            throw ('You\'re trying to edit an interest that doesn\'t exist');
                        }
                        if (index === 'new')
                            this.interestsEdit[index] = 'blah';
                        else
                            this.interestsEdit[index] = this.profile.interests[index];
                    }
                    catch (e) {
                        alert(e);
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy9hZGQvcHJvZmlsZXMtYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJBZGRQcm9maWxlQ29tcG9uZW50IiwiQWRkUHJvZmlsZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFkZFByb2ZpbGVDb21wb25lbnQuc2F2ZVByb2ZpbGUiLCJBZGRQcm9maWxlQ29tcG9uZW50LmNhbmNlbEludGVyZXN0RWRpdCIsIkFkZFByb2ZpbGVDb21wb25lbnQuY2FuY2VsRWRpdFByb2ZpbGUiLCJBZGRQcm9maWxlQ29tcG9uZW50LnNhdmVJbnRlcmVzdCIsIkFkZFByb2ZpbGVDb21wb25lbnQuZGVsZXRlSW50ZXJlc3QiLCJBZGRQcm9maWxlQ29tcG9uZW50LmVkaXRJbnRlcmVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBaUJDQSw2QkFBbUJBLGNBQThCQSxFQUN2Q0EsTUFBY0EsRUFDZEEsUUFBa0JBO29CQUZUQyxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBZ0JBO29CQUN2Q0EsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBUUE7b0JBQ2RBLGFBQVFBLEdBQVJBLFFBQVFBLENBQVVBO29CQU41QkEsWUFBT0EsR0FBR0EsSUFBSUEseUJBQU9BLENBQUNBO29CQUN0QkEsa0JBQWFBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUtZQSxDQUFDQTtnQkFFaENELHlDQUFXQSxHQUFYQTtvQkFBQUUsaUJBTUNBO29CQUxBQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQTt5QkFDMUNBLFNBQVNBLENBQUNBLFVBQUNBLFFBQVFBO3dCQUNuQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7d0JBQ3RCQSxLQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxXQUFXQSxFQUFFQSxNQUFNQSxFQUFFQSxFQUFDQSxFQUFFQSxF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QUFLQSxDQUFDQSxDQUFDQTtvQkFDaEVBLENBQUVBO29CQUFBQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDWkEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ1ZBLENBQUNBO2dCQUNGQSxDQUFDQTtnQkEzRUZQO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLEtBQUtBO3FCQUNmQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLGtEQUFrREE7d0JBQy9EQSxTQUFTQSxFQUFFQTs0QkFDVkEsK0NBQStDQTt5QkFDL0NBO3dCQUNEQSxVQUFVQSxFQUFFQTs0QkFDWEEsMEJBQWlCQTt5QkFDakJBO3FCQUNEQSxDQUFDQTs7d0NBaUVEQTtnQkFBREEsMEJBQUNBO1lBQURBLENBNUVBLEFBNEVDQSxJQUFBO1lBRVEscURBQW1CIiwiZmlsZSI6ImFwcC9wcm9maWxlcy9hZGQvcHJvZmlsZXMtYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIExvY2F0aW9uLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlLCBQcm9maWxlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZmlsZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYWRkJ1xyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmw6ICcvbmcyLWFwcC9wcm9maWxlcy9hZGQvcHJvZmlsZXMtYWRkLnRlbXBsYXRlLmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0J25nMi1hcHAvcHJvZmlsZXMvcHJvZmlsZS1zdWJyb3V0ZXMuc3R5bGVzLmNzcydcclxuXHRdLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTXHJcblx0XSxcclxufSlcclxuY2xhc3MgQWRkUHJvZmlsZUNvbXBvbmVudCB7XHJcblx0cHJvZmlsZSA9IG5ldyBQcm9maWxlO1xyXG5cdGludGVyZXN0c0VkaXQgPSBbXTtcclxuXHRuZXdJbnRlcmVzdDogc3RyaW5nO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBQcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsIFxyXG5cdFx0XHRcdHB1YmxpYyBSb3V0ZXI6IFJvdXRlcixcclxuXHRcdFx0XHRwdWJsaWMgTG9jYXRpb246IExvY2F0aW9uKSB7fVxyXG5cdFxyXG5cdHNhdmVQcm9maWxlKCkge1xyXG5cdFx0dGhpcy5Qcm9maWxlU2VydmljZS5zYXZlUHJvZmlsZSh0aGlzLnByb2ZpbGUpXHJcblx0XHRcdFx0LnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdHRoaXMuUm91dGVyLm5hdmlnYXRlKFsnL1Byb2ZpbGVzJywgJ1ZpZXcnLCB7aWQ6IHJlc3BvbnNlLmlkfV0pXHJcblx0XHRcdFx0fSwgKGVycikgPT4gY29uc29sZS53YXJuKGVycikpO1xyXG5cdH1cclxuXHRcclxuXHRjYW5jZWxJbnRlcmVzdEVkaXQoaW5kZXgpIHtcclxuXHRcdGlmIChpbmRleCA9PT0gJ25ldycpIHtcclxuXHRcdFx0dGhpcy5uZXdJbnRlcmVzdCA9ICcnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5wcm9maWxlLmludGVyZXN0c1tpbmRleF0gPSB0aGlzLmludGVyZXN0c0VkaXRbaW5kZXhdO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5pbnRlcmVzdHNFZGl0W2luZGV4XSA9ICcnO1xyXG5cdH1cclxuXHRcclxuXHRjYW5jZWxFZGl0UHJvZmlsZSgpIHtcclxuXHRcdHRoaXMuUm91dGVyLm5hdmlnYXRlKFsnL1Byb2ZpbGVzJ10pO1xyXG5cdH1cclxuXHRcclxuXHRzYXZlSW50ZXJlc3QoaW5kZXgpIHtcclxuXHRcdGlmIChpbmRleCA9PT0gJ25ldycpIHtcclxuXHRcdFx0dGhpcy5wcm9maWxlLmludGVyZXN0cy5wdXNoKHRoaXMubmV3SW50ZXJlc3QpO1xyXG5cdFx0XHR0aGlzLm5ld0ludGVyZXN0ID0gJyc7XHJcblx0XHR9XHJcblx0XHR0aGlzLmludGVyZXN0c0VkaXRbaW5kZXhdID0gJyc7XHJcblx0fVxyXG5cdFxyXG5cdGRlbGV0ZUludGVyZXN0KGluZGV4KSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHRocm93KCdZb3VcXCdyZSB0cnlpbmcgdG8gZGVsZXRlIGFuIGludGVyZXN0IHRoYXQgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpbnRlcmVzdD8nKSkge1xyXG5cdFx0XHRcdHRoaXMucHJvZmlsZS5pbnRlcmVzdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRhbGVydChlKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZWRpdEludGVyZXN0KGluZGV4KSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHRocm93KCdZb3VcXCdyZSB0cnlpbmcgdG8gZWRpdCBhbiBpbnRlcmVzdCB0aGF0IGRvZXNuXFwndCBleGlzdCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoaW5kZXggPT09ICduZXcnKSBcclxuXHRcdFx0XHR0aGlzLmludGVyZXN0c0VkaXRbaW5kZXhdID0gJ2JsYWgnO1xyXG5cdFx0XHRlbHNlIHRoaXMuaW50ZXJlc3RzRWRpdFtpbmRleF0gPSB0aGlzLnByb2ZpbGUuaW50ZXJlc3RzW2luZGV4XTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0YWxlcnQoZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgeyBBZGRQcm9maWxlQ29tcG9uZW50IH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
