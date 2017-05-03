const {app,BrowserWindow} = require('electron')
const electron = require('electron')
const path = require('path')
const url = require('url')
let PantallaPrincipal;
//Constantes para impresión en PDF
const fs = require('fs')//Sistema de archivos
const os = require('os')//Sistema Operativo
//Llamada al procedimiento interno
const ipc = electron.ipcMain
//Interfaz de comandos(terminal)
const shell = electron.shell

//Evento para Imprimir en PDF
ipc.on('print-to-pdf', function(event){
	const pdfPath = path.join(os.tmpdir(), 'print.pdf')
	const win = BrowserWindow.fromWebContents(event.sender)
	win.fromWebContents.printToPDF({},function(error,data){
		if(error)
			throw error;
		fs.writeFile(pdfPath, data, function(error){
			if(error)
				throw error;
			shell.openExternal('file://' + pdfPath)
		})
	})
})

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
	PantallaPrincipal.webContents.openDevTools()
	PantallaPrincipal.show()
}

//La aplicación ejecuta este event cuando el archivo main.js se carga en memoria.
app.on('ready', muestraPantallaPrincipal)