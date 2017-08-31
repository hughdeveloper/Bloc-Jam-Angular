(function() {
	function LandingCtrl () {
		this.heroTitle = "Turn the Music Up!";
	}


angular
	// we dont need to add dependencies because they were already set in app.js. We only needed ti grab the module which was already defined 
 	.module('blocJams')
	//.controller has two parameters the name of the controller and a callback function or an array that injects dependencies. If we were going to be injecting dependencies the .controller should lok like ".controller('MyCtrl', [$scope, dep1, dep2, MyCtrl]);"
	.controller('LandingCtrl', LandingCtrl);
})();