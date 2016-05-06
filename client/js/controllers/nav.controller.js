myApp.controller('navCtrl', function($scope, $location, $window) {
	$scope.small = false;
	$scope.showLinks = showLinks;
	$window.onscroll = testScroll;

	function testScroll() {
		if ($window.pageYOffset > 400) {
			console.log('HIi!');
		}
	}

	function showLinks() {
		if ($scope.small === false) {
			$scope.small = true;
		} else {
			$scope.small = false;
		}
	}

});