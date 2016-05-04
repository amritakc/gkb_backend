angular.module('sampleApp', ['ui.router','ui.bootstrap'])
.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/'
    })
  $urlRouterProvider.otherwise('/')
})