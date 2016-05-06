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
myApp.controller('donationsCtrl', function($scope) {
	
});
myApp.controller('footerCtrl', function($scope) {
	$scope.newSubscriber = {};
	$scope.create = create;

	// Function implementations
	function create() {
		// We're gonna call the factory which will use $http.post to add a subscriber to the database
		return true;
	}
});
myApp.controller('homeCtrl', function($scope) {
	
});
myApp.controller('navCtrl', function($scope, $location, $window) {
	$scope.small = false;
	$scope.showLinks = showLinks;
	$window.onscroll = testScroll;

	function testScroll() {
		if ($window.pageYOffset > 400) {
			console.log('HIi!');
		}
	}

	function showLinks() {
		if ($scope.small === false) {
			$scope.small = true;
		} else {
			$scope.small = false;
		}
	}

});
myApp.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 100) {
                 scope.boolChangeClass = true;
                 console.log('Scrolled below header.');
             } else {
                 scope.boolChangeClass = false;
                 console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
});
myApp.controller('newsCtrl', function($scope) {

});
myApp.controller('storeCtrl', function($scope) {

});
myApp.controller('volunteersCtrl', function($scope) {
	
});