angular.module('adminApp', ['ui.router','ui.bootstrap'])
.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/'
    })
  $urlRouterProvider.otherwise('/')
})