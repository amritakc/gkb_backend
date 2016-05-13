angular.module('adminApp')
.factory('DataService',
  function ($http) {

  var factory = {};
  var news = [];

  factory.create = function(contentInfo,callback){
    $http.post('/contents/create', contentInfo).success(function(output){
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
    $http.get('/sections/' + section).success(function(output){
      callback(output);
    });
  }

  factory.remove = function(contentId, callback){
    $http.delete('/contents/destroy/' + contentId).success(function(output){
      callback(output);
    })
  }

  return factory;
});
