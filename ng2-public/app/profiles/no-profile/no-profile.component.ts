import { Component, View } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
	selector: 'profiles'
})
@View({
	templateUrl: '/ng2-app/profiles/no-profile/no-profile.template.html',
	directives: [
		ROUTER_DIRECTIVES
	]
})
class NoProfileComponent {
	
}

export { NoProfileComponent };