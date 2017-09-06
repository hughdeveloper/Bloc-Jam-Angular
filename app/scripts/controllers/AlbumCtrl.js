(function() {
	function AlbumCtrl() {
		this.albumData = albumPicasso.songs;
		this.titleData = albumPicasso.title;
		this.artistData = albumPicasso.artist;
		this.albumArtUrlData = albumPicasso.albumArtUrl;
		this.yearRecordData = albumPicasso.year + ' ' + albumPicasso.label;
	}
	angular
		.module('blocJams')
	
	//name of the controller and then the callback function
		.controller('AlbumCtrl', AlbumCtrl);
})();