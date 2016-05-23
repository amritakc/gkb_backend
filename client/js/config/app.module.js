var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);
	
	myApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'static/partials/home.html',
				controller: 'homeCtrl'
			})
			.when('/volunteers', {
				templateUrl: 'static/partials/volunteer.html',
				controller: 'volunteersCtrl'
			})
			.when('/donations', {
				templateUrl: 'static/partials/donate.html',
				controller: 'donationsCtrl'
			})
			.when('/shop', {
				templateUrl: 'static/partials/shop.html',
				controller: 'storeCtrl'
			})
			.when('/gkbwarranty', {
				templateUrl: 'static/partials/gkbwarranty.html',
				controller: 'warrantyCtrl'
			})
			.when('/gkbpolicy', {
				templateUrl: 'static/partials/gkbpolicy.html',
				controller: 'policyCtrl'
			})
			.when('/news', {
				templateUrl: 'static/partials/news.html',
				controller: 'newsCtrl'
			})
			.when('/faq', {
				templateUrl: 'static/partials/news.html',
				controller: 'newsCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});