myApp.controller('newsCtrl', function($scope, newFactory) {

	newFactory.news(function(news){
		console.log("in controller", news);
		$scope.news = news;
	})	

});

