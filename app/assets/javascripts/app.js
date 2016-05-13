angular.module('adminApp', [
'templates',
'ngAnimate',
'Devise',
'ui.router',
'ui.bootstrap',
'textAngular',
'ngSanitize',
'angularModalService',
'uiRouterStyles'])
.config(function($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login/_login.html',
      controller:'loginCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('dashboard');
          })
        }]
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
      },
      onEnter: ['$state','Auth', function($state, Auth) {
        Auth.currentUser().then(function(){
        }, function(){
          $state.go('login')
        })
      }]
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
          controller: 'newsCtrl'
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
          templateUrl: 'bAnnouncements/_announcements.html'
        }
      },
      data: {
        css: ['news/newsStyle.css']
      }
    })

  $urlRouterProvider.otherwise('/');

});
