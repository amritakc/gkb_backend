angular.module('adminApp')
.controller('modalCtrl', [
'$scope',
'$state',
'DataService',
'$uiModal',
// 'Upload'
function($scope){
   $scope.ok = function() {
   		// Upload.upload({
   		// 	url: '/contents/create',
   		// 	data: {file: $scope.bikesPost}
   		// 	img: 
   		// })
    console.log("hi from modal ctrl")
    }
    $scope.cancel = function () {
      console.log('works')
    }
    $scope.accept = function(){
    }
    $scope.disabled = false;
}]);
