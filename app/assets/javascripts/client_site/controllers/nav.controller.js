myApp.controller('navCtrl', function($scope, $location, $window, locFactory) {
	$scope.small = false;
	$scope.showLinks = showLinks;
	$scope.changePage = changePage;
	$scope.currentUrl = locFactory.currentUrl;

	$scope.$watch('currentUrl', function() {
		locFactory.currentUrl = $scope.currentUrl;
	});

	function changePage(place) {
		$scope.currentUrl = place;
		return true;
	}

	function showLinks() {
		if ($scope.small === false) {
			$scope.small = true;
		} else {
			$scope.small = false;
		}
	}

});