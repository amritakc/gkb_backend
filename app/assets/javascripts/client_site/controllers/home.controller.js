<<<<<<< HEAD
myApp.controller('homeCtrl', function($scope, communityFactory) {
	
	communityFactory.programs(function(programs){
		console.log("in controller on home", programs);
		$scope.programs = programs;
	})
=======
myApp.controller('homeCtrl', function($scope) {
	
>>>>>>> 3a8f6723a8ebf9c7e54dbab03a0ec68f2b85c5bf
});