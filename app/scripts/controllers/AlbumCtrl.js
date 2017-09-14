(function() {
	function AlbumCtrl(Fixtures) {
		this.albumData = Fixtures.getAlbum();
	}
	angular
		.module('blocJams')
	
	//name of the controller and then the callback function
	//added fixtures to the array of dependencies. We can now use the service within the controller
		.controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();