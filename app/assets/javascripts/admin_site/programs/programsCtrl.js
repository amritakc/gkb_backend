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
        '$scope',
        '$uibModalInstance',
        'Upload',
        function($scope, $uibModalInstance,Upload) {
      
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

          // added data to change the dynamic html 
          $scope.data = {title: "Programs" };
          $scope.ok = function(file){
            console.log(file)
            if(file){
              $scope.upload(file, function(result) {
                $scope.programsPost.url = result;
                $scope.programsPost.section = "programs"
                $uibModalInstance.close($scope.programsPost);
              })
            } else {
               $uibModalInstance.dismiss();
            }
          }
          $scope.cancel = function () {
            $uibModalInstance.dismiss();
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
    ModalService.setProperty(selected); 

    var modalInstance = $uibModal.open({
      templateUrl:'admin_site/modals/_removeModal.html',
      controller: [
        '$scope',
        '$uibModalInstance',
        'ModalService',
        function($scope, $uibModalInstance, ModalService) {
          
          //call it here 
          $scope.data = ModalService.getProperty();
              
          $scope.ok = function() {
            $uibModalInstance.close($scope.programsPost);
          };
          $scope.cancel = function () {                
            $uibModalInstance.dismiss();
          }
        }
      ]
    })
    modalInstance.result.then(function () { 
      DataService.create(selected.id, function(result){
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


  $scope.updatePrograms = function(title, text, section, contentId) {
    var result = {
      title: title,
      text: text,
      section: section,
      contentId: contentId
    }
    DataService.updatePrograms(title, caption, section, contentId, function(result){

      console.log(result)

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

