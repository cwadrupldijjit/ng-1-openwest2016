System.register(['@angular/core', '@angular/forms', '../../services/profile.service'], function(exports_1, context_1) {
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
    var core_1, forms_1, profile_service_1;
    var MeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            }],
        execute: function() {
            MeComponent = (function () {
                function MeComponent(ProfileService) {
                    this.ProfileService = ProfileService;
                    this.profile = { interests: [] };
                    this.interestsEdit = [];
                    this.newInterest = { name: '' };
                }
                MeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.ProfileService.getMe()
                        .subscribe(function (response) { _this.profile = response; }, function (err) { return console.warn(err); });
                };
                MeComponent.prototype.editInterest = function (index) {
                    try {
                        if (index === undefined) {
                            throw ('You\'re trying to edit an interest that doesn\'t exist');
                        }
                        if (index === 'new')
                            this.interestsEdit[index] = { name: '' };
                        else
                            this.interestsEdit[index] = JSON.parse(JSON.stringify(this.profile.interests[index]));
                    }
                    catch (e) {
                        alert(e);
                    }
                };
                MeComponent.prototype.deleteInterest = function (index) {
                    var _this = this;
                    try {
                        if (index === undefined) {
                            throw ('You\'re trying to delete an interest that doesn\'t exist');
                        }
                        if (confirm('Are you sure you want to delete this interest?')) {
                            this.ProfileService.deleteInterest(this.profile.interests[index], this.profile._id)
                                .subscribe(function (response) {
                                _this.profile.interests.splice(index, 1);
                            }, function (err) { return console.warn(err); });
                        }
                    }
                    catch (e) {
                        alert(e);
                    }
                };
                MeComponent.prototype.saveInterest = function (index) {
                    var _this = this;
                    var interest;
                    if (index === 'new') {
                        interest = this.newInterest;
                    }
                    else {
                        interest = this.interestsEdit[index];
                    }
                    this.ProfileService
                        .saveInterest(interest, this.profile._id, index)
                        .subscribe(function (response) {
                        if (index === 'new') {
                            _this.profile.interests.push(response);
                            _this.newInterest = { name: '' };
                        }
                        else {
                            _this.profile.interests[index] = response;
                        }
                        _this.interestsEdit[index] = null;
                    }, function (err) { return console.warn(err); });
                };
                MeComponent.prototype.cancelInterestEdit = function (index) {
                    if (index === 'new') {
                        this.newInterest = { name: '' };
                    }
                    else {
                        this.profile.interests[index] = this.interestsEdit[index];
                    }
                    this.interestsEdit[index] = null;
                };
                MeComponent = __decorate([
                    core_1.Component({
                        selector: 'me',
                        providers: [
                            profile_service_1.ProfileService
                        ],
                        templateUrl: '/ng2-app/profiles/me/profiles-me.template.html',
                        styleUrls: [
                            'ng2-app/profiles/profile-subviews.styles.css'
                        ],
                        directives: [
                            forms_1.FORM_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService])
                ], MeComponent);
                return MeComponent;
            }());
            exports_1("MeComponent", MeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy9tZS9wcm9maWxlcy1tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBS0MscUJBQW1CLGNBQThCO29CQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBSmpELFlBQU8sR0FBdUMsRUFBQyxTQUFTLEVBQUUsRUFBRSxFQUFDLENBQUM7b0JBQzlELGtCQUFhLEdBQUcsRUFBRSxDQUFDO29CQUNuQixnQkFBVyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUUyQixDQUFDO2dCQUVyRCw4QkFBUSxHQUFSO29CQUFBLGlCQUlDO29CQUhBLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFO3lCQUN6QixTQUFTLENBQUMsVUFBQyxRQUFRLElBQU0sS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUEsQ0FBQSxDQUFDLEVBQzdDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELGtDQUFZLEdBQVosVUFBYSxLQUFLO29CQUNqQixJQUFJLENBQUM7d0JBQ0osRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLE1BQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO3dCQUNqRSxDQUFDO3dCQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7NEJBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7d0JBQ3hDLElBQUk7NEJBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FB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Q0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDM0QsQ0FBQztvQkFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDbEMsQ0FBQztnQkF2RkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsSUFBSTt3QkFDZCxTQUFTLEVBQUU7NEJBQ1YsZ0NBQWM7eUJBQ2Q7d0JBQ0QsV0FBVyxFQUFFLGdEQUFnRDt3QkFDN0QsU0FBUyxFQUFFOzRCQUNWLDhDQUE4Qzt5QkFDOUM7d0JBQ0QsVUFBVSxFQUFFOzRCQUNYLHVCQUFlO3lCQUNmO3FCQUNELENBQUM7OytCQUFBO2dCQTRFRixrQkFBQztZQUFELENBM0VBLEFBMkVDLElBQUE7WUFFUSxxQ0FBVyIsImZpbGUiOiJhcHAvcHJvZmlsZXMvbWUvcHJvZmlsZXMtbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSwgUHJvZmlsZUludGVyZmFjZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2ZpbGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ21lJyxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdFByb2ZpbGVTZXJ2aWNlXHJcblx0XSxcclxuXHR0ZW1wbGF0ZVVybDogJy9uZzItYXBwL3Byb2ZpbGVzL21lL3Byb2ZpbGVzLW1lLnRlbXBsYXRlLmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0J25nMi1hcHAvcHJvZmlsZXMvcHJvZmlsZS1zdWJ2aWV3cy5zdHlsZXMuY3NzJ1xyXG5cdF0sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0Rk9STV9ESVJFQ1RJVkVTXHJcblx0XVxyXG59KVxyXG5jbGFzcyBNZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cHJvZmlsZTogUHJvZmlsZUludGVyZmFjZSA9IDxQcm9maWxlSW50ZXJmYWNlPntpbnRlcmVzdHM6IFtdfTtcclxuXHRpbnRlcmVzdHNFZGl0ID0gW107XHJcblx0bmV3SW50ZXJlc3QgPSB7bmFtZTogJyd9O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBQcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UpIHt9XHJcblx0XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLlByb2ZpbGVTZXJ2aWNlLmdldE1lKClcclxuXHRcdFx0LnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHt0aGlzLnByb2ZpbGUgPSByZXNwb25zZX0sXHJcblx0XHRcdFx0XHQgICAoZXJyKSA9PiBjb25zb2xlLndhcm4oZXJyKSk7XHJcblx0fVxyXG5cdFxyXG5cdGVkaXRJbnRlcmVzdChpbmRleCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0aWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHR0aHJvdygnWW91XFwncmUgdHJ5aW5nIHRvIGVkaXQgYW4gaW50ZXJlc3QgdGhhdCBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGluZGV4ID09PSAnbmV3JykgXHJcblx0XHRcdFx0dGhpcy5pbnRlcmVzdHNFZGl0W2luZGV4XSA9IHtuYW1lOiAnJ307XHJcblx0XHRcdGVsc2UgdGhpcy5pbnRlcmVzdHNFZGl0W2luZGV4XSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9maWxlLmludGVyZXN0c1tpbmRleF0pKTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0YWxlcnQoZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGRlbGV0ZUludGVyZXN0KGluZGV4KSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHRocm93KCdZb3VcXCdyZSB0cnlpbmcgdG8gZGVsZXRlIGFuIGludGVyZXN0IHRoYXQgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpbnRlcmVzdD8nKSkge1xyXG5cdFx0XHRcdHRoaXMuUHJvZmlsZVNlcnZpY2UuZGVsZXRlSW50ZXJlc3QodGhpcy5wcm9maWxlLmludGVyZXN0c1tpbmRleF0sIHRoaXMucHJvZmlsZS5faWQpXHJcblx0XHRcdFx0XHRcdC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9maWxlLmludGVyZXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0XHR9LCAoZXJyKSA9PiBjb25zb2xlLndhcm4oZXJyKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0YWxlcnQoZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHNhdmVJbnRlcmVzdChpbmRleCkge1xyXG5cdFx0XHR2YXIgaW50ZXJlc3Q7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoaW5kZXggPT09ICduZXcnKSB7XHJcblx0XHRcdFx0aW50ZXJlc3QgPSB0aGlzLm5ld0ludGVyZXN0O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGludGVyZXN0ID0gdGhpcy5pbnRlcmVzdHNFZGl0W2luZGV4XTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5Qcm9maWxlU2VydmljZVxyXG5cdFx0XHRcdC5zYXZlSW50ZXJlc3QoaW50ZXJlc3QsIHRoaXMucHJvZmlsZS5faWQsIGluZGV4KVxyXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGluZGV4ID09PSAnbmV3Jykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvZmlsZS5pbnRlcmVzdHMucHVzaChyZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5uZXdJbnRlcmVzdCA9IHtuYW1lOiAnJ307XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9maWxlLmludGVyZXN0c1tpbmRleF0gPSByZXNwb25zZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGhpcy5pbnRlcmVzdHNFZGl0W2luZGV4XSA9IG51bGw7IFxyXG5cdFx0XHRcdFx0fSwgKGVycikgPT4gY29uc29sZS53YXJuKGVycikpO1xyXG5cdH1cclxuXHRcclxuXHRjYW5jZWxJbnRlcmVzdEVkaXQoaW5kZXgpIHtcclxuXHRcdGlmIChpbmRleCA9PT0gJ25ldycpIHtcclxuXHRcdFx0dGhpcy5uZXdJbnRlcmVzdCA9IHtuYW1lOiAnJ307XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnByb2ZpbGUuaW50ZXJlc3RzW2luZGV4XSA9IHRoaXMuaW50ZXJlc3RzRWRpdFtpbmRleF07XHJcblx0XHR9XHJcblx0XHR0aGlzLmludGVyZXN0c0VkaXRbaW5kZXhdID0gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE1lQ29tcG9uZW50IH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
