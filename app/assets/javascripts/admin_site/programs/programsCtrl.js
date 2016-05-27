angular.module('adminApp')
.controller('programsCtrl', [
'$scope',
'$state',
'DataService',
'ModalService',
'$uibModal',
//injected the modal service  into controller 
function($scope,$state,DataService, ModalService, $uibModal){
  //Accordian config
  $scope.oneAtATime = true;
  var self = $scope
  

  DataService.getPrograms('programs',function(result){
     $scope.programsPosts = result;
    $scope.totalItems = $scope.programsPosts.length;
  })

    

  $scope.openNewProgramsForm = function(){
    
       var modalInstance = $uibModal.open({
      templateUrl: 'admin_site/modals/_addProgramModal.html',
      controller: [
        '$scope', '$uibModalInstance', 'Upload',  function($scope, $uibModalInstance, Upload) {
          
          $scope.upload = function(file, callback) {
            console.log("hit upload")
            file.upload = Upload.upload({
              url: '/contents/images',
              data: {
                file: file
              }
            }).success(function(response){
              console.log(response)
              callback(response.data )
            })
          }
          
          $scope.cancel = function () {                
            $uibModalInstance.dismiss();
          }
          
          $scope.ok = function(file){
            if(file){

              console.log('file')
              $scope.upload(file, function(result) {
                
                $scope.programsPost.url = result
                $uibModalInstance.close($scope.programsPost);
              })
            } else {
                $uibModalInstance.close($scope.programsPost);
            }
          }
        }
      ]
    });

    modalInstance.result.then(function (contentInfo) {
      contentInfo.section = 'programs';
      DataService.create(contentInfo, function(result){
        self.programsPosts.unshift(result['content']);
      });
    });
  };
  
  $scope.openRemoveConfirm = function(selected){
    // used a serivce to pass selected data into remove modal controller
    $scope.deletedData = selected;

    var modalInstance = $uibModal.open({
      templateUrl:'admin_site/modals/_removeModal.html',
      controller: [
        '$scope',
        '$uibModalInstance',
        'ModalService',
        function($scope, $uibModalInstance, ModalService) {
          
          //call it here 
          $scope.data = self.deletedData
              
          $scope.ok = function() {
            $uibModalInstance.close();
          };
          $scope.cancel = function () {                
            $uibModalInstance.dismiss();
          }
        }
      ]
    })
    modalInstance.result.then(function () { 
      DataService.remove(selected.id, function(result){
       for(var i in  self.programsPosts){
          console.log(self.programsPosts[i])
          if( self.programsPosts[i].id=== result['content'].id){
            console.log('found', result['content'].id)            
            self.programsPosts.splice(i,1);
          }
       }

      });
    });
  };

  $scope.update = function(content) {
    console.log(content)
    content.section = "programs";
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

