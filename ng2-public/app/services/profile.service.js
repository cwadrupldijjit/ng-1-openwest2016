System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ProfileService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
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
                    this.example = {
                        name: 'Eleventh Doctor',
                        age: 1247,
                        favoriteFood: 'Fish Fingers and Custard',
                        image: '',
                        interests: []
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
                    var data = JSON.stringify(interest);
                    return this.http.post(url, data, this.postOptions)
                        .map(function (response) { return response.json(); });
                };
                ProfileService.prototype.deleteInterest = function (interest, profileId) {
                    return this.http.delete('/api/profiles/' + profileId + '/interests?q=' + interest._id)
                        .map(function (response) { return response.json(); });
                };
                ProfileService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProfileService);
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9wcm9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBZ0JDLHdCQUFtQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBZjdCLGFBQVEsR0FBdUIsRUFBRSxDQUFDO29CQUNsQyxnQkFBVyxHQUFZLElBQUksY0FBTyxDQUFDO3dCQUNsQyxjQUFjLEVBQUUsa0JBQWtCO3FCQUNsQyxDQUFDLENBQUM7b0JBQ0gsZ0JBQVcsR0FBRzt3QkFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVc7cUJBQ3pCLENBQUM7b0JBQ0YsWUFBTyxHQUFxQjt3QkFDM0IsSUFBSSxFQUFFLGlCQUFpQjt3QkFDdkIsR0FBRyxFQUFFLElBQUk7d0JBQ1QsWUFBWSxFQUFFLDBCQUEwQjt3QkFDeEMsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsU0FBUyxFQUFFLEVBQUU7cUJBQ2IsQ0FBQztnQkFFOEIsQ0FBQztnQkFFakMsOEJBQUssR0FBTDtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7eUJBQ25DLEdBQUcsQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFFRCwyQ0FBa0IsR0FBbEI7b0JBQUEsaUJBR0M7b0JBRkEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDO3lCQUN4QyxHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO2dCQUVELG1DQUFVLEdBQVYsVUFBVyxFQUFFO29CQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7eUJBQ3RDLEdBQUcsQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBTztvQkFBbkIsaUJBT0M7b0JBTkEsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO3lCQUM3RCxHQUFHLENBQUMsVUFBQyxRQUFRO3dCQUNiLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUNwQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN4QixDQUFDLENBQUMsQ0FBQztnQkFDUixDQUFDO2dCQUVELHFDQUFZLEdBQVosVUFBYSxRQUFnQixFQUFFLFNBQVMsRUFBRSxLQUFLO29CQUM5QyxJQUFJLEdBQUcsR0FBRyxnQkFBZ0IsR0FBRyxTQUFTLEdBQUcsWUFBWSxDQUFDO29CQUN0RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUVwQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO3lCQUM3QyxHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUQsdUNBQWMsR0FBZCxVQUFlLFFBQVEsRUFBRSxTQUFTO29CQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxHQUFHLGVBQWUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO3lCQUNqRixHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBdERGO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQXVEYixxQkFBQztZQUFELENBdERBLEFBc0RDLElBQUE7WUFFUSwyQ0FBYyIsImZpbGUiOiJhcHAvc2VydmljZXMvcHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdE1ldGhvZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW50ZXJmYWNlIFByb2ZpbGVJbnRlcmZhY2Uge1xyXG5cdF9pZD86IHN0cmluZ3xudW1iZXI7XHJcblx0bmFtZT86IHN0cmluZztcclxuXHRhZ2U/OiBudW1iZXI7XHJcblx0ZmF2b3JpdGVGb29kPzogc3RyaW5nO1xyXG5cdGludGVyZXN0cz86IHtcclxuXHRcdG5hbWU6IHN0cmluZzsgXHJcblx0XHRpZD86IHN0cmluZ3xudW1iZXJcclxuXHR9W107XHJcblx0aW1hZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xyXG5cdHByb2ZpbGVzOiBQcm9maWxlSW50ZXJmYWNlW10gPSBbXTtcclxuXHRwb3N0SGVhZGVyczogSGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHR9KTtcclxuXHRwb3N0T3B0aW9ucyA9IHtcclxuXHRcdGhlYWRlcnM6IHRoaXMucG9zdEhlYWRlcnNcclxuXHR9O1xyXG5cdGV4YW1wbGU6IFByb2ZpbGVJbnRlcmZhY2UgPSB7XHJcblx0XHRuYW1lOiAnRWxldmVudGggRG9jdG9yJyxcclxuXHRcdGFnZTogMTI0NyxcclxuXHRcdGZhdm9yaXRlRm9vZDogJ0Zpc2ggRmluZ2VycyBhbmQgQ3VzdGFyZCcsXHJcblx0XHRpbWFnZTogJycsXHJcblx0XHRpbnRlcmVzdHM6IFtdXHJcblx0fTtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge31cclxuXHRcclxuXHRnZXRNZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL3Byb2ZpbGVzL21lJylcclxuXHRcdFx0XHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblx0fVxyXG5cdFxyXG5cdGdldEN1cnJlbnRQcm9maWxlcygpIHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL3Byb2ZpbGVzL2N1cnJlbnQnKVxyXG5cdFx0XHRcdFx0XHQubWFwKChyZXNwb25zZSkgPT4gdGhpcy5wcm9maWxlcyA9IHJlc3BvbnNlLmpzb24oKSk7XHJcblx0fVxyXG5cdFxyXG5cdGdldFByb2ZpbGUoaWQpIHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL3Byb2ZpbGVzLycgKyBpZClcclxuXHRcdFx0XHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblx0fVxyXG5cdFxyXG5cdHNhdmVQcm9maWxlKHByb2ZpbGUpIHtcclxuXHRcdGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkocHJvZmlsZSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvcHJvZmlsZXMvYWRkJywgZGF0YSwgdGhpcy5wb3N0T3B0aW9ucylcclxuXHRcdFx0XHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnByb2ZpbGVzLnB1c2gocmVzcG9uc2UuanNvbigpKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0c2F2ZUludGVyZXN0KGludGVyZXN0OiBzdHJpbmcsIHByb2ZpbGVJZCwgaW5kZXgpIHtcclxuXHRcdGxldCB1cmwgPSAnL2FwaS9wcm9maWxlcy8nICsgcHJvZmlsZUlkICsgJy9pbnRlcmVzdHMnO1xyXG5cdFx0bGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShpbnRlcmVzdCk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGRhdGEsIHRoaXMucG9zdE9wdGlvbnMpXHJcblx0XHRcdFx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cdH1cclxuXHRcclxuXHRkZWxldGVJbnRlcmVzdChpbnRlcmVzdCwgcHJvZmlsZUlkKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSgnL2FwaS9wcm9maWxlcy8nICsgcHJvZmlsZUlkICsgJy9pbnRlcmVzdHM/cT0nICsgaW50ZXJlc3QuX2lkKVxyXG5cdFx0XHRcdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFByb2ZpbGVTZXJ2aWNlLCBQcm9maWxlSW50ZXJmYWNlIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
