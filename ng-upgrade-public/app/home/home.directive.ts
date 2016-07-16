import { upgradeAdapter } from '../adapter';
import { HomeComponent } from './home.component';
'use strict';

angular
	.module('AppThree.home')
	.directive('home', <ng.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(HomeComponent));