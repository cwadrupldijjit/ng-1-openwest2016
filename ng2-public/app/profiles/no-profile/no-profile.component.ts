import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'profiles',
	templateUrl: '/ng2-app/profiles/no-profile/no-profile.template.html',
	directives: [
		ROUTER_DIRECTIVES
	]
})
class NoProfileComponent {
	
}

export { NoProfileComponent };