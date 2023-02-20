const map = L.map('map').setView([45.899182,6.128679],7);
var step_number = 0;

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function reset_map(map) {
	map.eachLayer(function (layer) {
			        map.removeLayer(layer);
			    });

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);
}

var itineraries = [];

var transportations = [
				{
					"name": "Bike",
					"id" : 7,
					"profile" : "cycling-regular",
					"emoji" : "🚲"
				},
				{
					"name" : "City Bus",
					"id" : 9,
					"profile" : "driving-car",
					"emoji" : "🚌"
				},
				{
					"name": "Car",
					"id" : 4,
					"profile" : "driving-car",
					"emoji" : "🚗"
				},
				{
					"name" : "Electric Car",
					"id" : 5,
					"profile" : "driving-car",
					"emoji" : "🚗"
				},
				{
					"name" : "Autobus",
					"id" : 6,
					"profile" : "driving-car",
					"emoji" : "🚐"
				},
			]

// TODO
// Un objet global qui contient la trajet avec les étapes :
// [
// 	{
// 		"departure" = "",
// 		"arrival" = "",
// 		"geojson_route" = [],
// 		"transportation" = "",
// 		"co2_emissions" = "",
// 		"kms" = ""
// 	},
// 	{
// 		"departure" = "",
// 		"arrival" = "",
// 		"geojson_route" = [],
// 		"transportation" = "",
// 		"co2_emissions" = "",
// 		"kms" = ""
// 	}
// ]

function show_passengers_setting(elementValue){
	element=document.getElementById("passengers_div");
	if ((elementValue.value == "Car") || (elementValue.value == "Electric Car")){
		if (element == null){
			const passengers_div = document.createElement("div");
			passengers_div.className = "mb-3";
			passengers_div.id="passengers_div";
			var text = document.createTextNode("Passengers : ");
			passengers_div.appendChild(text);
			var input = document.createElement("input");
			input.type = "number";
			input.min = "1";
			input.max="7";
			input.step="1";
			input.value="1";
			input.className="quantity-field border-0 text-center w-25";
			input.id="passengers";
			passengers_div.appendChild(input);
			const currentDiv = document.getElementById("div-set-passengers-number");
			document.getElementById("route-details").insertBefore(passengers_div, currentDiv);
			}
	} else {
		if (element != null) {
			element.remove();
		}
	}
}

function delete_step(){
	if (step_number > 0)
	{
		const element = document.getElementById('step-'+step_number);
		element.remove();
		step_number--;
	}
	if (step_number == 0){
		var x = document.getElementById("div-delete-step");
		if (x.style.display === "") {
	  		x.style.display = "none";
		}
	}
}

function add_step() {
	step_number=step_number+1;
	const new_step = document.createElement("div");
	new_step.className = "mb-3";
	var input = document.createElement("input");
	input.type = "text";
	input.placeholder = "Step "+step_number;
	input.id="step-"+step_number;
	input.type="search";
	new_step.appendChild(input);
	input.className = "form-control empty required";
	const currentDiv = document.getElementById("div-add-step");
	document.getElementById("route-details").insertBefore(new_step, currentDiv);

	var x = document.getElementById("div-delete-step");
	if (x.style.display === "none") {
	  x.style.display = "";
	} 

	input.addEventListener('input', function handleInput() {
  		this.classList.remove('invalid');
  		this.classList.remove('empty');
			this.classList.remove('valid');
	     if (this.value != "") {
	     	  this.classList.add('valid') // if validation is true
	     }else{
	     		this.classList.add('invalid') // if validation is false
	     }
	
	});
	input.addEventListener('click', function handleClick() {
  		this.classList.remove('invalid');
  		this.classList.remove('empty');
			this.classList.remove('valid');
	     if (this.value != "") {
	     	  this.classList.add('valid') // if validation is true
	     }else{
	     		this.classList.add('invalid') // if validation is false
	     }
	
	});
}

async function create_geojson(locality_array) {
	var geojson_route = [];
	var route_gps = [];
	var undefined_step = false;
	for (item of locality_array) {
	    await fetch('https://nominatim.openstreetmap.org/search?q='+item+'&format=json&polygon=1&addressdetails=1', {
		    method: 'GET'
			})
			.then(gps_json => gps_json.json())
			.then(gps_json => {
				if (Object.keys(gps_json).length === 0){
					console.log(item+" was not found in the OSM database");
					document.getElementById("calculation-result").innerHTML = "<div class='alert alert-warning' role='alert'><em>"+item+"</em> was not found in the OSM database, please be more specific for it or use a nearby location</div>"
					undefined_step = true;
					document.getElementById("loading").innerHTML = "";
				}else{
				route_gps.push(gps_json);
				geojson_route.push("["+JSON.stringify(gps_json[0]["lon"])+','+JSON.stringify(gps_json[0]["lat"])+"]");	
				}
			});
	    }
	console.log(geojson_route.join(","));
	if (undefined_step) {
		geojson_route = []; 
	}
	return geojson_route;
}

function clear_fields() {
	location.reload();
	// console.log("Clearing fields");
	// document.getElementById('departure').value = '';
	// document.getElementById('arrival').value = '';
	// for (let step = 1; step <= step_number; step++) {
	// 	element=document.getElementById("step-"+step);
	// 	element.remove();
	// }
	// step_number=0;
	// reset_map(map);
	// route_steps = [];
	// map.setView([45.899182,6.128679],9);
	// document.getElementById("calculation-result").innerHTML = "";
	// passengers=1;
	// document.getElementById('transportation').value = 'Bike';
	// element=document.getElementById("passengers_div");
	// if (element != null){
	// 	element.remove();
	// }

}

function revert_geolocation_input_fields() {
	var departure = document.getElementById("departure").value;
	var arrival = document.getElementById("arrival").value;
	var route_steps = [];
	route_steps[0]=departure;
	route_steps[step_number+1]=arrival;
	for (let step = 1; step <= step_number; step++) {
	 	route_steps[step]=document.getElementById("step-"+step).value;
	}
	route_steps=route_steps.reverse();
	document.getElementById("departure").value=route_steps[0];
	document.getElementById("arrival").value=route_steps[step_number+1];
	for (let step = 1; step <= step_number; step++) {
		document.getElementById("step-"+step).value=route_steps[step];
	}


}

function validate(list){
	for (item of list) {
		if (item == ""){
			document.getElementById("calculation-result").innerHTML = "<div class='alert alert-warning' role='alert'>Missing step in form</div>";
			return false;
		}
	}
	return true;
}

function calculate_co2_route() {
	var departure = document.getElementById("departure").value;
	var arrival = document.getElementById("arrival").value;
	var route_steps = [];
	route_steps[0]=departure;
	route_steps[step_number+1]=arrival;

	for (let step = 1; step <= step_number; step++) {
		route_steps[step]=document.getElementById("step-"+step).value;
	}

	document.getElementById("calculation-result").innerHTML = "";

	if (validate(route_steps)){
		document.getElementById("loading").innerHTML = "<div class='text-center'><div class='spinner-border' role='status'><span class='visually-hidden'>Loading...</span></div></div>";
		var arrival_pretty_gps_coordonates = [
				{
					"lon": "",
					"lat" : ""
				}];
		var passengers = 1;
		var transportation = document.getElementById("transportation").value;

		for (var i=0 ; i < transportations.length ; i++)
			{
			    if (transportations[i]["name"] == transportation) {
			        var transportation_id = transportations[i]["id"];
			        var transportation_profile = transportations[i]["profile"];
			        var transportation_emoji = transportations[i]["emoji"];
			    }
			}
			element=document.getElementById("passengers_div");
			if (element != null){
				passengers = document.getElementById("passengers").value;
			}

		geojson_route=create_geojson(route_steps)
		.then(geojson_route => {
			if (geojson_route.length > 0){
				geojson_text='{"coordinates":['+geojson_route.join(',')+']}';
				arrival_pretty_gps_coordonates["lon"] = getDD2DMS(geojson_route.slice(-1)[0].split(",")[0].replace("[","").replace(/\"/g,""),"lon");
				arrival_pretty_gps_coordonates["lat"] = getDD2DMS(geojson_route.slice(-1)[0].split(",")[1].replace("]","").replace(/\"/g,""),"lat");
				console.log("Geojson "+geojson_text);
				fetch('https://api.openrouteservice.org/v2/directions/'+transportation_profile+'/geojson', {
					    method: 'POST',
					    headers: {
					        'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png',
					        'Authorization' : '5b3ce3597851110001cf62483a8b9711fdbd49c0b11b4087ad9a32ff',
					        "Content-Type": "application/json"
					        },
					    body: geojson_text
					}).then(response => { 
						if (response.status == 200) {
					    return response.json();
					  }
					  throw new Error('Something went wrong');
					})
					.then(response => {
					  	var route_distance = response.features[0].properties.summary.distance;
					  	//route_geojson=JSON.parse(response)
					  	//reset_map(map);
						// L.geoJSON(response).addTo(map);
						// map.fitBounds(L.geoJSON(response).getBounds());

					  	//console.log(distance+" kms");
					  	console.log(route_distance);
					  	fetch('https://api.monimpacttransport.fr/beta/getEmissionsPerDistance?km='+route_distance/1000+'&transportations='+transportation_id, {
						    method: 'GET'
						})
						.then(ademe_output => ademe_output.json())
						.then(ademe_output => {
							var co2_emissions = parseFloat(ademe_output[0].emissions.kgco2e);
							var co2_emissions_individual = (co2_emissions/passengers).toFixed(2);
							console.log(co2_emissions);
							document.getElementById("loading").innerHTML = "";
							itineraries.push({"departure": departure,"arrival":arrival,"geojson_route":geojson_route,"transportation":transportation,"passengers":passengers, "route":response, "distance":route_distance,"co2_emissions":co2_emissions});
							console.log(itineraries);
							render_total(itineraries);
						})
						})
					.catch((error) => {
					  console.log(error);
					  	document.getElementById("loading").innerHTML = "";
						document.getElementById("calculation-result").innerHTML = "<div class='alert alert-danger' role='alert'>An error occured during route processing, please retry</div>"
					})
				
			}
			})
	}
}

function render_total(itineraries){
	var total = {
		"co2_emissions" : 0,
		"co2_emissions_individual" : 0,
		"distance" : 0
	};
	reset_map(map);
	document.getElementById("calculation-result").innerHTML="";
	for (itinerary in itineraries){
		L.geoJSON(itineraries[itinerary]["route"]).addTo(map);
		map.fitBounds(L.geoJSON(itineraries[itinerary]["route"]).getBounds());
		total["co2_emissions"]=total["co2_emissions"]+itineraries[itinerary]["co2_emissions"];
		total["co2_emissions_individual"]=total["co2_emissions_individual"]+(itineraries[itinerary]["co2_emissions"]/itineraries[itinerary]["passengers"]);
		total["distance"]=total["distance"]+itineraries[itinerary]["distance"];
		console.log(itinerary);
		for (var i=0 ; i < transportations.length ; i++)
		{
		    if (transportations[i]["name"] == itineraries[itinerary]["transportation"]) {
		        var transportation_emoji = transportations[i]["emoji"];
		    }
		}
		distance_kms=(parseFloat(itineraries[itinerary]["distance"])/1000).toFixed(2);
		var newNode = document.createElement('div');
		newNode.className = "mb-3";
		//var content="<button type='button' class='btn btn-danger btn-sm' onclick='remove_route(itineraries,"+itinerary+")'>Delete</button> <strong>#"+itinerary+"</strong> "+transportation_emoji+" <strong>"+itineraries[itinerary]["departure"]+"</strong> - <strong>"+itineraries[itinerary]["arrival"]+"</strong> ("+itineraries[itinerary]["distance"]+" kms), <strong>"+itineraries[itinerary]["passengers"]+"</strong> 👤 = <strong>"+(itineraries[itinerary]["co2_emissions"]/itineraries[itinerary]["passengers"]).toFixed(2)+" kgCO2e/pers";
		var content="<button type='button' class='btn btn-danger btn-sm' onclick='remove_route(itineraries,"+itinerary+")'><i class='fa fa-times'></i></button> <strong>#"+itinerary+"</strong> "+transportation_emoji+" <strong>"+itineraries[itinerary]["departure"]+"</strong> - <strong>"+itineraries[itinerary]["arrival"]+"</strong> ("+distance_kms+" kms), <strong>"+itineraries[itinerary]["passengers"]+"</strong> 👤 = <strong>"+(itineraries[itinerary]["co2_emissions"]/itineraries[itinerary]["passengers"]).toFixed(2)+" kgCO2e/pers";
		newNode.innerHTML = content;
		document.getElementById("calculation-result").appendChild(newNode);
	}
	total_kms=(parseFloat(total["distance"])/1000).toFixed(2);
	var horizontal_line = document.createElement('hr');
	var total_div = document.createElement('div');
	total_div.className = "mb-3 d-flex align-items-center justify-content-center";
	var content_total = "<h5 align='center'>TOTAL : "+total_kms+" kms"+", "+total["co2_emissions"].toFixed(2)+" kgCO2e 🌍 ("+total["co2_emissions_individual"].toFixed(2)+"kgCO2e/pers)</h5>"
	total_div.innerHTML=content_total;
	document.getElementById("calculation-result").appendChild(horizontal_line);
	document.getElementById("calculation-result").appendChild(total_div);
}

function remove_route(itineraries,id){
	removed=itineraries.splice(id,1);
	console.log(itineraries);
	render_total(itineraries);
}


function popup(text){
	alert(text);
}

var x = document.getElementById("calculation-result");
if (x.style.display === "none") {
  x.style.display = "block";
} 			


function getDD2DMS(dms, type){

    var sign = 1, Abs=0;
    var days, minutes, secounds, direction;

    if(dms < 0)  { sign = -1; }
    Abs = Math.abs( Math.round(dms * 1000000.));
    //Math.round is used to eliminate the small error caused by rounding in the computer:
    //e.g. 0.2 is not the same as 0.20000000000284
    //Error checks
    if(type == "lat" && Abs > (90 * 1000000)){
        //alert(" Degrees Latitude must be in the range of -90. to 90. ");
        return false;
    } else if(type == "lon" && Abs > (180 * 1000000)){
        //alert(" Degrees Longitude must be in the range of -180 to 180. ");
        return false;
    }

    days = Math.floor(Abs / 1000000);
    minutes = Math.floor(((Abs/1000000) - days) * 60);
    secounds = ( Math.floor((( ((Abs/1000000) - days) * 60) - minutes) * 100000) *60/100000 ).toFixed(3);
    days = days * sign;
    if(type == 'lat') direction = days<0 ? 'S' : 'N';
    if(type == 'lon') direction = days<0 ? 'W' : 'E';
    //else return value     
    return (days * sign) + 'º ' + minutes + "' " + secounds + "'' " + direction;
}


document.getElementById('departure').oninput = function(){
		 this.classList.remove('empty');
		 this.classList.remove('invalid');
		 this.classList.remove('valid');
     if (this.value != "") {
     	  this.classList.add('valid') // if validation is true
     }else{
     		this.classList.add('invalid') // if validation is false
     }
}

document.getElementById('arrival').oninput = function(){
		 this.classList.remove('empty');
		 this.classList.remove('invalid');
		 this.classList.remove('valid');
     if (this.value != "") {
     	  this.classList.add('valid') // if validation is true
     }else{
     		this.classList.add('invalid') // if validation is false
     }
}

document.getElementById('departure').onclick = function(){
		 this.classList.remove('empty');
		 this.classList.remove('invalid');
		 this.classList.remove('valid');
     if (this.value != "") {
     	  this.classList.add('valid') // if validation is true
     }else{
     		this.classList.add('invalid') // if validation is false
     }
}

document.getElementById('arrival').onclick = function(){
		 this.classList.remove('empty');
		 this.classList.remove('invalid');
		 this.classList.remove('valid');
     if (this.value != "") {
     	  this.classList.add('valid') // if validation is true
     }else{
     		this.classList.add('invalid') // if validation is false
     }
}