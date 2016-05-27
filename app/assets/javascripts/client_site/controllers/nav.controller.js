myApp.controller('navCtrl', function($rootScope, $scope, $location, $window, locFactory, slideFactory) {
	$scope.small = false;
	$scope.showLinks = showLinks;
	$scope.changePage = changePage;
	$scope.myInterval = 5000;
	$scope.active = 0;
	$scope.slides = []

	// Scrolls page to top on route change
	$rootScope.$on('$routeChangeSuccess', function() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    slideFactory.getSlides(function(res) {
    	for(var i = 0; i<res.data.length;i++){
    		$scope.slides.push({id:i , url: res.data[i].url })
    	}
  		console.log($scope.slides)
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