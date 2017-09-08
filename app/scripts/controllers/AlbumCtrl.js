(function() {
	function AlbumCtrl() {
		this.albumData = angular.copy(albumPicasso);
	}
	angular
		.module('blocJams')
	
	//name of the controller and then the callback function
		.controller('AlbumCtrl', AlbumCtrl);
})();