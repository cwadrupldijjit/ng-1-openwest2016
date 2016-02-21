(function() {
	'use strict';
	
	angular
		.module('AppOne.core')
		.service('MobileService', MobileService);
	
	MobileService.$inject = ['$window'];
	
	function MobileService($window) {
		var svc = this;
		
		svc.isBigEnough = false;
		
		checkIfBigEnough();
		
		$window.addEventListener('resize', checkIfBigEnough);
		
		function checkIfBigEnough() {
			console.log('resize');
			if ($window.outerWidth > 600)
				svc.isBigEnough = false;
			else svc.isBigEnough = true;
		}
	}
})();