myApp.controller('headerCtrl', headerCtrl);
// Controller Implementation
function headerCtrl($scope, $location, $interval, locFactory) {
	var vm = this;
	$scope.currentUrl = locFactory.currentUrl;
	
	$scope.checkUrl = checkUrl;

	function checkUrl() {
		$scope.currentUrl = locFactory.currentUrl
	}

	$interval($scope.checkUrl, 500);
}