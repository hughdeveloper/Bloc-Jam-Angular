(function() {
	function AlbumCtrl() {
		this.albumData = albumPicasso.songs;
	}
	
	

	angular
		.module('blocJams')
	
	//name of the controller and then the callback function
		.controller('AlbumCtrl', AlbumCtrl);
})();