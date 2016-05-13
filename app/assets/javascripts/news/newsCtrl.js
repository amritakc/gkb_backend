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
  var modalController = function ($scope, $uibModalInstance) {
    $scope.ok = function () {
      $uibModalInstance.close($scope.newsPost);
    }
    $scope.cancel = function () {                
      $uibModalInstance.dismiss();
    }
  }

  $scope.openNewContentForm = function(){
    var modalInstance = $uibModal.open({
      templateUrl:'news/_newNewsContent.html',
      controller: modalController
    });
    
    modalInstance.result.then(function (contentInfo) {
      contentInfo.section = 'news'
      DataService.create(contentInfo, function(result){
        $scope.newsPosts = result['newContent'];
      });
    });
  };
  

  //$scope.remove = function() {
    //DataService.remove()
  //};

  $scope.save = function(title, text, section) {
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
