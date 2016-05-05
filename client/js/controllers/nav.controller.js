myApp.controller('navCtrl', function($scope, $location) {
	$scope.small = false;
	$scope.showLinks = showLinks;

	function showLinks() {
		if ($scope.small === false) {
			$scope.small = true;
		} else {
			$scope.small = false;
		}
	}

	angular.element(window).on('scroll', function() {
		alert('hi');
	});

});