angular.module('adminApp')
.controller('dashboardCtrl', [
'$scope',
'$state',
'ngQuillConfig',
function($scope,$state,ngQuillConfig){
  //Quil config
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


  //Accordian config
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
  
  $scope.callMeWhenCompiled = function () {
    console.log("----->>>>> Called");
  };
}]);
