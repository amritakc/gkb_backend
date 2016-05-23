angular.module('adminApp', [
'templates',
'ngAnimate',
'Devise',
'ui.router',
'ui.bootstrap',
'textAngular',
'ngSanitize',
'angularModalService',
'ngFileUpload',
'ngToast',
'ngResource',
'ng-rails-csrf'])
.config(function($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login/_login.html',
      controller:'loginCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        if(Auth.isAuthenticated()){
          if ($state.current.url != '/'){
            $state.go('dashboard');
          } else {
            $state.go('newsPage');
          }
        }
        }]
      })
    .state('dashboard', {
      url: '/',
      views: {
        '@': {
         templateUrl:'views/dashboardLayout.html'
        },
        'header@dashboard' : {
          templateUrl: 'header/_header.html',
          controller: 'headerCtrl'
        },
        'main@dashboard' : {
          templateUrl: 'dashboard/_dashboard.html'
        }
      },
      onEnter: ['$state','Auth', function($state, Auth) {
        Auth.currentUser().then(function(){
        }, function(){
          $state.go('login')
        })
      }]
    })
    .state('newsPage', {
      url:'/news',
      views: {
        '@': {
         templateUrl:'views/newsLayout.html'
        },
        'header@newsPage' : {
          templateUrl: 'header/_header.html',
          controller: 'headerCtrl'
        },
        'news@newsPage' : {
          templateUrl: 'news/_news.html',
          controller: 'newsCtrl'
        }
      },
      data: {
        css: ['news/newsStyle.css']
      },
      onEnter: ['$state','Auth', function($state, Auth) {
        Auth.currentUser().then(function(){
        }, function(){
          $state.go('login')
        })
      }]
    })
    .state('announcementsPage', {
      url:'/announcements',
      views: {
        '@': {
         templateUrl:'views/newsLayout.html'
        },
        'header@announcementsPage' : {
          templateUrl: 'header/_header.html',
          controller: 'headerCtrl'
        },
        'news@announcementsPage' : {
          templateUrl: 'bAnnouncements/_announcements.html',
          controller: 'announeCtrl'
        }
      },
      onEnter: ['$state','Auth', function($state, Auth) {
        Auth.currentUser().then(function(){
        }, function(){
          $state.go('login')
        })
      }]
    })
    .state('bikePage', {
      url:'/bikes',
      views: {
        '@': {
         templateUrl:'views/bikesLayout.html'
        },
        'header@bikePage' : {
          templateUrl: 'header/_header.html',
          controller: 'headerCtrl'
        },
        'bikes@bikePage' : {
          templateUrl: 'bikes/_bikes.html',
          controller: 'bikeCtrl'
        }
      },
      onEnter: ['$state','Auth', function($state, Auth) {
        Auth.currentUser().then(function(){
        }, function(){
          $state.go('login')
        })
      }]
    })
    .state('programsPage', {
      url:'/programs',
      views: {
        '@': {
         templateUrl:'views/programsLayout.html'
        },
        'header@programsPage' : {
          templateUrl: 'header/_header.html',
          controller: 'headerCtrl'
        },
        'programs@programsPage' : {
          templateUrl: 'programs/_programs.html',
          controller: 'programsCtrl'
        }
      },
      onEnter: ['$state','Auth', function($state, Auth) {
        Auth.currentUser().then(function(){
        }, function(){
          $state.go('login')
        })
      }]
    })
    .state('settingsPage', {
      url:'/settings',
      views: {
        '@': {
          templateUrl:'views/settingsLayout.html'
        },
        'header@settingsPage' : {
          templateUrl: 'header/_header.html',
          controller: 'headerCtrl'
        },
        'settings@settingsPage' : {
          templateUrl: 'settings/_settings.html',
          controller: 'settingsCtrl'
        }
      },
      onEnter: ['$state','Auth', function($state, Auth) {
        Auth.currentUser().then(function(){
        }, function(){
          $state.go('login')
        })
      }]
    })

  $urlRouterProvider.otherwise('/');


});
