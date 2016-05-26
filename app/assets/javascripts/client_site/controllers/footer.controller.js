myApp.controller('footerCtrl', function($scope) {
	$scope.newSubscriber = {};
	$scope.create = create;

	// Function implementations
	function create() {
		// We're gonna call the factory which will use $http.post to add a subscriber to the database
		return true;
	}
});