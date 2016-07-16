import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'home',
	templateUrl: '/ng2-app/home/home.template.html',
	directives: [
		ROUTER_DIRECTIVES
	]
})
class HomeComponent {
	
}

export { HomeComponent };