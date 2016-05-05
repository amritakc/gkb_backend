angular.module('adminApp', ['ui.router','ui.bootstrap'])
.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login/login.html',
      controller:'loginCtrl'
    })
    .state('dashboard', {
      url: '/',
      views: {
        '@': {
         templateUrl:'views/dashboardLayout.html'
        },
        'header@dashboard' : {
          templateUrl: 'header/_header.html',
        },
        'main@dashboard' : {
          templateUrl: 'dashboard/_dashboard.html',
        }
      },
    })

  $urlRouterProvider.otherwise('/');
})
