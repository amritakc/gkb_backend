myApp.controller('navCtrl', function($rootScope, $scope, $location, $window, locFactory, slideFactory) {
	$scope.small = false;
	$scope.showLinks = showLinks;
	$scope.changePage = changePage;
	$scope.myInterval = 5000;
	$scope.active = 0;
	$scope.noWrapSlides = false;
	$scope.slides = [];

	// Scrolls page to top on route change
	$rootScope.$on('$routeChangeSuccess', function() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    // Gets the slides
    slideFactory.getSlides(function(res) {
    	$scope.slides = res;
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