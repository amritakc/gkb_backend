myApp.controller('communityCtrl',function($scope, communityFactory){

	communityFactory.programs(function(programs){
		$scope.programs = programs;
	})

});
