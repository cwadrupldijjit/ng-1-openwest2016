import { upgradeAdapter } from '../adapter';
import { HomeComponent } from './home.component';
'use strict';

angular
	.module('AppThree.home')
	.directive('home', upgradeAdapter.downgradeNg2Component(HomeComponent));