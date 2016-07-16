import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';

interface ProfileInterface {
	_id?: string|number;
	name?: string;
	age?: number;
	favoriteFood?: string;
	interests?: {
		name: string; 
		id?: string|number
	}[];
	image?: string;
}

@Injectable()
class ProfileService {
	profiles: ProfileInterface[] = [];
	postHeaders: Headers = new Headers({
		'Content-Type': 'application/json'
	});
	postOptions = {
		headers: this.postHeaders
	};
	example: ProfileInterface = {
		name: 'Eleventh Doctor',
		age: 1247,
		favoriteFood: 'Fish Fingers and Custard',
		image: '',
		interests: []
	};
	
	constructor(public http: Http) {}
	
	getMe() {
		return this.http.get('/api/profiles/me')
						.map((response) => response.json());
	}
	
	getCurrentProfiles() {
		return this.http.get('/api/profiles/current')
						.map((response) => this.profiles = response.json());
	}
	
	getProfile(id) {
		return this.http.get('/api/profiles/' + id)
						.map((response) => response.json());
	}
	
	saveProfile(profile) {
		let data = JSON.stringify(profile);
		return this.http.post('/api/profiles/add', data, this.postOptions)
						.map((response) => {
							this.profiles.push(response.json());
							return response.json();
						});
	}
	
	saveInterest(interest: string, profileId, index) {
		let url = '/api/profiles/' + profileId + '/interests';
		let data = JSON.stringify(interest);
		
		return this.http.post(url, data, this.postOptions)
						.map((response) => response.json());
	}
	
	deleteInterest(interest, profileId) {
		return this.http.delete('/api/profiles/' + profileId + '/interests?q=' + interest._id)
						.map((response) => response.json());
	}
}

export { ProfileService, ProfileInterface };