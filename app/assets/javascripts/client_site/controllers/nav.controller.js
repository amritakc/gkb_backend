myApp.controller('navCtrl', function($scope, $location, $window, locFactory) {
	$scope.small = false;
	$scope.showLinks = showLinks;
	$scope.changePage = changePage;

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