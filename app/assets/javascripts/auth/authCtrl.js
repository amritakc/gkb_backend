angular.module('adminApp')
.controller('AuthCtrl', [
'$scope',
'$state',
'Auth',
function($scope, $state, Auth){

  $scope.login = function() {

    Auth.login($scope.user).then(function(){
      console.log("in auth login controller")
      $state.go('home');
    });

  };


  $scope.register = function() {
        console.log("in auth register controller")
        console.log(Auth)

    Auth.register($scope.user).then(function(){
      console.log("in auth register controller")
      $state.go('home');
    }, function(err){
      console.log(err)
    });
  };

}]);
