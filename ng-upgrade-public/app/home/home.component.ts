import {Component, View} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
	selector: 'home'
})
@View({
	templateUrl: '/ng2-app/home/home.template.html',
	directives: [
		ROUTER_DIRECTIVES
	]
})
class HomeComponent {
	
}

export { HomeComponent };