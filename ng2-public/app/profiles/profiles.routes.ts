import { RouterConfig } from '@angular/router';
import { ProfilesComponent } from './profiles.component';
import { MeComponent } from './me/profiles-me.component';
import { ViewProfileComponent } from './view/profiles-view.component';
import { AddProfileComponent } from './add/profiles-add.component';

export const ProfilesRoutes: RouterConfig = [
	{
		path: 'profiles', 
		component: ProfilesComponent,
		children: [
			{path: ''},
			{path: 'me', component: MeComponent },
			{path: 'add', component: AddProfileComponent},
			{path: 'view/:id', component: ViewProfileComponent}
		]
	}
];