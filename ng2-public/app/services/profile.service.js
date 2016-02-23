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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9wcm9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiUHJvZmlsZSIsIlByb2ZpbGUuY29uc3RydWN0b3IiLCJQcm9maWxlU2VydmljZSIsIlByb2ZpbGVTZXJ2aWNlLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFLQ0EsaUJBQW1CQSxJQUFnQ0EsRUFDekNBLEdBQWtCQSxFQUNsQkEsWUFBaURBO29CQUYvQ0Msb0JBQXVDQSxHQUF2Q0Esd0JBQXVDQTtvQkFDaERBLG1CQUF5QkEsR0FBekJBLFVBQXlCQTtvQkFDekJBLDRCQUF3REEsR0FBeERBLHlDQUF3REE7b0JBRnhDQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUE0QkE7b0JBQ3pDQSxRQUFHQSxHQUFIQSxHQUFHQSxDQUFlQTtvQkFDbEJBLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFxQ0E7b0JBTjNEQSxjQUFTQSxHQUFhQSxFQUFFQSxDQUFDQTtvQkFDekJBLE9BQUVBLEdBQVdBLENBQUNBLENBQUNBLENBQUNBO29CQUNoQkEsUUFBR0EsR0FBV0EsbUNBQW1DQSxDQUFDQTtnQkFJYUEsQ0FBQ0E7Z0JBQ2pFRCxjQUFDQTtZQUFEQSxDQVJBLEFBUUNBLElBQUE7WUFHRDtnQkFJQ0Usd0JBQW1CQSxJQUFVQTtvQkFBVkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBTUE7b0JBRjdCQSxhQUFRQSxHQUFjQSxFQUFFQSxDQUFDQTtnQkFFT0EsQ0FBQ0E7Z0JBSmxDRDtvQkFBQ0EsaUJBQVVBLEVBQUVBOzttQ0FPWkE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQVBBLEFBT0NBLElBQUE7WUFFUSwyQ0FBYztZQUFFLDZCQUFPIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9wcm9maWxlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmludGVyZmFjZSBQcm9maWxlSW50ZXJmYWNlIHtcclxuXHRpZD86IG51bWJlcjtcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0YWdlOiBudW1iZXI7XHJcblx0ZmF2b3JpdGVGb29kOiBzdHJpbmc7XHJcblx0aW1hZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIFByb2ZpbGUgaW1wbGVtZW50cyBQcm9maWxlSW50ZXJmYWNlIHtcclxuXHRpbnRlcmVzdHM6IHN0cmluZ1tdID0gW107XHJcblx0aWQ6IG51bWJlciA9IC0xO1xyXG5cdGltZzogc3RyaW5nID0gJy9jb21tb24tYXNzZXRzL2dlbmVyaWMtYXZhdGFyLnBuZyc7XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZyA9ICdFbGV2ZW50aCBEb2N0b3InLCBcclxuXHRcdFx0XHRwdWJsaWMgYWdlOiBudW1iZXIgPSAxMjQ1LFxyXG5cdFx0XHRcdHB1YmxpYyBmYXZvcml0ZUZvb2Q6IHN0cmluZyA9ICdGaXNoIEZpbmdlcnMgYW5kIEN1c3RhcmQnKSB7IH1cclxufVxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xyXG5cdHByb2ZpbGVzOiBQcm9maWxlW10gPSBbXTtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge31cclxuXHRcclxuXHRcclxufVxyXG5cclxuZXhwb3J0IHsgUHJvZmlsZVNlcnZpY2UsIFByb2ZpbGUsIFByb2ZpbGVJbnRlcmZhY2UgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
