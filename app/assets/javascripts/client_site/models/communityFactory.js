myApp.factory('communityFactory', communityFactory);

// Community functions to retrieve information
function communityFactory($http) {
	var factory = {};
	var programsContent =[]

	factory.programs = function(callback){
		$http.get('sections/programs').success(function(cInfo){
			programsContent = cInfo;
			callback(programsContent);
		})

	}

	return factory;
}