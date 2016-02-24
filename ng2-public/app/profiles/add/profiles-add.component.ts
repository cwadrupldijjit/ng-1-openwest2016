import { Component, View } from 'angular2/core';
import { Router, Location, ROUTER_DIRECTIVES } from 'angular2/router';
import { ProfileService, Profile } from '../../services/profile.service';

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
	profile = new Profile;
	interestsEdit = [];
	newInterest: string;
	
	constructor(public ProfileService: ProfileService, 
				public Router: Router,
				public Location: Location) {}
	
	saveProfile() {
		this.ProfileService.saveProfile(this.profile)
				.subscribe((response) => {
					console.log(response);
					this.Router.navigate(['/Profiles', 'View', {id: response.id}])
				}, (err) => console.warn(err));
	}
	
	cancelInterestEdit(index) {
		if (index === 'new') {
			this.newInterest = '';
		} else {
			this.profile.interests[index] = this.interestsEdit[index];
		}
		this.interestsEdit[index] = '';
	}
	
	cancelEditProfile() {
		this.Router.navigate(['/Profiles']);
	}
	
	saveInterest(index) {
		if (index === 'new') {
			this.profile.interests.push(this.newInterest);
			this.newInterest = '';
		}
		this.interestsEdit[index] = '';
	}
	
	deleteInterest(index) {
		try {
			if (index === undefined) {
				throw('You\'re trying to delete an interest that doesn\'t exist');
			}
			if (confirm('Are you sure you want to delete this interest?')) {
				this.profile.interests.splice(index, 1);
			}
		} catch (e) {
			alert(e);
		}
	}
	
	editInterest(index) {
		try {
			if (index === undefined) {
				throw('You\'re trying to edit an interest that doesn\'t exist');
			}
			
			if (index === 'new') 
				this.interestsEdit[index] = 'blah';
			else this.interestsEdit[index] = this.profile.interests[index];
		} catch (e) {
			alert(e);
		}
	}
}

export { AddProfileComponent };