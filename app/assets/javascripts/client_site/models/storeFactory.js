myApp.factory('storeFactory', storeFactory);

// News functions to retrieve information
function storeFactory($http) {
	var factory = {};
	var bikesContent =[]

	factory.bikes = function(callback){
		$http.get('sections/bikes').success(function(cInfo){
			console.log(cInfo)
			bikesContent = cInfo;
			callback(bikesContent);
		})

	}

	return factory;
}