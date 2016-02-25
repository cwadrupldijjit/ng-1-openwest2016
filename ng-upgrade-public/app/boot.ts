import { upgradeAdapter } from './adapter';

upgradeAdapter.bootstrap(document.body, ['AppThree'], {strictDI: true});

import './home/home.directive.js';