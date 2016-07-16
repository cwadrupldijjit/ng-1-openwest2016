import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { ProfileService, ProfileInterface } from '../../services/profile.service';

@Component({
	selector: 'me',
	providers: [
		ProfileService
	],
	templateUrl: '/ng2-app/profiles/me/profiles-me.template.html',
	styleUrls: [
		'ng2-app/profiles/profile-subviews.styles.css'
	],
	directives: [
		FORM_DIRECTIVES
	]
})
class MeComponent implements OnInit {
	profile: ProfileInterface = <ProfileInterface>{interests: []};
	interestsEdit = [];
	newInterest = {name: ''};
	
	constructor(public ProfileService: ProfileService) {}
	
	ngOnInit() {
		this.ProfileService.getMe()
			.subscribe((response) => {this.profile = response},
					   (err) => console.warn(err));
	}
	
	editInterest(index) {
		try {
			if (index === undefined) {
				throw('You\'re trying to edit an interest that doesn\'t exist');
			}
			
			if (index === 'new') 
				this.interestsEdit[index] = {name: ''};
			else this.interestsEdit[index] = JSON.parse(JSON.stringify(this.profile.interests[index]));
		} catch (e) {
			alert(e);
		}
	}
	
	deleteInterest(index) {
		try {
			if (index === undefined) {
				throw('You\'re trying to delete an interest that doesn\'t exist');
			}
			if (confirm('Are you sure you want to delete this interest?')) {
				this.ProfileService.deleteInterest(this.profile.interests[index], this.profile._id)
						.subscribe((response) => {
							this.profile.interests.splice(index, 1);
						}, (err) => console.warn(err));
			}
		} catch (e) {
			alert(e);
		}
	}
	
	saveInterest(index) {
			var interest;
			
			if (index === 'new') {
				interest = this.newInterest;
			} else {
				interest = this.interestsEdit[index];
			}
			
			this.ProfileService
				.saveInterest(interest, this.profile._id, index)
					.subscribe((response) => {
						if (index === 'new') {
							this.profile.interests.push(response);
							
							this.newInterest = {name: ''};
						} else {
							this.profile.interests[index] = response;
						}
						
						this.interestsEdit[index] = null; 
					}, (err) => console.warn(err));
	}
	
	cancelInterestEdit(index) {
		if (index === 'new') {
			this.newInterest = {name: ''};
		} else {
			this.profile.interests[index] = this.interestsEdit[index];
		}
		this.interestsEdit[index] = null;
	}
}

export { MeComponent };