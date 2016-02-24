import { Component, View, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { NoProfileComponent } from './no-profile/no-profile.component';
import { MeComponent } from './me/profiles-me.component';
import { AddProfileComponent } from './add/profiles-add.component';
import { ViewProfileComponent } from './view/profiles-view.component';
import { ProfileService } from '../services/profile.service';

@Component({
	selector: 'profiles',
	providers: [
		ProfileService
	]
})
@View({
	templateUrl: '/ng2-app/profiles/profiles.template.html',
	styleUrls: [
		'ng2-app/profiles/profiles.styles.css'
	],
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
class ProfilesComponent implements OnInit {
	profiles = [];
	isShowing: boolean = false;
	
	constructor(public ProfileService: ProfileService) {}
	
	ngOnInit() {
		this.ProfileService.getCurrentProfiles()
			.subscribe((response) => {this.profiles = response},
					   (err) => console.warn(err));
	}
	
	toggleProfiles() {
		this.isShowing = !this.isShowing;
	}
}

export { ProfilesComponent };