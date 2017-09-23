(function () {
	function AlbumCtrl(Fixtures, SongPlayer) {
		this.albumData = Fixtures.getAlbum();
		this.songPlayer = SongPlayer;

	}
	angular
		.module('blocJams')

		//name of the controller and then the callback function
		//added fixtures to the array of dependencies. We can now use the service within the controller
		.controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
