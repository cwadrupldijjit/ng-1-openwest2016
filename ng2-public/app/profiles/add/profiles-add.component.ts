import { Component, View } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
	selector: 'add'
})
@View({
	templateUrl: '/ng2-app/profiles/add/profiles-add.template.html',
	styleUrls: [
		'/ng2-app/profiles/profiles.styles.css'
	],
	directives: [
		ROUTER_DIRECTIVES
	],
})
class AddProfileComponent {
	constructor() {}
}

export { AddProfileComponent };