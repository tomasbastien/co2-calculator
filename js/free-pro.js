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
	
	L.control.watermark({position: 'bottomleft'}).addTo(map);

	colors = ["#fffff","#cc0000"];