angular.module('adminApp')
.controller('announeCtrl', [
'$scope',
'$state',
'DataService',
'ModalService',
'$uibModal',
'usSpinnerService',
//injected the modal service  into controller 
function($scope,$state,DataService, ModalService, $uibModal, usSpinnerService){
  //Accordian config
  $scope.oneAtATime = true;
  //use this for scope issues 
  var self = $scope
  
  DataService.getNews('announcements',function(result){
    $scope.newsPosts = result;
    $scope.totalItems = $scope.newsPosts.length;
  })


  $scope.openNewContentForm = function(){
    var modalInstance = $uibModal.open({
      templateUrl: 'admin_site/modals/_addAnnouncementsModal.html',
      controller: [
        '$scope', '$uibModalInstance', 'Upload',  'usSpinnerService',  function($scope, $uibModalInstance, Upload, usSpinnerService) {
          
          $scope.upload = function(file, callback) {
            console.log("hit upload")
            file.upload = Upload.upload({
              url: '/contents/images',
              data: {
                file: file
              }
            }).success(function(response){
              console.log("uploaded")
              $scope.result = response.data 
              callback(response.data )
            })
          }
          
          $scope.cancel = function () {                
            $uibModalInstance.dismiss();
          }
          
          $scope.ok = function(file){
            $scope.showSpinner = true; 
            if(file){
              $scope.upload(file, function(result) {
                
                console.log(result, "url")
                $scope.newsPost.url = result
                $uibModalInstance.close($scope.newsPost);
              })
            } else {
               $uibModalInstance.close($scope.newsPost);
            }
          }
        }
      ]
    });

modalInstance.result.then(function (contentInfo) {
  contentInfo.section = 'announcements';
  console.log("contentInfo:", contentInfo)
  DataService.create(contentInfo, function(result){
    self.newsPosts.unshift(result['content']);
      });
    });
  };


  $scope.openRemoveConfirm = function(selected){

    $scope.data = selected ; 

    var modalInstance = $uibModal.open({
      templateUrl:'admin_site/modals/_removeModal.html',
      controller: [
        '$scope', '$uibModalInstance','ModalService', function($scope, $uibModalInstance, ModalService) {
          
          //call it here 
          $scope.data = self.data; 
              
          $scope.ok = function() {
            $uibModalInstance.close();
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
          for(var i in  self.newsPosts){
            console.log(self.newsPosts[i])
            if( self.newsPosts[i].id=== result['content'].id){
              console.log('found', result['content'].id)            
              self.newsPosts.splice(i,1);
          }
        }

      });
    }); 
  };


  $scope.update = function(content) {
    DataService.update(content, function(result){
       for(var i in  $scope.newsPosts){
          if( $scope.newsPosts[i].id === result['content'].id){
            $scope.newsPosts[i] = result['content']
          }
       }
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

