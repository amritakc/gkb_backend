angular.module('adminApp', [
'ui.router',
'ui.bootstrap',
'ngAnimate',
'ngQuill',
'uiRouterStyles'])
.config(function($stateProvider,$urlRouterProvider,ngQuillConfigProvider) {

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

  $urlRouterProvider.otherwise('/');

  ngQuillConfigProvider.set([{
      alias: '10',
      size: '10px'
  }, {
      alias: '12',
      size: '12px'
  }, {
      alias: '14',
      size: '14px'
  }, {
      alias: '16',
      size: '16px'
  }, {
      alias: '18',
      size: '18px'
  }, {
      alias: '20',
      size: '20px'
  }, {
      alias: '22',
      size: '22px'
  }, {
      alias: '24',
      size: '24px'
  }], [{
      label: 'Arial',
      alias: 'Arial'
  }, {
      label: 'Sans Serif',
      alias: 'sans-serif'
  }, {
      label: 'Serif',
      alias: 'serif'
  }, {
      label: 'Monospace',
      alias: 'monospace'
  }, {
      label: 'Trebuchet MS',
      alias: '"Trebuchet MS"'
  }, {
      label: 'Verdana',
      alias: 'Verdana'
  }]);
});
