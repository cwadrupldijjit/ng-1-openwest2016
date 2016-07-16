import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilesRoutes } from './profiles/profiles.routes';

export const routes: RouterConfig = [
	...ProfilesRoutes,
	{path: '', 			component: HomeComponent }
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];