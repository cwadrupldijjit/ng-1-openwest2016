import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { ProfileService, ProfileInterface } from '../../services/profile.service';

@Component({
	selector: 'add',
	templateUrl: '/ng2-app/profiles/add/profiles-add.template.html',
	styleUrls: [
		'ng2-app/profiles/profile-subroutes.styles.css'
	],
	directives: [
		ROUTER_DIRECTIVES
	],
})
class AddProfileComponent {
	profile: ProfileInterface = <ProfileInterface>JSON.parse(JSON.stringify(this.ProfileService.example));
	interestsEdit = [];
	newInterest: {name: string; id?: string|number} = {name: ''};
	
	constructor(public ProfileService: ProfileService, 
				public Router: Router) {}
	
	saveProfile() {
		this.ProfileService.saveProfile(this.profile)
				.subscribe((response) => {
					console.log(response);
					this.Router.navigate(['/profiles/view', response._id]);
				}, (err) => console.warn(err));
	}
	
	cancelInterestEdit(index) {
		if (index === 'new') {
			this.newInterest = {name: ''};
		} else {
			this.profile.interests[index] = this.interestsEdit[index];
		}
		this.interestsEdit[index] = '';
	}
	
	cancelEditProfile() {
		this.Router.navigate(['/profiles']);
	}
	
	saveInterest(index) {
		if (index === 'new') {
			this.profile.interests.push(this.newInterest);
			this.newInterest = {name: ''};
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