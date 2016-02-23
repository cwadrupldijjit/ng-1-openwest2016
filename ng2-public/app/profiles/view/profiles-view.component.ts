import { Component, View } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
	selector: 'view'
})
@View({
	templateUrl: '/ng2-app/profiles/view/profiles-view.template.html',
	styleUrls: [
		'/ng2-app/profiles/profiles.styles.css'
	],
	directives: [
		ROUTER_DIRECTIVES
	],
})
class ViewProfileComponent {
	constructor() {}
}

export { ViewProfileComponent };