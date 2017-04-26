const rq = require('electron-require');
const main = rq.remote('./main.js');
const $ = require("jquery");


function datosRandom(){
	$.ajax({
	  url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: function(data) {
	  	$("#txtGender").html(data.results[0].gender)
	    $("#txtNombre").html(data.results[0].name.first + " " + data.results[0].name.last)
	    $("#txtLocation").html(data.results[0].location.street + ", " + data.results[0].location.city + ", " + data.results[0].location.state + ", " + data.results[0].location.postcode)
	    $("#txtEmail").html(data.results[0].email)
	    $("#txtDob").html(data.results[0].dob)
	    $("#txtRegistered").html(data.results[0].registered)
	    $("#imgFoto").attr("src", data.results[0].picture.large)
	  },
	  error: function(a,b,c) {
	  	alert("No funciona");
	  }
	});	
}

$("#btnInfo").on("click", datosRandom);

     