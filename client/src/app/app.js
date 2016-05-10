angular.module('adminApp', [
'ui.router',
'ui.bootstrap',
'ngAnimate',
'textAngular',
'ngSanitize',
'uiRouterStyles'])
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
          templateUrl: 'header/_header.html'
        },
        'main@dashboard' : {
          templateUrl: 'dashboard/_dashboard.html',
          controller: 'dashboardCtrl'
        }
      },
      data: {
        css: ['dashboard/editor.css']
      }
    })
    .state('inventory', {
      url:'/create',
      views: {
        '@': {
         templateUrl:'views/inventory.html'
        },
        'header@inventory' : {
          templateUrl: 'header/_header.html',
        },
        'addBikeForm@inventory' : {
          templateUrl: 'addBikeForm/_addBikeForm.html',
        }
      }
    })
    .state('newsPage', {
      url:'/news',
      views: {
        '@': {
         templateUrl:'views/newsLayout.html'
        },
        'header@newsPage' : {
          templateUrl: 'header/_header.html',
        },
        'news@newsPage' : {
          templateUrl: 'news/_news.html',
          controller: 'dashboardCtrl'
        }
      },
      data: {
        css: ['news/newsStyle.css']
      }
    })

  $urlRouterProvider.otherwise('/');

});
