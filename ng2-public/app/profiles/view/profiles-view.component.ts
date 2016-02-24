import { Component, View, OnInit } from 'angular2/core';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';
import { ProfileService } from '../../services/profile.service';

@Component({
	selector: 'view'
})
@View({
	templateUrl: '/ng2-app/profiles/view/profiles-view.template.html',
	styleUrls: [
		'ng2-app/profiles/profile-subviews.styles.css'
	],
	directives: [
		ROUTER_DIRECTIVES
	],
})
class ViewProfileComponent implements OnInit {
	profile = {
		interests: []
	};
	
	constructor(public ProfileService: ProfileService,
				public RouteParams: RouteParams) {}
	
	ngOnInit() {
		this.ProfileService.getProfile(this.RouteParams.get('id'))
				.subscribe((response) => this.profile = response,
						   (err) => console.warn(err));
	}
}

export { ViewProfileComponent };