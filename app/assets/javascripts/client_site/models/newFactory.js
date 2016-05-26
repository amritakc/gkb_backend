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

	// Will call an individual article
	factory.show = function(id, callback){
		$http.get('contents/show/'+id).success(function(article){
			console.log(article, "in newFactory show method")
			callback(article);
		})
	}

	return factory;
}