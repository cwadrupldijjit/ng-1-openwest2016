import { bootstrap } from 'angular2/platform/browser';
import { UpgradeAdapter } from 'angular2/upgrade';

const upgradeAdapter = new UpgradeAdapter();

upgradeAdapter.bootstrap(document.body, ['AppThree'], {strictDI: true});

export { upgradeAdapter };