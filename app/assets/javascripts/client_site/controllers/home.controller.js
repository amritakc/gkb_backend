myApp.controller('homeCtrl', function($scope, communityFactory) {
	
	communityFactory.programs(function(programs){
		console.log("in controller on home", programs);
		$scope.programs = programs;
	})
});