angular.module('adminApp')
.controller('headerCtrl', [
'$scope',
'$state',
'Auth',
function($scope,$state,Auth){
  $scope.logout = Auth.logout;

  $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
    $state.go('login')
  });
}]);
