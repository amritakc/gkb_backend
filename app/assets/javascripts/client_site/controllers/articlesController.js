myApp.controller('articlesCtrl', function($scope, $routeParams,newFactory) {
	console.log($routeParams.id)
	
	//Will show content for the article
	newFactory.show($routeParams.id,function(article){
		console.log("in controller", article);
		$scope.article = article;
	})	

});

