angular.module('adminApp', ['ui.router','ui.bootstrap'])
.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login/login.html',
      controller:'loginCtrl'
    })
    .state('addBike', {
      url:'/create',
      templateUrl: 'dashboard/create.html',
      controller: 'dashCtrl'
    })
    .state('/', {
      url: '/',
      templateUrl: 'dashboard/dashboard.html',
      controller: 'dashCtrl'
    })
  $urlRouterProvider.otherwise('/');
});
