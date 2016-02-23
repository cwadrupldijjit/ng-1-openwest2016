import { Component, View } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { NoProfileComponent } from './no-profile/no-profile.component';
import { MeComponent } from './me/profiles-me.component';
import { AddProfileComponent } from './add/profiles-add.component';
import { ViewProfileComponent } from './view/profiles-view.component';

@Component({
	selector: 'profiles'
})
@View({
	templateUrl: '/ng2-app/profiles/profiles.template.html',
	directives: [
		ROUTER_DIRECTIVES
	]
})
@RouteConfig([
	{ path: '/', 		 component: NoProfileComponent,   as: 'NoProfile', useAsDefault: true },
	{ path: '/me', 		 component: MeComponent, 		  as: 'Me' },
	{ path: '/view/:id', component: ViewProfileComponent, as: 'View' },
	{ path: '/add', 	 component: AddProfileComponent,  as: 'Add' },
])
class ProfilesComponent {
	
}

export { ProfilesComponent };