angular.module('adminApp')
.controller('newsCtrl', [
'$scope',
'$state',
'DataService',
function($scope,$state,DataService){
  //Accordian config
  $scope.oneAtATime = true;
//Barclay is testing the factory right here
  $scope.news = [];
  // $scope.section = "";

  // DataService.getNews()

//and here ends his code
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

  $scope.remove = function() {
    console.log('getting in remove function')

  };

  $scope.save = function(title, text, section_id) {
    console.log('data from save function is', title, text, section_id)
    DataService.create(title, text, section_id);
  }
}]);
