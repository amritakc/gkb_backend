angular.module('adminApp')
.factory('DataService',
  function ($http) {

  var factory = {};
  var news = [];

  factory.create = function(contentInfo,callback){
    $http.post('/contents/create', contentInfo).success(function(output){
      console.log(output);
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
      console.log(output, "patch")
      callback(output)
    });
  }
  
  factory.change = function(title, price, caption, color, type, section, contentId, callback){
    content = {
      title: title,
      price: price,
      caption: caption,
      color: color,
      type: type,
      section: section,
      contentId: contentId
    }
    $http.patch('/contents/update/' + contentId, content).success(function(output){
      console.log(output, "patch")
      callback(output)
    });
  }

  factory.updatePrograms = function(title, caption, section, contentId, callback){
    content = {
      title: title,
      caption: caption,
      section: section,
      contentId: contentId
    }
    $http.patch('/contents/update/' + contentId, content).success(function(output){
      console.log(output, "patch")
      callback(output)
    });
  }


  factory.getNews = function(section, callback){
    $http.get('/sections/' + section).success(function(output){
      callback(output);
    });
  }

  factory.getBikes = function(section, callback){
    $http.get('/sections/' + section).success(function(output){
      callback(output);
    });
  }

  factory.getPrograms = function(section, callback){
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

