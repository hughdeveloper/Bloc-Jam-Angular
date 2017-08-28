(function() {
	//$locationProvider configures tha application path.
	function config($stateProvider, $locationProvider) {
	//locationProvider automatically adds in #! (hashbang mode) to the url which is showing that the page was loaded by javascript. Ther $locationProvider code below disables this.
		$locationProvider
			.html5Mode ({
			//by setting enabled to true in the html5mode we are disabling the hashbang
				enabled: true,
			//by setting the requireBase to false we are helping avoid $location errors. this has nothing to do with disabling the hashbang.
				requireBase: false
		});
		
		// determines the number of properties for a state
		$stateProvider
			.state('landing', {
			url: '/',
			templateUrl: '/templates/landing.html'
		})
			.state('album', {
			url: '/album',
			templateUrl: '/templates/album.html'
		})
			.state('collection', {
			url: '/collection',
			templateUrl: 'templates/collection.html'
		});
		
		
		
		
	}
	
	// the first argument is the prescribed name of the module, the second argument is injecting an array that is filled with a list of external modules (extensions that angular can use)
	angular
		.module('blocJams', ['ui.router'])
		.config(config);
})();