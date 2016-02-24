import { Component, View } from 'angular2/core';
import { Router, Location, ROUTER_DIRECTIVES } from 'angular2/router';
import { ProfileService } from '../../services/profile.service';

@Component({
	selector: 'add'
})
@View({
	templateUrl: '/ng2-app/profiles/add/profiles-add.template.html',
	styleUrls: [
		'ng2-app/profiles/profile-subroutes.styles.css'
	],
	directives: [
		ROUTER_DIRECTIVES
	],
})
class AddProfileComponent {
	profile = {
		interests: []
	};
	interestsEdit = [];
	
	constructor(public ProfileService: ProfileService, 
				public Router: Router,
				public Location: Location) {}
	
	saveProfile() {
		this.ProfileService.saveProfile(this.profile);
	}
	
	cancelInterestEdit() {
		
	}
	
	cancelEditProfile() {
		this.Router.navigate(['/Profiles']);
	}
	
	saveInterest() {
		
	}
	
	deleteInterest() {
		
	}
	
	editInterest(index) {
		console.log('new');
		
	}
	
	newInterest() {
		console.log('new');
	}
}

export { AddProfileComponent };