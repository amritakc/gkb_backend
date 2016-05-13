angular.module('adminApp', [
'templates',
'ngAnimate',
'ui.router',
'ui.bootstrap',
'textAngular',
'ngSanitize',
'uiRouterStyles'])
.config(function($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login/_login.html',
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
          templateUrl: 'dashboard/_dashboard.html'
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
    .state('announcementsPage', {
      url:'/announcements',
      views: {
        '@': {
         templateUrl:'views/newsLayout.html'
        },
        'header@announcementsPage' : {
          templateUrl: 'header/_header.html',
        },
        'news@announcementsPage' : {
          templateUrl: 'announcements/_announcements.html',
        }
      },
      data: {
        css: ['news/newsStyle.css']
      }
    })

  $urlRouterProvider.otherwise('/');

});
