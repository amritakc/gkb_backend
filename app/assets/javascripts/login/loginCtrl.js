angular.module('adminApp')
.controller('loginCtrl', [
'$scope',
'$state',
'Auth',
'ngToast',
function ($scope, $state,Auth,ngToast) {
  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      $state.go('dashboard');
    },function(err){
      ngToast.danger(err.data.error)
    });
  };

  $scope.animationsEnabled = true;

  $scope.open = function () {

  //create an instance of the modal 
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'login/_forgotPasswordModal.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

}]);
