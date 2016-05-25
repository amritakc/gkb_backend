angular.module('adminApp')
.controller('bikeCtrl', [
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
  DataService.getBikes('bikes',function(result){
    $scope.bikesPosts = result;
    $scope.totalItems = $scope.bikesPosts.length;
  })


  $scope.openNewBikeForm = function(){
    
    var modalInstance = $uibModal.open({
      templateUrl: 'modals/_addBikeModal.html',
      controller: [
        '$scope', '$uibModalInstance', 'Upload',  function($scope, $uibModalInstance, Upload) {
          
          $scope.upload = function(file, callback) {
          console.log("hit upload")
          file.upload = Upload.upload({
            url: '/contents/images',
            data: {
              file: file
            }
            }).progress(function(evt){
              $scope.progress = Math.min(100, parseInt(100.0 *evt.loaded / evt.total));

            }).success(function(response){
              $scope.result = response.data 
              callback(response.data )
            })
          }

          $scope.cancel = function () {                
            $uibModalInstance.dismiss();
          }
          
          $scope.ok = function(file){
            if(file){
              $scope.upload(file, function(result) {
                console.log(result, "result")
                $scope.bikesPosts.url = result
                $uibModalInstance.close($scope.bikesPosts);
              })
            } else {
               $uibModalInstance.close($scope.bikesPosts);
            }

          }
    
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
      contentInfo.section = 'bikes';
      DataService.create(contentInfo, function(result){
        self.bikesPosts.unshift(result['content']);
      });
    });
  };


  $scope.openRemoveConfirm = function(selected){

    $scope.data = selected 

    var modalInstance = $uibModal.open({
      templateUrl:'modals/_removeModal.html',
      controller: [
        '$scope', '$uibModalInstance','ModalService', function($scope, $uibModalInstance, ModalService) {
          
          //call it here 
          $scope.data = self.data
              
          $scope.ok = function() {
            $uibModalInstance.close($scope.bikesPost);
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
       for(var i in  self.bikesPosts){
          console.log(self.bikesPosts[i])
          if( self.bikesPosts[i].id=== result['content'].id){
             console.log('found', result['content'].id)            
            self.bikesPosts.splice(i,1);
          }
       }

      });
    });
  };


  $scope.change = function(title, price, caption, color, brand, section, contentId) {
    DataService.change(title, price, caption, color, brand, section, contentId, function(result){
      console.log(result['content'])
       
       for(var i in  $scope.bikesPosts){
          console.log($scope.bikesPosts[i])
          if( $scope.bikesPosts[i].id === result['content'].id){
            
            console.log('found', result['content'].id)            
            $scope.bikesPosts[i] = result['content']

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

