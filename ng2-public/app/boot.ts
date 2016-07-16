import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { FORM_PROVIDERS } from '@angular/forms'
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [HTTP_PROVIDERS, FORM_PROVIDERS, APP_ROUTER_PROVIDERS]).catch(err => console.warn(err));