L.Control.Watermark = L.Control.extend({
	onAdd(map) {
		const img = L.DomUtil.create('img');

		img.src = './img/logo-POW-Fr-bleu-2.png';
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

var map_center=[45.899182,6.128679];
var map_zoom=7;
init_map(map);

openrouteservice_token = "5b3ce3597851110001cf6248f0b96726058d4869bd7d29059d960328" //POW-FR collaborative plan granted in nov.23
colors = ["#ffee33","#234B64"];
