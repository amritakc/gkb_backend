angular.module('adminApp')
.controller('announeCtrl', [
'$scope',
'$state',
'DataService',
'ModalService',
'$uibModal',
//injected the modal service  into controller 
function($scope,$state,DataService, ModalService, $uibModal){
  //Accordian config
  $scope.oneAtATime = true;
  
  DataService.getNews('annoucements',function(result){
    $scope.newsPosts = result;
    $scope.totalItems = $scope.newsPosts.length;
  })


  $scope.openNewContentFor = function(){
    console.log("hi");
    var modalInstance = $uibModal.open({
      templateUrl: 'modals/_addContentModal.html',
      controller: [
        '$scope', '$uibModalInstance',  function($scope, $uibModalInstance) {
          $scope.data = {title: "Annoucments" };
          $scope.ok = function() {
            $uibModalInstance.close($scope.newsPost);
          };
          $scope.cancel = function () {                
            $uibModalInstance.dismiss();
          }
          $scope.accept = function(){
            $uibModalInstance.close();
          }
        }
      ]
    });
    modalInstance.result.then(function (contentInfo) {
      contentInfo.section = 'annoucements';
      DataService.create(contentInfo, function(result){
        $scope.newPost = result['newContent'];
      });
    });
  };


  $scope.openRemoveConfirm = function(selected){
    ModalService.setProperty(selected);

    var modalInstance = $uibModal.open({
      templateUrl:'modals/_removeModal.html',
      controller: [
        '$scope', '$uibModalInstance','ModalService', function($scope, $uibModalInstance, ModalService) {
          
          $scope.data = ModalService.getProperty();
              
          $scope.ok = function() {
            $uibModalInstance.close($scope.newsPost);
          };
          $scope.cancel = function () {                
            $uibModalInstance.dismiss();
          }
          $scope.accept = function(){
            $uibModalInstance.close();
          }
        }
      ]
    })
    modalInstance.result.then(function () { 
      DataService.remove(selected.id, function(result){
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

