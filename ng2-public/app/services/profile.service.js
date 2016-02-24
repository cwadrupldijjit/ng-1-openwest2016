System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var Profile, ProfileService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Profile = (function () {
                function Profile(name, age, favoriteFood) {
                    if (name === void 0) { name = 'Eleventh Doctor'; }
                    if (age === void 0) { age = 1245; }
                    if (favoriteFood === void 0) { favoriteFood = 'Fish Fingers and Custard'; }
                    this.name = name;
                    this.age = age;
                    this.favoriteFood = favoriteFood;
                    this.interests = [];
                    this.id = -1;
                    this.img = '/common-assets/generic-avatar.png';
                }
                return Profile;
            })();
            ProfileService = (function () {
                function ProfileService(http) {
                    this.http = http;
                    this.profiles = [];
                }
                ProfileService.prototype.getMe = function () {
                    return this.http.get('/api/profiles/me')
                        .map(function (response) { return response.json(); });
                };
                ProfileService.prototype.getCurrentProfiles = function () {
                    var _this = this;
                    return this.http.get('/api/profiles/current')
                        .map(function (response) { return _this.profiles = response.json(); });
                };
                ProfileService.prototype.getProfile = function (id) {
                    return this.http.get('/api/profiles/' + id)
                        .map(function (response) { return response.json(); });
                };
                ProfileService.prototype.saveProfile = function (profile) {
                    var _this = this;
                    return this.http.post('/api/profiles/add', profile)
                        .map(function (response) {
                        _this.profiles.push(response.json());
                        return response.json();
                    });
                };
                ProfileService.prototype.saveInterest = function (interest, profileId, index) {
                    var url = '/api/profiles/' + profileId + '/interests';
                    var data = { interest: interest };
                    if (index !== 'new') {
                        url += '?index=' + index;
                    }
                    return this.http.post(url, JSON.stringify(data))
                        .map(function (response) { return response.json(); });
                };
                ProfileService.prototype.deleteInterest = function (interest, profileId) {
                    var data = { interest: interest };
                    return this.http.delete('/api/profiles/' + profileId, data)
                        .map(function (response) { return response.json(); });
                };
                ProfileService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProfileService);
                return ProfileService;
            })();
            exports_1("ProfileService", ProfileService);
            exports_1("Profile", Profile);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9wcm9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiUHJvZmlsZSIsIlByb2ZpbGUuY29uc3RydWN0b3IiLCJQcm9maWxlU2VydmljZSIsIlByb2ZpbGVTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiUHJvZmlsZVNlcnZpY2UuZ2V0TWUiLCJQcm9maWxlU2VydmljZS5nZXRDdXJyZW50UHJvZmlsZXMiLCJQcm9maWxlU2VydmljZS5nZXRQcm9maWxlIiwiUHJvZmlsZVNlcnZpY2Uuc2F2ZVByb2ZpbGUiLCJQcm9maWxlU2VydmljZS5zYXZlSW50ZXJlc3QiLCJQcm9maWxlU2VydmljZS5kZWxldGVJbnRlcmVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBS0NBLGlCQUFtQkEsSUFBZ0NBLEVBQ3pDQSxHQUFrQkEsRUFDbEJBLFlBQWlEQTtvQkFGL0NDLG9CQUF1Q0EsR0FBdkNBLHdCQUF1Q0E7b0JBQ2hEQSxtQkFBeUJBLEdBQXpCQSxVQUF5QkE7b0JBQ3pCQSw0QkFBd0RBLEdBQXhEQSx5Q0FBd0RBO29CQUZ4Q0EsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBNEJBO29CQUN6Q0EsUUFBR0EsR0FBSEEsR0FBR0EsQ0FBZUE7b0JBQ2xCQSxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBcUNBO29CQU4zREEsY0FBU0EsR0FBYUEsRUFBRUEsQ0FBQ0E7b0JBQ3pCQSxPQUFFQSxHQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDaEJBLFFBQUdBLEdBQVdBLG1DQUFtQ0EsQ0FBQ0E7Z0JBSWFBLENBQUNBO2dCQUNqRUQsY0FBQ0E7WUFBREEsQ0FSQSxBQVFDQSxJQUFBO1lBR0Q7Z0JBSUNFLHdCQUFtQkEsSUFBVUE7b0JBQVZDLFNBQUlBLEdBQUpBLElBQUlBLENBQU1BO29CQUY3QkEsYUFBUUEsR0FBY0EsRUFBRUEsQ0FBQ0E7Z0JBRU9BLENBQUNBO2dCQUVqQ0QsOEJBQUtBLEdBQUxBO29CQUNDRSxNQUFNQSxDQUFDQSxJ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QTtZQUFEQSxDQTVDQSxBQTRDQ0EsSUFBQTtZQUVRLDJDQUFjO1lBQUUsNkJBQU8iLCJmaWxlIjoiYXBwL3NlcnZpY2VzL3Byb2ZpbGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuaW50ZXJmYWNlIFByb2ZpbGVJbnRlcmZhY2Uge1xyXG5cdGlkPzogbnVtYmVyO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRhZ2U6IG51bWJlcjtcclxuXHRmYXZvcml0ZUZvb2Q6IHN0cmluZztcclxuXHRpbWFnZT86IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgUHJvZmlsZSBpbXBsZW1lbnRzIFByb2ZpbGVJbnRlcmZhY2Uge1xyXG5cdGludGVyZXN0czogc3RyaW5nW10gPSBbXTtcclxuXHRpZDogbnVtYmVyID0gLTE7XHJcblx0aW1nOiBzdHJpbmcgPSAnL2NvbW1vbi1hc3NldHMvZ2VuZXJpYy1hdmF0YXIucG5nJztcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nID0gJ0VsZXZlbnRoIERvY3RvcicsIFxyXG5cdFx0XHRcdHB1YmxpYyBhZ2U6IG51bWJlciA9IDEyNDUsXHJcblx0XHRcdFx0cHVibGljIGZhdm9yaXRlRm9vZDogc3RyaW5nID0gJ0Zpc2ggRmluZ2VycyBhbmQgQ3VzdGFyZCcpIHsgfVxyXG59XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5jbGFzcyBQcm9maWxlU2VydmljZSB7XHJcblx0cHJvZmlsZXM6IFByb2ZpbGVbXSA9IFtdO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7fVxyXG5cdFxyXG5cdGdldE1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvcHJvZmlsZXMvbWUnKVxyXG5cdFx0XHRcdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcblx0XHJcblx0Z2V0Q3VycmVudFByb2ZpbGVzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvcHJvZmlsZXMvY3VycmVudCcpXHJcblx0XHRcdFx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiB0aGlzLnByb2ZpbGVzID0gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcblx0XHJcblx0Z2V0UHJvZmlsZShpZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvcHJvZmlsZXMvJyArIGlkKVxyXG5cdFx0XHRcdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcblx0XHJcblx0c2F2ZVByb2ZpbGUocHJvZmlsZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3Byb2ZpbGVzL2FkZCcsIHByb2ZpbGUpXHJcblx0XHRcdFx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9maWxlcy5wdXNoKHJlc3BvbnNlLmpzb24oKSk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdHNhdmVJbnRlcmVzdChpbnRlcmVzdDogc3RyaW5nLCBwcm9maWxlSWQsIGluZGV4KSB7XHJcblx0XHRsZXQgdXJsID0gJy9hcGkvcHJvZmlsZXMvJyArIHByb2ZpbGVJZCArICcvaW50ZXJlc3RzJztcclxuXHRcdGxldCBkYXRhID0ge2ludGVyZXN0fTtcclxuXHRcdGlmIChpbmRleCAhPT0gJ25ldycpIHtcclxuXHRcdFx0dXJsICs9ICc/aW5kZXg9JyArIGluZGV4O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcblx0XHRcdFx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cdH1cclxuXHRcclxuXHRkZWxldGVJbnRlcmVzdChpbnRlcmVzdCwgcHJvZmlsZUlkKSB7XHJcblx0XHRsZXQgZGF0YSA9IHtpbnRlcmVzdH07XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSgnL2FwaS9wcm9maWxlcy8nICsgcHJvZmlsZUlkLCBkYXRhKVxyXG5cdFx0XHRcdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFByb2ZpbGVTZXJ2aWNlLCBQcm9maWxlLCBQcm9maWxlSW50ZXJmYWNlIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
