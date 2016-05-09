angular.module('adminApp')
.controller('dashboardCtrl', [
'$scope',
'$state',
'ngQuillConfig',
function($scope,$state,ngQuillConfig){
  $scope.showToolbar = true;
  $scope.translations = angular.extend({}, ngQuillConfig.translations, {
      10: 'smallest'
  });
  $scope.toggle = function() {
      $scope.showToolbar = !$scope.showToolbar;
  };
  // Own callback after Editor-Creation
  $scope.editorCallback = function (editor, name) {
      console.log('createCallback', editor, name);
  };
  // Event after an editor is created --> gets the editor instance on optional the editor name if set
  $scope.$on('editorCreated', function (event, editor, name) {
      console.log('createEvent', editor, name);
  });
}]);
