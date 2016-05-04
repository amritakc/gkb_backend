var myApp = app.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);
	
	myApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/main.html',
				controller: 'mainCtrl'
			})
			.when('/volunteers', {
				templateUrl: 'partials/volunteer.html',
				controller: 'volunteersController'
			})
			.when('/donations', {
				templateUrl: 'partials/donate.html',
				controller: 'donationsController'
			})
			.when('/shop', {
				templateUrl: 'partials/shop.html',
				controller: 'shopCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
myApp.controller('donationsController', function($scope) {
	
});