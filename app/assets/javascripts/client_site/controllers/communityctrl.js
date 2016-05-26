<<<<<<< HEAD
myApp.controller('communityCtrl',function($scope, communityFactory){

	communityFactory.programs(function(programs){
		console.log("in controller", programs);
		$scope.programs = programs;
	})

});
=======
myApp.controller('communityCtrl', communityCtrl);

function communityCtrl($scope) {
	var vm = this;
}
>>>>>>> 3a8f6723a8ebf9c7e54dbab03a0ec68f2b85c5bf
