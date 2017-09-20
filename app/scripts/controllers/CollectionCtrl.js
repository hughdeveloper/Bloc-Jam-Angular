(function () {
	function CollectionCtrl(Fixtures) {
		//setting up an empty array
		this.albums = Fixtures.getCollection(12);
	}

	angular
		.module('blocJams')
		//name of controller, callback function
		.controller('CollectionCtrl', CollectionCtrl);
})();