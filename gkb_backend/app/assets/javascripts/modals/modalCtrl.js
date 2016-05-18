angular.module('adminApp')
.controller('modalCtrl', [
'$scope',
'$state',
'DataService',
'$uiModal',
function($scope){
   $scope.ok = function () {
    
    console.log("hi from modal ctrl")
    }
    $scope.cancel = function () {                
      console.log('works')
    }
    $scope.accept = function(){
    }
}]); 


