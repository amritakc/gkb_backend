myApp.controller('storeCtrl', function($scope, storeFactory) {
	storeFactory.bikes(function(bikes){
		console.log("in controller", bikes)
		$scope.bikes = bikes
	})

});


