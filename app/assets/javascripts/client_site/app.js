var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'templates', 'ngAnimate']);
  
  myApp.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'client_site/partials/home.html',
        controller: 'homeCtrl'
      })
      .when('/volunteers', {
        templateUrl: 'client_site/partials/volunteer.html',
        controller: 'volunteersCtrl'
      })
      .when('/community', {
        templateUrl: 'client_site/partials/community.html',
        controller: 'communityCtrl'
      })
      .when('/donations', {
        templateUrl: 'client_site/partials/donate.html',
        controller: 'donationsCtrl'
      })
      .when('/shop', {
        templateUrl: 'client_site/partials/shop.html',
        controller: 'storeCtrl'
      })
      .when('/gkbwarranty', {
        templateUrl: 'client_site/partials/gkbwarranty.html',
        controller: 'warrantyCtrl'
      })
      .when('/gkbpolicy', {
        templateUrl: 'client_site/partials/gkbpolicy.html',
        controller: 'policyCtrl'
      })
      .when('/news', {
        templateUrl: 'client_site/partials/news.html',
        controller: 'newsCtrl'
      })
      .when('/faq', {
        templateUrl: 'client_site/partials/news.html',
        controller: 'newsCtrl'
      })
      .when('/article/:id', {
        templateUrl: 'client_site/partials/article.html',
        controller: 'articlesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
