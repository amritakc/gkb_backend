angular.module('adminApp')
.controller('newsCtrl', [
'$scope',
'$state',
'DataService',
'$uibModal',
function($scope,$state,DataService,$uibModal){
  //Accordian config
  $scope.oneAtATime = true;
  
  DataService.getNews('news',function(result){
    $scope.newsPosts = result;
  })

  //Modal
  $scope.openNewContentForm = function(){
    modalInstance = $uibModal.open({
      templateUrl:'news/_newNewsContent.html',
      controller: 'newsCtrl'
    });
  }

  $scope.remove = function() {
    console.log('getting in remove function')
  };

  $scope.save = function(title, text, section) {
    $scope.$dismiss('cancel');
    DataService.create(title, text, section, function(result){
      $scope.newsPosts = result;
    });
  }

  $scope.update = function(title, text, section,contentId) {
    DataService.update(title, text, section,contentId, function(result){
      $scope.newsPosts = result;
    })
  }

}]);
