(function() {
	'use strict';
	
	angular
		.module('AppOne.core')
		.service('MobileService', MobileService);
	
	MobileService.$inject = ['$window'];
	
	function MobileService($window) {
		var svc = this;
		
		svc.isBigEnough = false;
		
		function checkIfBigEnough() {
			if ($window.outerWidth > 600)
				svc.isBigEnough = false;
			else svc.isBigEnough = true;
		}
	}
})();