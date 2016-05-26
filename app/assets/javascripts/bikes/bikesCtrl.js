angular.module('adminApp')
.controller('bikesCtrl', [
'$scope',
'$state',
'DataService',
'ModalService',
'$uibModal',
'Upload',
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
        '$scope', '$uibModalInstance', 'Upload', '$timeout', function($scope, $uibModalInstance, Upload, $timeout) {
      
          $scope.ok = function(file) {
            console.log($scope.bikesPost, file)
          $scope.file = file
          file.upload = Upload.upload({
            //this needs to change 
            url: '/contents/create',
            // url: "https://angular-file-upload-cors-srv.appspot.com/upload",
            data: {
            file: file, title: $scope.bikesPost.title, section: "bikes", price: $scope.bikesPost.price, caption: $scope.bikesPost.caption, color: $scope.bikesPost.color, brand: $scope.bikesPost.brand
             }
            }).then(function (response){
              //$timeout() function in AngularJS returns a promise a
              $timeout(function () {
                
                $scope.result = response.data 

            })
          }, function(response){
              console.log('accepted', Date.now())

              if(response.status > 0){
                $scope.errorMsg = response.status + ':' + response.data;
              }
          }, function (evt){
               $scope.progress = Math.min(100, parseInt(100.0 *evt.loaded / evt.total));
                console.log($scope.progress)
              })
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
    });

    modalInstance.result.then(function (contentInfo) {
      contentInfo.section = 'bikes';
      DataService.create(contentInfo, function(result){
        self.bikesPosts.unshift(result['newContent']);
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
