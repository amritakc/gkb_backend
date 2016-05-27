angular.module('adminApp')
.controller('newsCtrl', [
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
  var self = $scope; 
  DataService.getNews('news',function(result){
    $scope.newsPosts = result;
    $scope.totalItems = $scope.newsPosts.length;
  })


  $scope.openNewContentForm = function(){
    var modalInstance = $uibModal.open({
    templateUrl: 'admin_site/modals/_addNewsModal.html',
    controller: [
      '$scope',
      '$uibModalInstance',
      'Upload',
      function($scope,
                $uibModalInstance,
                Upload) {
    
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
            $scope.showSpinner = true; 
            if(file){
              $scope.upload(file, function(result) {
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
      contentInfo.section = 'news';
      DataService.create(contentInfo, function(result){
        self.newsPosts.unshift(result['content']);
      });
    });
  };

  $scope.openRemoveConfirm = function(selected){

    $scope.data = selected
    var modalInstance = $uibModal.open({
      templateUrl:'admin_site/modals/_removeModal.html',
      controller: [
        '$scope',
        '$uibModalInstance',
        'ModalService',
        function($scope, $uibModalInstance, ModalService) {
          
          $scope.data = self.data
            
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
    content.section = "news"
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
