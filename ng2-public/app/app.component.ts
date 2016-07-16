import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilesComponent } from './profiles/profiles.component';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app',
	templateUrl: '/ng2-app/app.template.html',
	styleUrls: [
		'ng2-app/app.styles.css'
	],
	directives: [
		ROUTER_DIRECTIVES
	]
})
// @RouteConfig([
// 	{ path: '/', 			 component: HomeComponent,		as: 'Home', 	  useAsDefault: true},
// 	{ path: '/profiles/...', component: ProfilesComponent,  as: 'Profiles' },
// ])
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