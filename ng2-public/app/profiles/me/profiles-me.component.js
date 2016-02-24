System.register(['angular2/core', '../../services/profile.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, profile_service_1;
    var MeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            }],
        execute: function() {
            MeComponent = (function () {
                function MeComponent(ProfileService) {
                    this.ProfileService = ProfileService;
                    this.profile = {
                        id: undefined,
                        interests: []
                    };
                    this.interestsEdit = [];
                    this.newInterest = '';
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
                            this.interestsEdit[index] = 'true';
                        else
                            this.interestsEdit[index] = this.profile.interests[index];
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
                            this.ProfileService.deleteInterest(this.profile.interests[index], this.profile.id)
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
                        interest = this.profile.interests[index];
                    }
                    this.ProfileService
                        .saveInterest(interest, this.profile.id, index)
                        .subscribe(function (response) {
                        if (index === 'new') {
                            _this.profile.interests.push(response);
                            _this.newInterest = '';
                        }
                        else {
                            _this.profile.interests[index] = response;
                        }
                        _this.interestsEdit[index] = '';
                    }, function (err) { return console.warn(err); });
                };
                MeComponent.prototype.cancelInterestEdit = function (index) {
                    if (index === 'new') {
                        this.newInterest = '';
                    }
                    else {
                        this.profile.interests[index] = this.interestsEdit[index];
                    }
                    this.interestsEdit[index] = '';
                };
                MeComponent = __decorate([
                    core_1.Component({
                        selector: 'me',
                        providers: [
                            profile_service_1.ProfileService
                        ]
                    }),
                    core_1.View({
                        templateUrl: '/ng2-app/profiles/me/profiles-me.template.html',
                        styleUrls: [
                            'ng2-app/profiles/profile-subviews.styles.css'
                        ]
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService])
                ], MeComponent);
                return MeComponent;
            })();
            exports_1("MeComponent", MeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy9tZS9wcm9maWxlcy1tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiTWVDb21wb25lbnQiLCJNZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIk1lQ29tcG9uZW50Lm5nT25Jbml0IiwiTWVDb21wb25lbnQuZWRpdEludGVyZXN0IiwiTWVDb21wb25lbnQuZGVsZXRlSW50ZXJlc3QiLCJNZUNvbXBvbmVudC5zYXZlSW50ZXJlc3QiLCJNZUNvbXBvbmVudC5jYW5jZWxJbnRlcmVzdEVkaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQW9CQ0EscUJBQW1CQSxjQUE4QkE7b0JBQTlCQyxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBZ0JBO29CQVBqREEsWUFBT0EsR0FBR0E7d0JBQ1RBLEVBQUVBLEVBQUVBLFNBQVNBO3dCQUNiQSxTQUFTQSxFQUFFQSxFQUFFQTtxQkFDYkEsQ0FBQ0E7b0JBQ0ZBLGtCQUFhQSxHQUFHQSxFQUFFQSxDQUFDQTtvQkFDbkJBLGdCQUFXQSxHQUFVQSxFQUFFQSxDQUFDQTtnQkFFNEJBLENBQUNBO2dCQUVyREQsOEJBQVFBLEdBQVJBO29CQUFBRSxpQkFJQ0E7b0JBSEFBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLEtBQUtBLEVBQUVBO3lCQUN6QkEsU0FBU0EsQ0FBQ0EsVUFBQ0EsUUFBUUEsSUFBTUEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsUUFBUUEsQ0FBQUEsQ0FBQUEsQ0FBQ0EsRUFDN0NBLFVBQUNBLEdBQUdBLElBQUtBLE9BQUFBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEVBQWpCQSxDQUFpQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ25DQSxDQUFDQTtnQkFFREYsa0NBQVlBLEdBQVpBLFVBQWFBLEtBQUtBO29CQUNqQkcsSUFBSUEsQ0FBQ0E7d0JBQ0pBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLEtBQUtBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBOzRC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RkNBLElBQUE7WUFFUSxxQ0FBVyIsImZpbGUiOiJhcHAvcHJvZmlsZXMvbWUvcHJvZmlsZXMtbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UsIFByb2ZpbGUsIFByb2ZpbGVJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9maWxlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdtZScsXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHRQcm9maWxlU2VydmljZVxyXG5cdF1cclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlVXJsOiAnL25nMi1hcHAvcHJvZmlsZXMvbWUvcHJvZmlsZXMtbWUudGVtcGxhdGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnbmcyLWFwcC9wcm9maWxlcy9wcm9maWxlLXN1YnZpZXdzLnN0eWxlcy5jc3MnXHJcblx0XVxyXG59KVxyXG5jbGFzcyBNZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cHJvZmlsZSA9IHtcclxuXHRcdGlkOiB1bmRlZmluZWQsXHJcblx0XHRpbnRlcmVzdHM6IFtdXHJcblx0fTtcclxuXHRpbnRlcmVzdHNFZGl0ID0gW107XHJcblx0bmV3SW50ZXJlc3Q6c3RyaW5nID0gJyc7XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHVibGljIFByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSkge31cclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuUHJvZmlsZVNlcnZpY2UuZ2V0TWUoKVxyXG5cdFx0XHQuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge3RoaXMucHJvZmlsZSA9IHJlc3BvbnNlfSxcclxuXHRcdFx0XHRcdCAgIChlcnIpID0+IGNvbnNvbGUud2FybihlcnIpKTtcclxuXHR9XHJcblx0XHJcblx0ZWRpdEludGVyZXN0KGluZGV4KSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHRocm93KCdZb3VcXCdyZSB0cnlpbmcgdG8gZWRpdCBhbiBpbnRlcmVzdCB0aGF0IGRvZXNuXFwndCBleGlzdCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoaW5kZXggPT09ICduZXcnKSBcclxuXHRcdFx0XHR0aGlzLmludGVyZXN0c0VkaXRbaW5kZXhdID0gJ3RydWUnO1xyXG5cdFx0XHRlbHNlIHRoaXMuaW50ZXJlc3RzRWRpdFtpbmRleF0gPSB0aGlzLnByb2ZpbGUuaW50ZXJlc3RzW2luZGV4XTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0YWxlcnQoZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGRlbGV0ZUludGVyZXN0KGluZGV4KSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHRocm93KCdZb3VcXCdyZSB0cnlpbmcgdG8gZGVsZXRlIGFuIGludGVyZXN0IHRoYXQgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpbnRlcmVzdD8nKSkge1xyXG5cdFx0XHRcdHRoaXMuUHJvZmlsZVNlcnZpY2UuZGVsZXRlSW50ZXJlc3QodGhpcy5wcm9maWxlLmludGVyZXN0c1tpbmRleF0sIHRoaXMucHJvZmlsZS5pZClcclxuXHRcdFx0XHRcdFx0LnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnByb2ZpbGUuaW50ZXJlc3RzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0XHRcdH0sIChlcnIpID0+IGNvbnNvbGUud2FybihlcnIpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRhbGVydChlKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0c2F2ZUludGVyZXN0KGluZGV4KSB7XHJcblx0XHRcdHZhciBpbnRlcmVzdDtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChpbmRleCA9PT0gJ25ldycpIHtcclxuXHRcdFx0XHRpbnRlcmVzdCA9IHRoaXMubmV3SW50ZXJlc3Q7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aW50ZXJlc3QgPSB0aGlzLnByb2ZpbGUuaW50ZXJlc3RzW2luZGV4XTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5Qcm9maWxlU2VydmljZVxyXG5cdFx0XHRcdC5zYXZlSW50ZXJlc3QoaW50ZXJlc3QsIHRoaXMucHJvZmlsZS5pZCwgaW5kZXgpXHJcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoaW5kZXggPT09ICduZXcnKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9maWxlLmludGVyZXN0cy5wdXNoKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5ld0ludGVyZXN0ID0gJyc7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9maWxlLmludGVyZXN0c1tpbmRleF0gPSByZXNwb25zZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGhpcy5pbnRlcmVzdHNFZGl0W2luZGV4XSA9ICcnO1xyXG5cdFx0XHRcdFx0fSwgKGVycikgPT4gY29uc29sZS53YXJuKGVycikpO1xyXG5cdH1cclxuXHRcclxuXHRjYW5jZWxJbnRlcmVzdEVkaXQoaW5kZXgpIHtcclxuXHRcdGlmIChpbmRleCA9PT0gJ25ldycpIHtcclxuXHRcdFx0dGhpcy5uZXdJbnRlcmVzdCA9ICcnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5wcm9maWxlLmludGVyZXN0c1tpbmRleF0gPSB0aGlzLmludGVyZXN0c0VkaXRbaW5kZXhdO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5pbnRlcmVzdHNFZGl0W2luZGV4XSA9ICcnO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHsgTWVDb21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
