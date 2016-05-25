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
  var self = $scope
  DataService.getNews('announcements',function(result){
    $scope.newsPosts = result;
    $scope.totalItems = $scope.newsPosts.length;
  })


  $scope.openNewContentForm = function(){

  var modalInstance = $uibModal.open({
    templateUrl: 'admin_site/modals/_addAnnouncementsModal.html',
    controller: [
      '$scope', '$uibModalInstance', 'Upload', '$timeout',   function($scope, $uibModalInstance, Upload, $timeout) {

        // added data to change the dynamic html 
        $scope.test =0

        $scope.ok = function(file) {
          console.log($scope.newsPost, file)
          $scope.file = file 
          file.upload = Upload.upload({
            //this needs to change 
            url: "https://angular-file-upload-cors-srv.appspot.com/upload",
            data: {
            file: file, title: $scope.newsPost.title, section: "annoucements"
          }
        }).then(function (response){
            console.log(response.data)
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
        };
        
        $scope.cancel = function () {                
            $uibModalInstance.dismiss();
          }
        $scope.accept = function(){
          $uibModalInstance.close();
          }
        }]
    });

modalInstance.result.then(function (contentInfo) {
  contentInfo.section = 'announcements';
  DataService.create(contentInfo, function(result){
    self.newsPosts.unshift(result['newContent']);
      });
    });
  };


  $scope.openRemoveConfirm = function(selected){

    $scope.data = selected ; 

    var modalInstance = $uibModal.open({
      templateUrl:'modals/_removeModal.html',
      controller: [
        '$scope', '$uibModalInstance','ModalService', function($scope, $uibModalInstance, ModalService) {
          
          //call it here 
          $scope.data = self.data; 
              
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


  $scope.update = function(title, text, section,contentId) {
    DataService.update(title, text, section,contentId, function(result){
      console.log(result['content'])
       
       for(var i in  $scope.newsPosts){
          console.log($scope.newsPosts[i])
          if( $scope.newsPosts[i].id === result['content'].id){
            
            console.log('found', result['content'].id)            
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

