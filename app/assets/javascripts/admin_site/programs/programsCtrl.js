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
        '$scope', '$uibModalInstance',  function($scope, $uibModalInstance) {
      
          // added data to change the dynamic html 
          $scope.data = {title: "Programs" };
          $scope.ok = function() {
            $uibModalInstance.close($scope.programsPost);
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
      contentInfo.section = 'programs';
      DataService.create(contentInfo, function(result){
        self.programsPosts.unshift(result['newContent']);
      });
    });
  };
  
  $scope.openRemoveConfirm = function(selected){
    // used a serivce to pass selected data into remove modal controller
    ModalService.setProperty(selected); 

    var modalInstance = $uibModal.open({
      templateUrl:'admin_site/modals/_removeModal.html',
      controller: [
        '$scope', '$uibModalInstance','ModalService', function($scope, $uibModalInstance, ModalService) {
          
          //call it here 
          $scope.data = ModalService.getProperty();
              
          $scope.ok = function() {
            $uibModalInstance.close($scope.programsPost);
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


  $scope.updatePrograms = function(title, caption, section, contentId) {
    DataService.updatePrograms(title, caption, section, contentId, function(result){
      console.log(result['content'])
       
       for(var i in  $scope.programsPosts){
          console.log($scope.programsPosts[i])
          if( $scope.programsPosts[i].id === result['content'].id){
            
            console.log('found', result['content'].id)            
            $scope.programsPosts[i] = result['content']

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

