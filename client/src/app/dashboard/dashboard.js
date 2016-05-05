angular.module('adminApp')
.controller('dashCtrl', [
'$scope',
'$state',
function($scope,$state){

  $scope.createBike = function(){
    console.log($scope.bike)
  }
}]);
