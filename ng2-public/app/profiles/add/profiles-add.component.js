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
                function AddProfileComponent(ProfileService, Router) {
                    this.ProfileService = ProfileService;
                    this.Router = Router;
                    this.profile = JSON.parse(JSON.stringify(this.ProfileService.example));
                    this.interestsEdit = [];
                    this.newInterest = { name: '' };
                }
                AddProfileComponent.prototype.saveProfile = function () {
                    var _this = this;
                    this.ProfileService.saveProfile(this.profile)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.Router.navigate(['/profiles/view', response._id]);
                    }, function (err) { return console.warn(err); });
                };
                AddProfileComponent.prototype.cancelInterestEdit = function (index) {
                    if (index === 'new') {
                        this.newInterest = { name: '' };
                    }
                    else {
                        this.profile.interests[index] = this.interestsEdit[index];
                    }
                    this.interestsEdit[index] = '';
                };
                AddProfileComponent.prototype.cancelEditProfile = function () {
                    this.Router.navigate(['/profiles']);
                };
                AddProfileComponent.prototype.saveInterest = function (index) {
                    if (index === 'new') {
                        this.profile.interests.push(this.newInterest);
                        this.newInterest = { name: '' };
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
                        selector: 'add',
                        templateUrl: '/ng2-app/profiles/add/profiles-add.template.html',
                        styleUrls: [
                            'ng2-app/profiles/profile-subroutes.styles.css'
                        ],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService, router_1.Router])
                ], AddProfileComponent);
                return AddProfileComponent;
            }());
            exports_1("AddProfileComponent", AddProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy9hZGQvcHJvZmlsZXMtYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUtDLDZCQUFtQixjQUE4QixFQUN2QyxNQUFjO29CQURMLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFDdkMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFMeEIsWUFBTyxHQUF1QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN0RyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztvQkFDbkIsZ0JBQVcsR0FBdUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7Z0JBR2xDLENBQUM7Z0JBRTVCLHlDQUFXLEdBQVg7b0JBQUEsaUJBTUM7b0JBTEEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDMUMsU0FBUyxDQUFDLFVBQUMsUUFBUTt3QkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDdEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDeEQsQ0FBQyxFQUFFLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUVELGdEQUFrQixHQUFsQixVQUFtQixLQUFLO29CQUN2QixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDL0IsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMzRCxDQUFDO29CQUNELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELCtDQUFpQixHQUFqQjtvQkFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRUQsMENBQVksR0FBWixVQUFhLEtBQUs7b0JBQ2pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUMvQixDQUFDO29CQUNELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELDRDQUFjLEdBQWQsVUFBZSxLQUFLO29CQUNuQixJQUFJLENBQUM7d0JBQ0osRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLE1BQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO3dCQUNuRSxDQUFDO3dCQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDekMsQ0FBQztvQkFDRixDQUFFO29CQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1osS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNWLENBQUM7Z0JBQ0YsQ0FBQztnQkFFRCwwQ0FBWSxHQUFaLFVBQWEsS0FBSztvQkFDakIsSUFBSSxDQUFDO3dCQUNKLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixNQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQzt3QkFDakUsQ0FBQzt3QkFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDOzRCQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQzt3QkFDcEMsSUFBSTs0QkFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoRSxDQUFFO29CQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1osS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNWLENBQUM7Z0JBQ0YsQ0FBQztnQkF4RUY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsS0FBSzt3QkFDZixXQUFXLEVBQUUsa0RBQWtEO3dCQUMvRCxTQUFTLEVBQUU7NEJBQ1YsK0NBQStDO3lCQUMvQzt3QkFDRCxVQUFVLEVBQUU7NEJBQ1gsMEJBQWlCO3lCQUNqQjtxQkFDRCxDQUFDOzt1Q0FBQTtnQkFnRUYsMEJBQUM7WUFBRCxDQS9EQSxBQStEQyxJQUFBO1lBRVEscURBQW1CIiwiZmlsZSI6ImFwcC9wcm9maWxlcy9hZGQvcHJvZmlsZXMtYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UsIFByb2ZpbGVJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9maWxlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhZGQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnL25nMi1hcHAvcHJvZmlsZXMvYWRkL3Byb2ZpbGVzLWFkZC50ZW1wbGF0ZS5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCduZzItYXBwL3Byb2ZpbGVzL3Byb2ZpbGUtc3Vicm91dGVzLnN0eWxlcy5jc3MnXHJcblx0XSxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblx0XHRST1VURVJfRElSRUNUSVZFU1xyXG5cdF0sXHJcbn0pXHJcbmNsYXNzIEFkZFByb2ZpbGVDb21wb25lbnQge1xyXG5cdHByb2ZpbGU6IFByb2ZpbGVJbnRlcmZhY2UgPSA8UHJvZmlsZUludGVyZmFjZT5KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuUHJvZmlsZVNlcnZpY2UuZXhhbXBsZSkpO1xyXG5cdGludGVyZXN0c0VkaXQgPSBbXTtcclxuXHRuZXdJbnRlcmVzdDoge25hbWU6IHN0cmluZzsgaWQ/OiBzdHJpbmd8bnVtYmVyfSA9IHtuYW1lOiAnJ307XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHVibGljIFByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSwgXHJcblx0XHRcdFx0cHVibGljIFJvdXRlcjogUm91dGVyKSB7fVxyXG5cdFxyXG5cdHNhdmVQcm9maWxlKCkge1xyXG5cdFx0dGhpcy5Qcm9maWxlU2VydmljZS5zYXZlUHJvZmlsZSh0aGlzLnByb2ZpbGUpXHJcblx0XHRcdFx0LnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdHRoaXMuUm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbGVzL3ZpZXcnLCByZXNwb25zZS5faWRdKTtcclxuXHRcdFx0XHR9LCAoZXJyKSA9PiBjb25zb2xlLndhcm4oZXJyKSk7XHJcblx0fVxyXG5cdFxyXG5cdGNhbmNlbEludGVyZXN0RWRpdChpbmRleCkge1xyXG5cdFx0aWYgKGluZGV4ID09PSAnbmV3Jykge1xyXG5cdFx0XHR0aGlzLm5ld0ludGVyZXN0ID0ge25hbWU6ICcnfTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucHJvZmlsZS5pbnRlcmVzdHNbaW5kZXhdID0gdGhpcy5pbnRlcmVzdHNFZGl0W2luZGV4XTtcclxuXHRcdH1cclxuXHRcdHRoaXMuaW50ZXJlc3RzRWRpdFtpbmRleF0gPSAnJztcclxuXHR9XHJcblx0XHJcblx0Y2FuY2VsRWRpdFByb2ZpbGUoKSB7XHJcblx0XHR0aGlzLlJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxlcyddKTtcclxuXHR9XHJcblx0XHJcblx0c2F2ZUludGVyZXN0KGluZGV4KSB7XHJcblx0XHRpZiAoaW5kZXggPT09ICduZXcnKSB7XHJcblx0XHRcdHRoaXMucHJvZmlsZS5pbnRlcmVzdHMucHVzaCh0aGlzLm5ld0ludGVyZXN0KTtcclxuXHRcdFx0dGhpcy5uZXdJbnRlcmVzdCA9IHtuYW1lOiAnJ307XHJcblx0XHR9XHJcblx0XHR0aGlzLmludGVyZXN0c0VkaXRbaW5kZXhdID0gJyc7XHJcblx0fVxyXG5cdFxyXG5cdGRlbGV0ZUludGVyZXN0KGluZGV4KSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHRocm93KCdZb3VcXCdyZSB0cnlpbmcgdG8gZGVsZXRlIGFuIGludGVyZXN0IHRoYXQgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpbnRlcmVzdD8nKSkge1xyXG5cdFx0XHRcdHRoaXMucHJvZmlsZS5pbnRlcmVzdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRhbGVydChlKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZWRpdEludGVyZXN0KGluZGV4KSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHRocm93KCdZb3VcXCdyZSB0cnlpbmcgdG8gZWRpdCBhbiBpbnRlcmVzdCB0aGF0IGRvZXNuXFwndCBleGlzdCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoaW5kZXggPT09ICduZXcnKSBcclxuXHRcdFx0XHR0aGlzLmludGVyZXN0c0VkaXRbaW5kZXhdID0gJ2JsYWgnO1xyXG5cdFx0XHRlbHNlIHRoaXMuaW50ZXJlc3RzRWRpdFtpbmRleF0gPSB0aGlzLnByb2ZpbGUuaW50ZXJlc3RzW2luZGV4XTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0YWxlcnQoZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgeyBBZGRQcm9maWxlQ29tcG9uZW50IH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
