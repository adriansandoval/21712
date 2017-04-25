const rq = require('electron-require');
const main = rq.remote('./main.js');
const $ = require("jquery");

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    $("#txtNombre").html(data.results[0].name.first + " " + data.results[0].name.last)
  }
});
     