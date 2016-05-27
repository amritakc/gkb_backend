angular.module('adminApp')
.controller('loginCtrl', [
'$scope',
'$state',
'Auth',
'ngToast',
'ModalService',
'$uibModal',
'$log',
function ($scope, $state,Auth,ngToast,ModalService,$uibModal, $log) {
  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      $state.go('newsPage');
      location.reload()
    },function(err){
      ngToast.danger(err.data.error)
    });
  };

  $scope.animationsEnabled = true;

  $scope.open = function () {

  //create an instance of the modal 
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'admin_site/login/_forgotPasswordModal.html',
      controller: [
        '$scope',
        '$uibModalInstance',
        'ModalService',
        function($scope, $uibModalInstance, ModalService) {
          
          $scope.ok = function() {
            $uibModalInstance.close($scope.user);
          };
          $scope.cancel = function () {                
            $uibModalInstance.dismiss();
          }
        }
      ]
    });

    modalInstance.result.then(function (email) {
        Auth.sendResetPasswordInstructions(email).then(function() {
            // Sended email if user found otherwise email not sended...
        });
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

}]);
