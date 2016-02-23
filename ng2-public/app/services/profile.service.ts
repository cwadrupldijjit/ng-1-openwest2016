import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';

interface ProfileInterface {
	id?: number;
	name: string;
	age: number;
	favoriteFood: string;
	image?: string;
}

class Profile implements ProfileInterface {
	interests: string[] = [];
	id: number = -1;
	img: string = '/common-assets/generic-avatar.png';
	
	constructor(public name: string = 'Eleventh Doctor', 
				public age: number = 1245,
				public favoriteFood: string = 'Fish Fingers and Custard') { }
}


@Injectable()
class ProfileService {
	profiles: Profile[] = [];
	
	constructor(public http: Http) {}
	
	
}

export { ProfileService, Profile, ProfileInterface };