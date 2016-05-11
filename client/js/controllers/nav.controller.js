myApp.controller('navCtrl', function($scope, $location, $window) {
	$scope.small = false;
	$scope.showLinks = showLinks;

	function showLinks() {
		if ($scope.small === false) {
			$scope.small = true;
		} else {
			$scope.small = false;
		}
	}

});