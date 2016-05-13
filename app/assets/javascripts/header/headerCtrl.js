angular.module('adminApp')
.controller('headerCtrl', [
'$scope',
'$state',
'Auth',
function($scope,$state,Auth){
  $scope.logout = Auth.logout;
}]);
