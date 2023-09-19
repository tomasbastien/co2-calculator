L.Control.Watermark = L.Control.extend({
	onAdd(map) {
		const img = L.DomUtil.create('img');

		img.src = './img/POW-FR.svg';
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


colors = ["#ffee33","#234B64"];
