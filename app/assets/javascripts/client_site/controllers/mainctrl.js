myApp.controller('mainCtrl', mainCtrl);

function mainCtrl($scope, picFactory) {
	var vm = this;

	$scope.slides = picFactory.slides;
	$scope.currentSlideIdx = 0;
	$scope.setCurrentSlideIdx = setCurrentSlideIdx;
	$scope.isCurrentSlideIdx = isCurrentSlideIdx;
	$scope.prevSlide = prevSlide;
	$scope.nextSlide = nextSlide;

	// Function implementations
	function setCurrentSlideIdx(index) {
		$scope.currentSlideIdx = index;
	}

	function isCurrentSlideIdx(index) {
		return $scope.currentSlideIdx === index;
	}

	function prevSlide() {
		$scope.currentSlideIdx = ($scope.currentSlideIdx < $scope.slides.length - 1) ? ++$scope.currentSlideIdx : 0;
	}

	function nextSlide() {
		$scope.currentSlideIdx = ($scope.currentSlideIdx > 0) ? --$scope.currentSlideIdx : $scope.slides.length - 1;
	}
}