myApp.factory('locFactory', locFactory);
// locFactory function
function locFactory($location) {
	var factory = {
		currentUrl: '/'
	};

	return factory;
}