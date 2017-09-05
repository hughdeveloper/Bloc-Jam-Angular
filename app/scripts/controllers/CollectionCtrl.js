(function() {
	function CollectionCtrl() {
		//setting up an empty array
		this.albums = [];
		for (var i =0; i<12; i++) {
			this.albums.push(angular.copy(albumPicasso));
		}
	}
	
	angular
		.module('blocJams')
		//name of controller, callback function
		.controller('CollectionCtrl', CollectionCtrl);
})();