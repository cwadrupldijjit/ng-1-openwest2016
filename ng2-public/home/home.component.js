System.register(['angular2/core', 'angular2/router'], function(exports_1) {
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
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home'
                    }),
                    core_1.View({
                        templateUrl: '/ng2-app/home/home.template.html',
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSG9tZUNvbXBvbmVudCIsIkhvbWVDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBQTtnQkFXQUMsQ0FBQ0E7Z0JBWEREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLE1BQU1BO3FCQUNoQkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxXQUFXQSxFQUFFQSxrQ0FBa0NBO3dCQUMvQ0EsVUFBVUEsRUFBRUE7NEJBQ1hBLDBCQUFpQkE7eUJBQ2pCQTtxQkFDREEsQ0FBQ0E7O2tDQUdEQTtnQkFBREEsb0JBQUNBO1lBQURBLENBWEEsQUFXQ0EsSUFBQTtZQUVRLHlDQUFhIiwiZmlsZSI6ImhvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnaG9tZSdcclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlVXJsOiAnL25nMi1hcHAvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWwnLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTXHJcblx0XVxyXG59KVxyXG5jbGFzcyBIb21lQ29tcG9uZW50IHtcclxuXHRcclxufVxyXG5cclxuZXhwb3J0IHsgSG9tZUNvbXBvbmVudCB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
