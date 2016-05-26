myApp.controller('newsCtrl', function($scope, newFactory, $location) {

	newFactory.news(function(news){
		console.log("in controller", news);
		$scope.news = news;
	})
	$scope.toArticle = function(id){
		console.log(id, "in toArticle method in controller");
		$location.path("/article/"+id);
	}	

});

