(function() {
	function AlbumCtrl() {
		this.albumData = angular.copy(albumPicasso);
		this.songs = albumPicasso.songs;
	}
	angular
		.module('blocJams')
	
	//name of the controller and then the callback function
		.controller('AlbumCtrl', AlbumCtrl);
})();