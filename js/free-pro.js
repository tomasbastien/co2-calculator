var map_center=[46.71109,1.7191036];
var map_zoom=4;

L.Control.Watermark = L.Control.extend({
	onAdd(map) {
		const img = L.DomUtil.create('img');

		img.src = './img/logo-fp-corp-fondblanc-strictborder.png';
		img.style.width = '50px';

		return img;
	},

	onRemove(map) {
		// Nothing to do here
	}
});

L.control.watermark = function (opts) {
	return new L.Control.Watermark(opts);
};

// L.control.watermark({position: 'bottomleft'}).addTo(map);
init_map(map);


colors = ["#cc0000","#000000"];


openrouteservice_token = "5b3ce3597851110001cf62483a8b9711fdbd49c0b11b4087ad9a32ff"; //Free plan
