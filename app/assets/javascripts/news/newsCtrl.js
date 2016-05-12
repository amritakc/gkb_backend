angular.module('adminApp')
.controller('newsCtrl', [
'$scope',
'$state',
'DataService',
function($scope,$state,DataService){
  //Accordian config
  $scope.oneAtATime = true;
  
  DataService.getNews('news',function(result){
    $scope.newsPosts = result;
  })

  $scope.remove = function() {
    console.log('getting in remove function')

  };

  $scope.save = function(title, text, section) {
    console.log('data from save function is', title, text, section)
    DataService.create(title, text, section);
  }
}]);
