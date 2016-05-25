myApp.controller('communityCtrl',function($scope, communityFactory){

	communityFactory.programs(function(programs){
		console.log("in controller", programs);
		$scope.programs = programs;
	})

});