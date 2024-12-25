
var humid = document.getElementById('humedad');
var deg = document.getElementById('grados');
var city = document.getElementById('names');
var boton = document.getElementById('combo');

var coor = document.getElementById('coordenadas');

var key = 'Aqui va tu key';




function prueba () {
	fetch(`https://api.openweathermap.org/data/2.5/weather?id=${boton.value}&appid=${key}`)
	.then(response => response.json())
	.then(function data(boton){

		var celsius = boton.main.temp;
		var conversion = 0
		conversion = Math.floor(celsius-273)

		city.innerHTML = boton.name
	    coor.innerHTML = `<div class="col-6 color2 bg-white">
					      <span id="lat">Latitud: ${boton.coord.lat}</span>
				          </div>
				          <div class="col-6 color bg-secondary">
					      <span id="long">Longitud: ${boton.coord.lon}</span>
				          </div>`;
		deg.innerHTML =+ conversion + `°C`;
		humid.innerHTML = `<span>Humedad: ${boton.main.humidity}</span>`


		
	});
	

}
