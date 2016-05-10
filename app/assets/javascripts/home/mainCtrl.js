angular.module('flapperNews')


.controller('MainCtrl', [
'$scope',
'posts',
'$stateParams',
function($scope, posts, $stateParams){
	  $scope.test = 'Hello world!';
    $scope.posts = []

$scope.post = posts.posts[$stateParams.id];

	$scope.addPost = function(){
    console.log("hello")
    console.log($scope.link)
  if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({
      
      title: $scope.title,
      link: $scope.link,
      upvotes: 0,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
      ]
  })
    console.log($scope.posts)
  $scope.title = '';
  $scope.link = '';
};

$scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};


$scope.addComment = function(){
  if($scope.body === '') { return; }
  $scope.post.comments.push({
    body: $scope.body,
    author: 'user',
    upvotes: 0
  });
  $scope.body = '';
};

}]);