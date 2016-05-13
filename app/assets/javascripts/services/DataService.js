angular.module('adminApp')
.factory('DataService',
  function ($http) {

  var factory = {};
  var news = [];

  factory.create = function(title, text, section, callback){
    content = {
      title: title,
      text: text,
      section: section
    }
    $http.post('/contents/create', content).success(function(output){
      callback(output)
    });
  }

  factory.update = function(title, text, section,contentId, callback){
    content = {
      title: title,
      text: text,
      section: section,
      contentId: contentId
    }
    $http.patch('/contents/update/' + contentId, content).success(function(output){
      callback(output)
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
