myApp.controller('volunteersCtrl', function($scope) {
	
	$scope.isCollapsed = false;

	$scope.position1 = false;
  	$scope.position2 = false;
  	//$scope.position3 = false;

  	$scope.showHidePos1() {
		console.log("position1: " + position1);
		$scope.position1 = !$scope.position1;
		$scope.position2 = false;
	  	
	  	console.log("position1: " + position1);
	}

	  $scope.showHidePos2() {
	  	console.log("position2: " + position2);
	  	$scope.position2 = !$scope.position2;
	  	$scope.position1 = false;
	  }
});