System.register(['./profiles.component', './me/profiles-me.component', './view/profiles-view.component', './add/profiles-add.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var profiles_component_1, profiles_me_component_1, profiles_view_component_1, profiles_add_component_1;
    var ProfilesRoutes;
    return {
        setters:[
            function (profiles_component_1_1) {
                profiles_component_1 = profiles_component_1_1;
            },
            function (profiles_me_component_1_1) {
                profiles_me_component_1 = profiles_me_component_1_1;
            },
            function (profiles_view_component_1_1) {
                profiles_view_component_1 = profiles_view_component_1_1;
            },
            function (profiles_add_component_1_1) {
                profiles_add_component_1 = profiles_add_component_1_1;
            }],
        execute: function() {
            exports_1("ProfilesRoutes", ProfilesRoutes = [
                {
                    path: 'profiles',
                    component: profiles_component_1.ProfilesComponent,
                    children: [
                        { path: '' },
                        { path: 'me', component: profiles_me_component_1.MeComponent },
                        { path: 'add', component: profiles_add_component_1.AddProfileComponent },
                        { path: 'view/:id', component: profiles_view_component_1.ViewProfileComponent }
                    ]
                }
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy9wcm9maWxlcy5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQU1hLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBZCw0QkFBQSxjQUFjLEdBQWlCO2dCQUMzQztvQkFDQyxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsU0FBUyxFQUFFLHNDQUFpQjtvQkFDNUIsUUFBUSxFQUFFO3dCQUNULEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQzt3QkFDVixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLG1DQUFXLEVBQUU7d0JBQ3JDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsNENBQW1CLEVBQUM7d0JBQzdDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsOENBQW9CLEVBQUM7cUJBQ25EO2lCQUNEO2FBQ0QsQ0FBQSxDQUFDIiwiZmlsZSI6ImFwcC9wcm9maWxlcy9wcm9maWxlcy5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJDb25maWcgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQcm9maWxlc0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZmlsZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVDb21wb25lbnQgfSBmcm9tICcuL21lL3Byb2ZpbGVzLW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZpZXdQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3Byb2ZpbGVzLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkL3Byb2ZpbGVzLWFkZC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVzUm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogJ3Byb2ZpbGVzJywgXHJcblx0XHRjb21wb25lbnQ6IFByb2ZpbGVzQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e3BhdGg6ICcnfSxcclxuXHRcdFx0e3BhdGg6ICdtZScsIGNvbXBvbmVudDogTWVDb21wb25lbnQgfSxcclxuXHRcdFx0e3BhdGg6ICdhZGQnLCBjb21wb25lbnQ6IEFkZFByb2ZpbGVDb21wb25lbnR9LFxyXG5cdFx0XHR7cGF0aDogJ3ZpZXcvOmlkJywgY29tcG9uZW50OiBWaWV3UHJvZmlsZUNvbXBvbmVudH1cclxuXHRcdF1cclxuXHR9XHJcbl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
