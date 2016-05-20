var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);
	
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
			.when('/community', {
				templateUrl: 'static/partials/community.html',
				controller: 'communityCtrl'
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
myApp.factory('locFactory', locFactory);
// locFactory function
function locFactory($location) {
	var factory = {
		currentUrl: '/'
	};

	return factory;
}
myApp.factory('picFactory', picFactory);

function picFactory() {
	var factory = {
		slides: [
			{ image: '/static/img/bike1a.jpg', description: 'Image' },
			{ image: '/static/img/bike1b.jpg', description: 'Image' },
			{ image: '/static/img/bike1c.jpg', description: 'Image' },
			{ image: '/static/img/bike1d.jpg', description: 'Image' },
			{ image: '/static/img/bike1e.jpg', description: 'Image' }
		],
	};

	return factory;
}
myApp.animation('.slide-animation', function() {
	return {
		addClass: function (element, className, done) {
			if (className == 'ng-hide') {
				TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
			}
			else {
				done();
			}
		},
		removeClass: function (element, className, done) {
			if (className == 'ng-hide') {
				element.removeClass('ng-hide');
				TweenMax.set(element, { left: element.parent().width() });
                TweenMax.to(element, 0.5, {left: 0, onComplete: done });
			}
			else {
				done();
			}
		}
	};
});
myApp.controller('communityCtrl', communityCtrl);

function communityCtrl($scope) {
	var vm = this;
}
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
myApp.controller('headerCtrl', headerCtrl);
// Controller Implementation
function headerCtrl($scope, $location, $interval, locFactory) {
	var vm = this;
	$scope.currentUrl = locFactory.currentUrl;
	
	$scope.checkUrl = checkUrl;

	function checkUrl() {
		$scope.currentUrl = locFactory.currentUrl
	}

	$interval($scope.checkUrl, 700);
}
myApp.controller('homeCtrl', function($scope) {
	
});
myApp.controller('mainCtrl', mainCtrl);

function mainCtrl($scope, picFactory) {
	var vm = this;

	$scope.slides = picFactory.slides;
	$scope.currentSlideIdx = 0;
	$scope.setCurrentSlideIdx = setCurrentSlideIdx;
	$scope.isCurrentSlideIdx = isCurrentSlideIdx;
	$scope.prevSlide = prevSlide;
	$scope.nextSlide = nextSlide;

	// Function implementations
	function setCurrentSlideIdx(index) {
		$scope.currentSlideIdx = index;
	}

	function isCurrentSlideIdx(index) {
		return $scope.currentSlideIdx === index;
	}

	function prevSlide() {
		$scope.currentSlideIdx = ($scope.currentSlideIdx < $scope.slides.length - 1) ? ++$scope.currentSlideIdx : 0;
	}

	function nextSlide() {
		$scope.currentSlideIdx = ($scope.currentSlideIdx > 0) ? --$scope.currentSlideIdx : $scope.slides.length - 1;
	}
}
myApp.controller('navCtrl', function($scope, $location, $window, locFactory) {
	$scope.small = false;
	$scope.showLinks = showLinks;
	$scope.changePage = changePage;
	$scope.currentUrl = locFactory.currentUrl;

	$scope.$watch('currentUrl', function() {
		locFactory.currentUrl = $scope.currentUrl;
	});

	function changePage(place) {
		$scope.currentUrl = place;
		return true;
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