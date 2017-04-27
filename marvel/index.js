const rq = require('electron-require');
const main = rq.remote('./main.js');
const $ = require("jquery");


$('#txtPersonaje').focus();

$('#btnBuscar').on('click', buscarPersonaje);