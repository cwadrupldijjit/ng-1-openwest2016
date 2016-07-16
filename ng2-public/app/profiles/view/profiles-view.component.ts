import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
	selector: 'view',
	templateUrl: '/ng2-app/profiles/view/profiles-view.template.html',
	styleUrls: [
		'ng2-app/profiles/profile-subviews.styles.css'
	],
	providers: [
		ProfileService
	],
	directives: [
		ROUTER_DIRECTIVES
	],
})
class ViewProfileComponent implements OnInit {
	profile = {
		interests: []
	};
	
	sub: any;
	
	constructor(private ProfileService: ProfileService, private route: ActivatedRoute, private router: Router) {}
	
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			let id = params['id'];
			
			this.ProfileService.getProfile(id)
				.subscribe(	response => this.profile = response,
						   	err => console.warn(err));
		});
	}
}

export { ViewProfileComponent };