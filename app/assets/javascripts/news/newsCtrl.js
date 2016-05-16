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
    $scope.totalItems = $scope.newsPosts.length;
  })

  //Modal
  var modalController = function ($scope, $uibModalInstance) {
    $scope.ok = function () {
      $uibModalInstance.close($scope.newsPost);
    }
    $scope.cancel = function () {                
      $uibModalInstance.dismiss();
    }
    $scope.accept = function(){
      $uibModalInstance.close();
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
  

  $scope.openRemoveConfirm = function(selected){
    var modalInstance = $uibModal.open({
      templateUrl:'news/_removeModal.html',
      controller: modalController
    });
    
    modalInstance.result.then(function () {
      console.log(selected)
      DataService.remove(selected, function(result){
        console.log(result)
        $scope.newsPosts = result['content'];
      });
    });
  };


  $scope.update = function(title, text, section,contentId) {
    DataService.update(title, text, section,contentId, function(result){
      $scope.newsPosts = result;
    })
  }
  //Pagination 
  $scope.viewby = 15;
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 15;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

}]);
