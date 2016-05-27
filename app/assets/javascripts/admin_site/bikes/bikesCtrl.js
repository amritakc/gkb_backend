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
    $scope.allBikes = result;
    $scope.totalItems = $scope.allBikes.length;
  })


  $scope.openNewBikeForm = function(){
    
    var modalInstance = $uibModal.open({
      templateUrl: 'admin_site/modals/_addBikeModal.html',
      controller: [
        '$scope', '$uibModalInstance', 'Upload',  function($scope, $uibModalInstance, Upload) {
          
          $scope.upload = function(file, callback) {
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
            console.log($scope.bikesPost)
            if(file){
              $scope.upload(file, function(result) {
                console.log(result, "result")
                $scope.bikesPost.url = result
                console.log($scope.bikesPost)
                $uibModalInstance.close($scope.bikesPost);
              })
            } else {
               $uibModalInstance.dismiss();
            }
          }
        }
      ]
    });
    
    modalInstance.result.then(function (contentInfo) {
      contentInfo.section = 'bikes';
      console.log(contentInfo)
      DataService.create(contentInfo, function(result){
        console.log(result, "bikes result")
        self.allBikes.unshift(result['content']);
      });
    });
  };

  $scope.openRemoveConfirm = function(selected){

    $scope.data = selected 

    var modalInstance = $uibModal.open({
      templateUrl:'admin_site/modals/_removeModal.html',
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


       for(var i in  self.allBikes){
          console.log(self.allBikes[i])
          if( self.allBikes[i].id=== result['content'].id){
            
            console.log('found', result['content'].id)            
            self.allBikes.splice(i,1);

          }
       }

      });
    });
  };


  $scope.change = function(title, price, caption, color, brand, section, contentId) {
    DataService.change(title, price, caption, color, brand, section, contentId, function(result){
      console.log(result['content'])
       
       for(var i in  $scope.allBikes){
          console.log($scope.allBikes[i])
          if( $scope.allBikes[i].id === result['content'].id){
            
            console.log('found', result['content'].id)            
            $scope.allBikes[i] = result['content']

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

