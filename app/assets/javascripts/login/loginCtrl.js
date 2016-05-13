angular.module('adminApp')
.controller('loginCtrl', [
'$scope',
'$state',
'Auth',
function ($scope, $state, Auth) {
        var credentials = {
            email: 'user@domain.com',
            password: 'password1',
            password_confirmation: 'password1'
        };
  $scope.login = function() {
    console.log($scope.user)
    Auth.login($scope.user).then(function(){
      $state.go('dashboard');
    },function(yo){
      console.log(yo)
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
