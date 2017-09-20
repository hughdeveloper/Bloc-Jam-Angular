(function() {
	function Fixtures () {
		var Fixtures = {};
		
		
		
var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
			// why are the forward slashes added to the beginning of the art url
     albumArtUrl: '/assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: 161.71, audioUrl: 'assets/music/blue' },
         { title: 'Green', duration: 103.96, audioUrl: 'assets/music/green' },
         { title: 'Red', duration: 268.45, audioUrl: 'assets/music/red' },
         { title: 'Pink', duration: 153.14, audioUrl: 'assets/music/pink' },
         { title: 'Magenta', duration: 374.22, audioUrl: 'assets/music/magenta'}
     ]
 };
// We have created a object//
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: '/assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };
		
	
		Fixtures.getCollection = function(numOfAlbums) {
			var collectionArray = [];
			for (var i = 0; i < numOfAlbums; i++) {
				collectionArray.push(angular.copy(albumPicasso));
			}
			return collectionArray;
		}; 
		
		
		Fixtures.getAlbum = function() {
			return albumPicasso;
		};
		

		
		
		return Fixtures;
	}
	
	angular
		.module('blocJams')
	//name of controller then callback function
	// .factory() desugnates the use of the factory recipe
		.factory('Fixtures', Fixtures)
})();