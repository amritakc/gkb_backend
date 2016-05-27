myApp.controller('navCtrl', function($rootScope, $scope, $location, $window, locFactory) {
	$scope.small = false;
	$scope.showLinks = showLinks;
	$scope.changePage = changePage;

	// Scrolls page to top on route change
	$rootScope.$on('$routeChangeSuccess', function() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

	function changePage(place) {
		return place == $location.url();
	}

	function showLinks() {
		if ($scope.small === false) {
			$scope.small = true;
		} else {
			$scope.small = false;
		}
	}

});