myApp.controller('newsCtrl', function($scope, newFactory, $location) {

	newFactory.news(function(news){
		$scope.news = news;
	});
	// Will go partial for one article
	$scope.toArticle = function(id){
		$location.path('/article/'+id);
	};

});

