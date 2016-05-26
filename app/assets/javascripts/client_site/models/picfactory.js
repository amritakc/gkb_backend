myApp.factory('picFactory', picFactory);

function picFactory() {
	var factory = {
		slides: [
			{ image: '/static/img/bike1a.jpg', description: 'Image' },
			{ image: '/static/img/bike1b.jpg', description: 'Image' },
			{ image: '/static/img/bike1c.jpg', description: 'Image' },
			{ image: '/static/img/bike1d.jpg', description: 'Image' },
			{ image: '/static/img/bike1e.jpg', description: 'Image' }
		],
	};

	return factory;
}