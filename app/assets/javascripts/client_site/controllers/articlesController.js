myApp.controller('articlesCtrl', function($scope, $routeParams,newFactory) {
	
	//Will show content for the article
	newFactory.show($routeParams.id,function(article){
		$scope.article = article;
	});	

});

