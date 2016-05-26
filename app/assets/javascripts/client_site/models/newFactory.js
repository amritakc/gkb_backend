myApp.factory('newFactory', newFactory);

// News functions to retrieve information
function newFactory($http) {
	var factory = {};
	var newsContent =[]

	factory.news = function(callback){
		$http.get('sections/news').success(function(cInfo){
			console.log(cInfo)
			newsContent = cInfo;
			callback(newsContent);
		})

	}

	return factory;
}