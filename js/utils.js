// CONST & GLOBAL VARIABLES //




let pluginOptions = {
   cropImageByInnerWH: true, // crop blank opacity from image borders
   hidden: false, // hide screen icon
   preventDownload: false, // prevent download on button click
   domtoimageOptions: {}, // see options for dom-to-image
   position: 'topright', // position of take screen icon
   screenName: "co2e-calculator-map-"+getCurrentDateTime(), // string or function
   hideElementsWithSelectors: ['.leaflet-control-container'], // by default hide map controls All els must be child of _map._container
   mimeType: 'image/png', // used if format == image,
   // caption: "TEST", // string or function, added caption to bottom of screen
   // captionFontSize: 15,
   // captionFont: 'Arial',
   // captionColor: 'black',
   // captionBgColor: 'white',
   // captionOffset: 5,
   // callback for manually edit map if have warn: "May be map size very big on that zoom level, we have error"
   // and screenshot not created
   onPixelDataFail: async function({ node, plugin, error, mapPane, domtoimageOptions }) {
       // Solutions:
       // decrease size of map
       // or decrease zoom level
       // or remove elements with big distanses
       // and after that return image in Promise - plugin._getPixelDataOfNormalMap
       return plugin._getPixelDataOfNormalMap(domtoimageOptions)
   }
}


const map = L.map('map').setView([45.899182,6.128679],7);
simpleMapScreenshoter = L.simpleMapScreenshoter(pluginOptions).addTo(map);



const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var step_number = 0;


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
				{
					"name" : "Regular train",
					"id" : 15,
					"profile" : "train",
					"emoji" : "🚈",
					"sncf_stop_suffix" : ":Train"
				},
				{
					"name" : "High-speed train",
					"id" : 2,
					"profile" : "train",
					"emoji" : "🚄",
					"sncf_stop_suffix" : ":LongDistanceTrain"
				},
				{
					"name" : "SNCF",
					"id" : 99,
					"profile" : "train-sncf",
					"emoji" : "🚈",
					"sncf_stop_suffix" : ":Train"
				},
				{
					"name" : "Plane",
					"id" : 1,
					"profile" : "plane",
					"emoji" : "✈️"
				},


			];

// FUNCTIONS



function reset_map(map) {
	map.eachLayer(function (layer) {
			        map.removeLayer(layer);
			    });

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);
}

function show_options_settings(elementValue){
	passengers=document.getElementById("passengers_div");
	if (passengers != null) {
			passengers.remove();
	}

	addstep_button=document.getElementById("div-add-step");

	if ((elementValue.value == "Car") || (elementValue.value == "Electric Car")){
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
	if ((elementValue.value.includes("SNCF")) || (elementValue.value.includes("train"))){
		if (addstep_button != null) {
				addstep_button.style.display="none";
				for (i=0; i<=step_number+1;i++){
					delete_step();
				}
		}
	}else{
		if (addstep_button != null) {
				addstep_button.style.display="";
		}
	}
}

// UI STEP MANAGEMENT

function delete_step(){
	if (step_number > 0)
	{
		var element = document.getElementById('step-'+step_number);
		element.remove();
		element = document.getElementById('div-step-'+step_number);
		element.remove();
		element = document.getElementById('step-'+step_number+"-dropdownList");
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
	new_step.className = "mb-3 input-group";
	new_step.id="div-step-"+step_number;
	var input = document.createElement("input");
	input.type = "text";
	input.placeholder = "Step "+step_number;
	input.id="step-"+step_number;
	input.setAttribute('list', "step-"+step_number+"-dropdownList");
	input.className = "form-control empty required";
	var datalist = document.createElement("datalist");
	datalist.id="step-"+step_number+"-dropdownList"
	new_step.appendChild(input);
	const currentDiv = document.getElementById("div-manage-step");
	document.getElementById("route-details").insertBefore(new_step, currentDiv);
	document.getElementById("route-details").insertBefore(datalist, currentDiv);

	var x = document.getElementById("div-delete-step");
	if (x.style.display === "none") {
	  x.style.display = "";
	} 

	input.addEventListener('keyup',debounce(() => {
	    //console.log('idle...')
	    queryGeocodeAPIforDropdown(input.id,input.value);
	  }, 500));

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

async function create_geojson_nominatim(locality_array) {
	var geojson_route = [];
	var route_gps = [];
	var undefined_step = false;
	for (item of locality_array) {
		if (!isValidGPSAny(item)){
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
				//console.log(gps_json[0].display_name);
				geojson_route.push("["+JSON.stringify(gps_json[0]["lon"])+','+JSON.stringify(gps_json[0]["lat"])+"]");	
				}
			});
		}else{
			if(isValidGPSDMS(item)){
				geojson_route.push("["+swapCoordinates(DMStoDD(item))+"]");
			}else{
				geojson_route.push("["+swapCoordinates(item)+"]");
			}
		}
	}
	//console.log(geojson_route.join(","));
	if (undefined_step) {
		geojson_route = []; 
	}
	return geojson_route;
}

async function create_geojson_openrouteservice(locality_array) {
	var geojson_route = [];
	var route_gps = [];
	var undefined_step = false;
	for (item of locality_array) {
		if (!isValidGPSAny(item)){
			await fetch('https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf62483a8b9711fdbd49c0b11b4087ad9a32ff&text='+item, {
		    method: 'GET'
			})
			.then(gps_json => gps_json.json())
			.then(gps_json => {
				if (Object.keys(gps_json).length === 0){
					console.log(item+" was not found in the Openrouteservice database");
					document.getElementById("calculation-result").innerHTML = "<div class='alert alert-warning' role='alert'><em>"+item+"</em> was not found in the Openrouteservice database, please be more specific for it or use a nearby location</div>"
					undefined_step = true;
					document.getElementById("loading").innerHTML = "";
				}else{
				route_gps.push(gps_json);
				//console.log(gps_json);
				geojson_route.push(JSON.stringify(gps_json["features"][0]["geometry"]["coordinates"]));	
				}
			});
		}else{
			if(isValidGPSDMS(item)){
				geojson_route.push("["+swapCoordinates(DMStoDD(item))+"]");
			}else{
				geojson_route.push("["+swapCoordinates(item)+"]");
			}
		}
	}
	//console.log(geojson_route.join(","));
	if (undefined_step) {
		geojson_route = []; 
	}
	return geojson_route;
}

function clear_fields() {
	location.reload();
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


function get_crowfly_distance(geojson_route){
	var distance=0;
	for (i=0; i<geojson_route.length-1; i++){
			//console.log(geojson_route[i]);
			distance += getDistanceFromLatLonInm(geojson_route[i].split(",")[0].replace("[","").replace(/\"/g,""),geojson_route[i].split(",")[1].replace("]","").replace(/\"/g,""),geojson_route[i+1].split(",")[0].replace("[","").replace(/\"/g,""),geojson_route[i+1].split(",")[1].replace("]","").replace(/\"/g,""));
	}
	return(distance);
}

function get_crowfly_route(geojson_route){
	//console.log(geojson_route);
	var result = {
		"type" : "FeatureCollection",
		"bbox" : [-0.376976, 39.465088, 6.131541, 45.900415],
		"features" : [{
				"bbox" : [-0.376976, 39.465088, 6.131541, 45.900415],
				"type" : "Feature",
				"properties" : {
					"segments" : [
						{
							"distance" : 0
						}]},
				"geometry" : {
					"type" : "LineString",
					"coordinates" : []
				}
			}]
	};
	for (i=0; i<geojson_route.length-1; i++){
		//console.log(geojson_route[i].replace("[","").replace("]","").replace(/\"/g,"").split(",")[1])
		result.features[0].geometry.coordinates.push([geojson_route[i].replace("[","").replace("]","").replace(/\"/g,"").split(",")[0],geojson_route[i].replace("[","").replace("]","").replace(/\"/g,"").split(",")[1]]);
		result.features[0].geometry.coordinates.push([geojson_route[i+1].replace("[","").replace("]","").replace(/\"/g,"").split(",")[0],geojson_route[i+1].replace("[","").replace("]","").replace(/\"/g,"").split(",")[1]]);
		// var coord = geojson_route[i].split(",")[0].replace("[","").replace(/\"/g,"");
		// console.log(coord);
	}
	result.features[0].properties.segments.distance=get_crowfly_distance(geojson_route);
	//console.log(result);
	return(result);

}

//ADEME API CONVERSION FUNCTION

async function get_ademe_co2(route_distance, transportation_id){

	const result = fetch('https://api.monimpacttransport.fr/beta/getEmissionsPerDistance?km='+route_distance/1000+'&transportations='+transportation_id, {
					    method: 'GET'
					})
					.then(ademe_output => ademe_output.json())
					.then(ademe_output => {
						var co2_emissions = parseFloat(ademe_output[0].emissions.kgco2e);
						//console.log("co2_emissions: "+co2_emissions);
						return(co2_emissions);
					});
	if(result == undefined){
			document.getElementById("loading").innerHTML = "";
			document.getElementById("calculation-result").innerHTML = "<div class='alert alert-danger' role='alert'>An error occured during CO2 conversion, please retry</div>"
		}
	return(result);
}

//OPENROUTESERVICE API ROUTE FUNCTION

async function get_openrouteservice_route(geojson_text, transportation_profile){
	var error = true;
	const result = await fetch('https://api.openrouteservice.org/v2/directions/'+transportation_profile+'/geojson', {
		    method: 'POST',
		    headers: {
		        'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png',
		        'Authorization' : '5b3ce3597851110001cf62483a8b9711fdbd49c0b11b4087ad9a32ff',
		        "Content-Type": "application/json"
		        },
		    body: geojson_text
		}).then(response => { 
			if (response.status == 200) {
				error = false;	
		  	}
		  	return response.json();
		}).then(content => {
						if (error == false){
							return content;
						}else{
							document.getElementById("loading").innerHTML = "";
							document.getElementById("calculation-result").innerHTML = "<div class='alert alert-danger' role='alert'>"+content.error.message+"</div>"
							return undefined;
						}
					})
	return result;

}


//BROUTER API ROUTE FUNCTION

async function get_brouter_route(geojson_route, transportation_profile){
	var error = true;
	var gps_path = geojson_route.join(",").replace(/\],\[/g,"|").replace(/\[/g,"").replace(/\]/g,"").replace(/\"/g,"");
	const result = fetch('https://brouter.de/brouter?lonlats='+gps_path+'&profile='+transportation_profile+'&alternativeidx=0&format=geojson', {
					    method: 'GET'
					}).then(response => { 
						if (response.status == 200) {
					    	error=false;
					    	return response.json();
					  	}else{
					  		return response.text();
					  	}
					}).then(content => {
						if (error == false){
							return content;
						}else{
							document.getElementById("loading").innerHTML = "";
							if(content.includes("from-position")){
								document.getElementById("calculation-result").innerHTML = "<div class='alert alert-danger' role='alert'>Departure point is not a railway station</div>"
							}else if (content.includes("to-position")){
								document.getElementById("calculation-result").innerHTML = "<div class='alert alert-danger' role='alert'>Arrival point is not a railway station</div>"
							}
							else if (content.includes("no track found")){
								document.getElementById("calculation-result").innerHTML = "<div class='alert alert-danger' role='alert'>A provided location is not on rail tracks</div>"
							}
							else{
								document.getElementById("calculation-result").innerHTML = "<div class='alert alert-danger' role='alert'>An error occured during route processing ("+content+"), please retry</div>"
							}
							return undefined;
						}
					})
	return result;
}

function concatGeoJSON(g1, g2){
    return { 
        "type" : "LineString",
        "coordinates": g1.coordinates.concat(g2.coordinates),
        "properties":[{"length" : g1["properties"][0]["length"]+g2["properties"][0]["length"]}]
    }
}

async function calculate_co2_route() {
	var departure = document.getElementById("departure").value;
	var arrival = document.getElementById("arrival").value;
	var route_steps = [];
	var route =[];
	route_steps[0]=departure;
	route_steps[step_number+1]=arrival;

	for (let step = 1; step <= step_number; step++) {
		route_steps[step]=document.getElementById("step-"+step).value;
	}

	document.getElementById("calculation-result").innerHTML = "";

	if(validate(route_steps)){
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

		

			geojson_route= await create_geojson_nominatim(route_steps);
			if (geojson_route.length == 0){
				geojson_route= await create_geojson_openrouteservice(route_steps);
			}
			if (geojson_route.length > 0){
				geojson_text='{"coordinates":['+geojson_route.join(',')+']}';
				arrival_pretty_gps_coordonates["lon"] = getDD2DMS(geojson_route.slice(-1)[0].split(",")[0].replace("[","").replace(/\"/g,""),"lon");
				arrival_pretty_gps_coordonates["lat"] = getDD2DMS(geojson_route.slice(-1)[0].split(",")[1].replace("]","").replace(/\"/g,""),"lat");
				//console.log("Geojson "+geojson_text);

				// IF TRANSPORTATION IS A ROAD VEHICULE
				if ((transportation_profile == "driving-car")||(transportation_profile == "cycling-regular")){
					route = await get_openrouteservice_route(geojson_text, transportation_profile);
					if (route != undefined){
						route_distance = route.features[0].properties.summary.distance;
					  	co2_emissions = await get_ademe_co2(route_distance, transportation_id);
					  }
				}
				
				if(transportation_profile == "plane"){
					route = get_crowfly_route(geojson_route);
					route_distance=get_crowfly_distance(geojson_route);
					co2_emissions=await get_ademe_co2(route_distance, transportation_id);
				}

				if(transportation_profile == "train"){
					route = await get_brouter_route(geojson_route,"rail");
					if (route != undefined){
						route_distance = route.features[0]["properties"]["track-length"];
				  		co2_emissions = await get_ademe_co2(route_distance, transportation_id);
				  	}
				}

				//console.log(route);
				//console.log(route_distance);
				//console.log(co2_emissions);


				if (route != undefined){
				  	if(co2_emissions != undefined){
					  	var co2_emissions_individual = (co2_emissions/passengers).toFixed(2);
						document.getElementById("loading").innerHTML = "";
						itineraries.push({"departure": departure,"arrival":arrival,"geojson_route":geojson_route,"transportation":transportation,"passengers":passengers, "route":route, "distance":route_distance,"co2_emissions":co2_emissions});
						render_total(itineraries);	
					}
				}			
			}
				
		}
	}
// }

function render_total(itineraries){
	var total = {
		"co2_emissions" : 0,
		"co2_emissions_individual" : 0,
		"distance" : 0
	};
	reset_map(map);
	document.getElementById("calculation-result").innerHTML="";
	for (itinerary in itineraries){
		//console.log(itineraries[itinerary]["route"]);
		L.geoJSON(itineraries[itinerary]["route"],{
        // color: '#f2e253',
        // weight: 5,
    	}).addTo(map);
		map.fitBounds(L.geoJSON(itineraries[itinerary]["route"]).getBounds());
		total["co2_emissions"]=parseFloat(total["co2_emissions"])+parseFloat(itineraries[itinerary]["co2_emissions"]);
		total["co2_emissions_individual"]=parseFloat(total["co2_emissions_individual"])+(parseFloat(itineraries[itinerary]["co2_emissions"])/parseFloat(itineraries[itinerary]["passengers"]));
		total["distance"]=parseFloat(total["distance"])+parseFloat(itineraries[itinerary]["distance"]);
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
	//console.log(itineraries);
	render_total(itineraries);
}


// DROPDOWN FUNCTIONS

function debounce(fn, duration) {
  var timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(fn, duration)
  }
}

function populateDropdown(propertyNames, step) {
  var dropdown = document.getElementById(step+"-dropdownList");
  // Clear existing options
  dropdown.innerHTML = "";
  // Create and append new options
  propertyNames.forEach(function (propertyName) {
    var listItem = document.createElement("option");
    listItem.textContent = propertyName;
    listItem.classList="dropdown-item";
    listItem.addEventListener("click", function () {
      inputField.value = propertyName;
      dropdown.parentNode.classList.remove("open");
    });
    dropdown.appendChild(listItem);
  });
}

function queryGeocodeAPIforDropdown(step,inputText) {
  const dropdownList = document.getElementById(step+'-dropdownList');
  dropdownList.innerHTML = ''; // Clear previous results
  // Make an API request
  fetch(`https://api.openrouteservice.org/geocode/autocomplete?api_key=5b3ce3597851110001cf62483a8b9711fdbd49c0b11b4087ad9a32ff&text=${encodeURIComponent(inputText)}`)
  // fetch(`https://photon.komoot.io/api/?q==${encodeURIComponent(inputText)}`)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      // Extract property names from the API response
      var propertyNames = [];
      data.features.forEach(function (feature) {
        //console.log(feature);
        propertyName=feature.properties.label;
        if (!propertyNames.includes(propertyName)) {
          propertyNames.push(propertyName);
        }
      });
    // Populate the dropdown with property names
    populateDropdown(propertyNames,step);
  })
  .catch(function (error) {
    console.log(error);
  });
}


// OTHERS FUNCTIONS

function getDistanceFromLatLonInm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c * 1000; // Distance in m
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function popup(text){
	alert(text);
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


//CHATGPT GENERATED FUNCTIONS

function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');

  const formattedDateTime = `${year}-${month}-${day}_${hour}-${minute}-${second}`;
  return formattedDateTime;
}

function isValidGPS(str) {
  // Regex pattern to match decimal degrees
  const regex = /^-?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*-?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
  const match = regex.exec(str);
  if (!match) {
    return false;
  }
  // Parse latitude and longitude from match
  const latitude = parseFloat(match[1]);
  const longitude = parseFloat(match[4]);
  // Check that latitude and longitude are within valid range
  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    return false;
  }
  return true;
}

function isValidGPSDMS(str) {
  // Regex pattern to match DMS format
  const regex = /^([NS])?(\d{1,3})°(\d{1,2})'(\d{1,2}(\.\d+)?)\"\s*([EW])?(\d{1,3})°(\d{1,2})'(\d{1,2}(\.\d+)?)?\"$/;
  const match = regex.exec(str);
  if (!match) {
    return false;
  }
  // Parse latitude and longitude from match
  const latitude = parseFloat(match[2]) + parseFloat(match[3])/60 + parseFloat(match[4])/3600;
  const longitude = parseFloat(match[7]) + parseFloat(match[8])/60 + parseFloat(match[9])/3600;
  // Check that latitude and longitude are within valid range
  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    return false;
  }
  return true;
}

function isValidGPSAny(str) {
  // Check if string is valid GPS coordinate in decimal degrees format
  if (isValidGPS(str)) {
    return true;
  }
  // Check if string is valid GPS coordinate in DMS format
  if (isValidGPSDMS(str)) {
    return true;
  }
  // If string is not a valid GPS coordinate in either format, return false
  return false;
}

function DMStoDD(dms) {
  // Split DMS string into components
  const parts = dms.split(/[^\d\w\.]+/);
  
  // Extract degrees, minutes, and seconds from components
  const degrees = parseFloat(parts[0]);
  const minutes = parseFloat(parts[1]);
  const seconds = parseFloat(parts[2]);

  // Calculate decimal degrees value
  let dd = degrees + (minutes / 60) + (seconds / 3600);

  // Check if coordinate is in southern or western hemisphere and flip sign
  if (parts[3] === "S" || parts[3] === "W") {
    dd = -dd;
  }

  return dd;
}


function swapCoordinates(str) {
  const dd = str.split(",").map(parseFloat);
  
  if (dd.length !== 2) {
    throw new Error("Invalid coordinate format");
  }
  
  const swapped = [dd[1], dd[0]];
  return swapped.join(",");
}


// MAIN

var x = document.getElementById("calculation-result");
if (x.style.display === "none") {
  x.style.display = "block";
} 			



//LISTENERS

var departure = document.getElementById('departure');
departure.addEventListener('keyup',debounce(() => {
    if(departure.value != ""){
    	queryGeocodeAPIforDropdown(departure.id,departure.value);
    }

  }, 500));

var arrival = document.getElementById('arrival');
arrival.addEventListener('keyup',debounce(() => {
    if(arrival.value != ""){
    	queryGeocodeAPIforDropdown(arrival.id,arrival.value);
    }
  }, 500));

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

document.getElementById('transportation').oninput = function(){
		 this.classList.remove('empty');
		 this.classList.remove('invalid');
		 this.classList.remove('valid');
     if (this.value != "") {
     	  this.classList.add('valid') // if validation is true
     }else{
     		this.classList.add('invalid') // if validation is false
     }
}