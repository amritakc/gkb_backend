angular.module('adminApp')
.factory('DataService',
  function ($http) {

  var factory = {};
  var news = [];

  factory.create = function(title, text, section_id, callback){
    console.log("the data from the controller is ", title, text, section_id)
    content = {
      title: title,
      text: text,
      section_id: section_id
    }
    $http.post('/contents/create', content).success(function(output){
      console.log('return value from create request is', output)
    });
  }

  factory.getNews = function(section, callback){
    console.log("getting to getNews service from the controller")
    $http.get('/sections/' + section).success(function(output){
      console.log('return value from getNews is', output)
      callback(output)
    });
  }

  return factory;
});
