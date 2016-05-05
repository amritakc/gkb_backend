angular.module('adminApp', ['ui.router','ui.bootstrap'])
.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/',
      templateUrl: '_login.html'
    })
  $urlRouterProvider.otherwise('/')
})
