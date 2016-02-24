import { Component, View } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { HomeComponent } from './home/home.component';
import { ProfilesComponent } from './profiles/profiles.component';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app'
})
@View({
	templateUrl: '/ng2-app/app.template.html',
	directives: [
		ROUTER_DIRECTIVES
	]
})
@RouteConfig([
	{ path: '/', 			 component: HomeComponent,		as: 'Home', 	  useAsDefault: true},
	{ path: '/profiles/...', component: ProfilesComponent,  as: 'Profiles' },
])
class AppComponent {
	isOpen: boolean = false;
	
	toggleMain() {
		this.isOpen = !this.isOpen;
	}
	
	returnToLanding() {
		window.location.pathname = '/';
	}
}

export { AppComponent };