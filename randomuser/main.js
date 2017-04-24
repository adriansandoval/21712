const {app,BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	PantallaPrincipal = new BrowserWindow({
		width:1024,
		height:768
	})
	PantallaPrincipal.on('closed',function(){
		PantallaPrincipal = null
	})
	//PantallaPrincipal.loadURL('http://www.marca.com')
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}))
	PantallaPrincipal.show()
}

//La aplicación ejecuta este event cuando el archivo main.js se carga en memoria.
app.on('ready', muestraPantallaPrincipal)