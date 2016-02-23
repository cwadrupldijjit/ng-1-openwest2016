import { Component, View } from 'angular2/core';

@Component({
	selector: 'me'
})
@View({
	templateUrl: '/ng2-app/profiles/me/profiles-me.template.html',
	// ng2-app\profiles\me\profiles-me.template.html
	styleUrls: [
		'/ng2-app/profiles/profiles.styles.css'
	]
})
class MeComponent {
	
}

export { MeComponent };