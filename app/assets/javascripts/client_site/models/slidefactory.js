myApp.factory('slideFactory', slideFactory);

function slideFactory($http) {
	var factory = {
		getSlides: getSlides,
	};
	var slides = [];

	// function implementations
	function getSlides(callback) {
		$http.get('/sections/announcements').then(function(res) {
			slides = res;
			callback(slides);
		});
	}

	return factory;
}