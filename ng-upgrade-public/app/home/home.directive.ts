'use strict';
import { upgradeAdapter } from '../boot';
import { HomeComponent } from './home.component';

angular
	.module('AppThree.home')
	.directive('home', upgradeAdapter.downgradeNg2Component(HomeComponent));