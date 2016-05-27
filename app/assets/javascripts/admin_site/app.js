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
'angularSpinner',
])
.config(function($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'admin_site/login/_login.html',
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
    .state('newsPage', {
      url:'/news',
      views: {
        '@': {
         templateUrl:'admin_site/views/newsLayout.html'
        },
        'header@newsPage' : {
          templateUrl: 'admin_site/header/_header.html',
          controller: 'headerCtrl'
        },
        'news@newsPage' : {
          templateUrl: 'admin_site/news/_news.html',
          controller: 'newsCtrl'
        }
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
         templateUrl:'admin_site/views/newsLayout.html'
        },
        'header@announcementsPage' : {
          templateUrl: 'admin_site/header/_header.html',
          controller: 'headerCtrl'
        },
        'news@announcementsPage' : {
          templateUrl: 'admin_site/bAnnouncements/_announcements.html',
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
         templateUrl:'admin_site/views/bikesLayout.html'
        },
        'header@bikePage' : {
          templateUrl: 'admin_site/header/_header.html',
          controller: 'headerCtrl'
        },
        'bikes@bikePage' : {
          templateUrl: 'admin_site/bikes/_bikes.html',
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
         templateUrl:'admin_site/views/programsLayout.html'
        },
        'header@programsPage' : {
          templateUrl: 'admin_site/header/_header.html',
          controller: 'headerCtrl'
        },
        'programs@programsPage' : {
          templateUrl: 'admin_site/programs/_programs.html',
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
          templateUrl:'admin_site/views/settingsLayout.html'
        },
        'header@settingsPage' : {
          templateUrl: 'admin_site/header/_header.html',
          controller: 'headerCtrl'
        },
        'settings@settingsPage' : {
          templateUrl: 'admin_site/settings/_settings.html',
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

  $urlRouterProvider.otherwise('/announcements');

});

angular
  .module('adminApp')
  .config(['ngToastProvider', function(ngToast) {
    ngToast.configure({
      maxNumber: 1
    });
  }]);
