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
                    this.postHeaders = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    this.postOptions = {
                        headers: this.postHeaders
                    };
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
                    var data = JSON.stringify(profile);
                    return this.http.post('/api/profiles/add', data, this.postOptions)
                        .map(function (response) {
                        _this.profiles.push(response.json());
                        return response.json();
                    });
                };
                ProfileService.prototype.saveInterest = function (interest, profileId, index) {
                    var url = '/api/profiles/' + profileId + '/interests';
                    var data = JSON.stringify({ interest: interest });
                    if (index !== 'new') {
                        url += '?index=' + index;
                    }
                    return this.http.post(url, data, this.postOptions)
                        .map(function (response) { return response.json(); });
                };
                ProfileService.prototype.deleteInterest = function (interest, profileId) {
                    return this.http.delete('/api/profiles/' + profileId + '/interests?q=' + interest)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9wcm9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiUHJvZmlsZSIsIlByb2ZpbGUuY29uc3RydWN0b3IiLCJQcm9maWxlU2VydmljZSIsIlByb2ZpbGVTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiUHJvZmlsZVNlcnZpY2UuZ2V0TWUiLCJQcm9maWxlU2VydmljZS5nZXRDdXJyZW50UHJvZmlsZXMiLCJQcm9maWxlU2VydmljZS5nZXRQcm9maWxlIiwiUHJvZmlsZVNlcnZpY2Uuc2F2ZVByb2ZpbGUiLCJQcm9maWxlU2VydmljZS5zYXZlSW50ZXJlc3QiLCJQcm9maWxlU2VydmljZS5kZWxldGVJbnRlcmVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBS0NBLGlCQUFtQkEsSUFBZ0NBLEVBQ3pDQSxHQUFrQkEsRUFDbEJBLFlBQWlEQTtvQkFGL0NDLG9CQUF1Q0EsR0FBdkNBLHdCQUF1Q0E7b0JBQ2hEQSxtQkFBeUJBLEdBQXpCQSxVQUF5QkE7b0JBQ3pCQSw0QkFBd0RBLEdBQXhEQSx5Q0FBd0RBO29CQUZ4Q0EsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBNEJBO29CQUN6Q0EsUUFBR0EsR0FBSEEsR0FBR0EsQ0FBZUE7b0JBQ2xCQSxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBcUNBO29CQU4zREEsY0FBU0EsR0FBYUEsRUFBRUEsQ0FBQ0E7b0JBQ3pCQSxPQUFFQSxHQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDaEJBLFFBQUdBLEdBQVdBLG1DQUFtQ0EsQ0FBQ0E7Z0JBSWFBLENBQUNBO2dCQUNqRUQsY0FBQ0E7WUFBREEsQ0FSQSxBQVFDQSxJQUFBO1lBR0Q7Z0JBVUNFLHdCQUFtQkEsSUFBVUE7b0JBQVZDLFNBQUlBLEdBQUpBLElBQUlBLENBQU1BO29CQVI3QkEsYUFBUUEsR0FBY0EsRUFBRUEsQ0FBQ0E7b0JBQ3pCQSxnQkFBV0EsR0FBWUEsSUFBSUEsY0FBT0EsQ0FBQ0E7d0JBQ2xDQSxjQUFjQSxF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QSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxnQkFBZ0JBLEdBQUdBLFNBQVNBLEdBQUdBLGVBQWVBLEdBQUdBLFFBQVFBLENBQUNBO3lCQUM3RUEsR0FBR0EsQ0FBQ0EsVUFBQ0EsUUFBUUEsSUFBS0EsT0FBQUEsUUFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBZkEsQ0FBZUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pDQSxDQUFDQTtnQkFqREZQO29CQUFDQSxpQkFBVUEsRUFBRUE7O21DQWtEWkE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQWxEQSxBQWtEQ0EsSUFBQTtZQUVRLDJDQUFjO1lBQUUsNkJBQU8iLCJmaWxlIjoiYXBwL3NlcnZpY2VzL3Byb2ZpbGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RNZXRob2QgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmludGVyZmFjZSBQcm9maWxlSW50ZXJmYWNlIHtcclxuXHRpZD86IG51bWJlcjtcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0YWdlOiBudW1iZXI7XHJcblx0ZmF2b3JpdGVGb29kOiBzdHJpbmc7XHJcblx0aW1hZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIFByb2ZpbGUgaW1wbGVtZW50cyBQcm9maWxlSW50ZXJmYWNlIHtcclxuXHRpbnRlcmVzdHM6IHN0cmluZ1tdID0gW107XHJcblx0aWQ6IG51bWJlciA9IC0xO1xyXG5cdGltZzogc3RyaW5nID0gJy9jb21tb24tYXNzZXRzL2dlbmVyaWMtYXZhdGFyLnBuZyc7XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZyA9ICdFbGV2ZW50aCBEb2N0b3InLCBcclxuXHRcdFx0XHRwdWJsaWMgYWdlOiBudW1iZXIgPSAxMjQ1LFxyXG5cdFx0XHRcdHB1YmxpYyBmYXZvcml0ZUZvb2Q6IHN0cmluZyA9ICdGaXNoIEZpbmdlcnMgYW5kIEN1c3RhcmQnKSB7IH1cclxufVxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xyXG5cdHByb2ZpbGVzOiBQcm9maWxlW10gPSBbXTtcclxuXHRwb3N0SGVhZGVyczogSGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHR9KTtcclxuXHRwb3N0T3B0aW9ucyA9IHtcclxuXHRcdGhlYWRlcnM6IHRoaXMucG9zdEhlYWRlcnNcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7fVxyXG5cdFxyXG5cdGdldE1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvcHJvZmlsZXMvbWUnKVxyXG5cdFx0XHRcdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcblx0XHJcblx0Z2V0Q3VycmVudFByb2ZpbGVzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvcHJvZmlsZXMvY3VycmVudCcpXHJcblx0XHRcdFx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiB0aGlzLnByb2ZpbGVzID0gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcblx0XHJcblx0Z2V0UHJvZmlsZShpZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvcHJvZmlsZXMvJyArIGlkKVxyXG5cdFx0XHRcdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcblx0XHJcblx0c2F2ZVByb2ZpbGUocHJvZmlsZSkge1xyXG5cdFx0bGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShwcm9maWxlKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9wcm9maWxlcy9hZGQnLCBkYXRhLCB0aGlzLnBvc3RPcHRpb25zKVxyXG5cdFx0XHRcdFx0XHQubWFwKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvZmlsZXMucHVzaChyZXNwb25zZS5qc29uKCkpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHRzYXZlSW50ZXJlc3QoaW50ZXJlc3Q6IHN0cmluZywgcHJvZmlsZUlkLCBpbmRleCkge1xyXG5cdFx0bGV0IHVybCA9ICcvYXBpL3Byb2ZpbGVzLycgKyBwcm9maWxlSWQgKyAnL2ludGVyZXN0cyc7XHJcblx0XHRsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtpbnRlcmVzdH0pO1xyXG5cdFx0aWYgKGluZGV4ICE9PSAnbmV3Jykge1xyXG5cdFx0XHR1cmwgKz0gJz9pbmRleD0nICsgaW5kZXg7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhLCB0aGlzLnBvc3RPcHRpb25zKVxyXG5cdFx0XHRcdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcblx0XHJcblx0ZGVsZXRlSW50ZXJlc3QoaW50ZXJlc3QsIHByb2ZpbGVJZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJy9hcGkvcHJvZmlsZXMvJyArIHByb2ZpbGVJZCArICcvaW50ZXJlc3RzP3E9JyArIGludGVyZXN0KVxyXG5cdFx0XHRcdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFByb2ZpbGVTZXJ2aWNlLCBQcm9maWxlLCBQcm9maWxlSW50ZXJmYWNlIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
